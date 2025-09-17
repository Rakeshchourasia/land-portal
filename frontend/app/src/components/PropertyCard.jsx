import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Lock, Scaling, Building, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import useAuth from '../hooks/useAuth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function PropertyCard({ property }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { user } = useAuth();
  const isPremium = user?.subscription?.status === 'active';

  const nextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <div className="relative">
        <Link to={`/property/${property._id}`}>
          <img 
            src={`${API_URL.replace('/api', '')}/${property.images[currentImageIndex].replace(/\\/g, '/')}`} 
            alt={property.title} 
            className="aspect-[4/3] w-full object-cover transition-opacity duration-300"
          />
        </Link>
        
        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-full hover:bg-opacity-60 transition-opacity opacity-0 group-hover:opacity-100 focus:outline-none z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-full hover:bg-opacity-60 transition-opacity opacity-0 group-hover:opacity-100 focus:outline-none z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {property.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {property.images.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`} 
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-4">
        {/* Adjusted bottom margin on the title for better spacing */}
        <h3 className="text-lg font-bold mb-4 truncate group-hover:text-amber-600">{property.title}</h3>
        
        {/* The <p> tag for location has been removed from here */}
        
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 border-t pt-3 mb-4">
            <p className="flex items-center gap-1.5"><Building size={14} /> {property.propertyType}</p>
            <p className="flex items-center gap-1.5"><Compass size={14} /> {property.facing}-Facing</p>
            <p className="flex items-center gap-1.5"><Scaling size={14} /> {property.area} sq.ft</p>
        </div>

        <div className="flex justify-between items-center">
          {isPremium ? (
            <span className="font-extrabold text-xl text-slate-800 dark:text-slate-100">
              ₹{new Intl.NumberFormat('en-IN').format(property.price)}
            </span>
          ) : (
            <Link to="/subscribe" className="cursor-pointer group/price">
              <div>
                <span className="font-extrabold text-xl text-slate-800 dark:text-slate-100 filter blur-sm select-none">
                  ₹*********
                </span>
                <p className="flex items-center gap-1 text-xs text-amber-600 -mt-1 font-semibold transition-colors group-hover/price:text-amber-700">
                  <Lock size={12}/> 
                  Premium Only
                </p>
              </div>
            </Link>
          )}
          
          <Link to={`/property/${property._id}`} className="text-sm font-semibold text-amber-600 hover:text-amber-700">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}