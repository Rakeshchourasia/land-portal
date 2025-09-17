import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import useAuth from '../hooks/useAuth';
import SubscriptionPage from './SubscriptionPage';
import { Loader2, MapPin, Building, Ruler, Compass, User, Phone, FileText, CheckCircle } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// --- Sub-Components ---
const FeatureIcon = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-gray-700/50 rounded-lg">
    <div className="flex-shrink-0 text-green-600 dark:text-green-400">
      {icon}
    </div>
    <div>
      <p className="text-sm text-slate-500 dark:text-gray-400">{label}</p>
      <p className="font-semibold text-slate-800 dark:text-white">{value}</p>
    </div>
  </div>
);

const PropertyContent = ({ property }) => {
  const [selectedImage, setSelectedImage] = useState(property.images[0]);

  return (
    <div className="bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 space-y-12">
        {/* --- Image Gallery --- */}
        <div>
          <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
            <img 
              src={`${API_URL.replace('/api', '')}/${selectedImage.replace(/\\/g, '/')}`} 
              alt="Main property view" 
              className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={`${API_URL.replace('/api', '')}/${img.replace(/\\/g, '/')}`}
                alt={`Property thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-all duration-200 shadow-md hover:shadow-xl ${selectedImage === img ? 'ring-4 ring-green-500' : 'opacity-70 hover:opacity-100'}`}
              />
            ))}
          </div>
        </div>

        {/* --- Main Two-Column Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm ring-1 ring-black/5 p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-slate-800 dark:text-white">{property.title}</h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-gray-400 flex items-center gap-2">
                <MapPin size={18} /> {property.location}
              </p>
            </div>
            
            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-gray-300">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <FeatureIcon icon={<Building size={24}/>} label="Type" value={property.propertyType} />
                <FeatureIcon icon={<Ruler size={24}/>} label="Area" value={`${property.area} sq.ft`} />
                <FeatureIcon icon={<Compass size={24}/>} label="Facing" value={property.facing} />
                <FeatureIcon icon={<CheckCircle size={24}/>} label="Open Sides" value={property.openSides} />
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-slate-700 dark:text-gray-300">Description</h2>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">{property.description}</p>
            </div>

            {/* Documents */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-gray-300">Documents</h2>
                {property.documents && property.documents.length > 0 ? (
                    property.documents.map((doc, index) => (
                      <a key={index} href={`${API_URL.replace('/api', '')}/${doc.replace(/\\/g, '/')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-600 hover:underline mb-2">
                        <FileText className="h-5 w-5"/>
                        <span>Download Document {index + 1}</span>
                      </a>
                    ))
                ) : <p className="text-slate-500">No documents available.</p>}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1 sticky top-24">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm ring-1 ring-black/5 p-6 space-y-6">
              {/* Price */}
              <div>
                <p className="text-sm text-slate-500 dark:text-gray-400">Total Price</p>
                <p className="text-4xl font-bold text-green-600">₹{new Intl.NumberFormat('en-IN').format(property.price)}</p>
              </div>
              
              {/* --- UPDATED OWNER INFO SECTION --- */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-white">Owner Information</h3>
                <div className="space-y-3 text-sm">
                  {/* Name and Relation */}
                  <p className="flex items-center gap-2 text-slate-600 dark:text-gray-400">
                    <User size={14}/> 
                    <strong>{property.ownerName}</strong> 
                    ({property.ownerRelation})
                  </p>
                  {/* Phone Number */}
                  <p className="flex items-center gap-2 text-slate-600 dark:text-gray-400">
                    <Phone size={14}/> 
                    <strong>{property.ownerPhone}</strong>
                  </p>
                </div>
              </div>
              {/* Contact Button has been removed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Main export component that handles logic
export default function PropertyDetails() {
  const { id } = useParams();
  const { user, isPremium, loading: authLoading } = useAuth();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [canView, setCanView] = useState(false);

  useEffect(() => {
    if (authLoading) return;

    const fetchPropertyAndCheckPermissions = async () => {
      try {
        const { data } = await api.get(`/properties/${id}`);
        setProperty(data);

        if (user) {
          if (user.role === 'admin' || user._id === data.seller) {
            setCanView(true);
          } else if (user.role === 'buyer' && isPremium) {
            setCanView(true);
          } else {
            setCanView(false);
          }
        } else {
          setCanView(false);
        }
      } catch (err) {
        console.error("Failed to fetch property", err);
        setCanView(false);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyAndCheckPermissions();
  }, [id, user, isPremium, authLoading]);

  if (authLoading || loading) {
    return <div className="flex justify-center items-center h-screen bg-slate-50"><Loader2 className="h-10 w-10 animate-spin text-green-600" /></div>;
  }

  if (canView && property) {
    return <PropertyContent property={property} />;
  }

  if (user?.role === 'buyer' && !isPremium) {
    return <SubscriptionPage />;
  }
  
  return <div className="text-center text-lg mt-10">You do not have permission to view this page or the property does not exist.</div>;
}