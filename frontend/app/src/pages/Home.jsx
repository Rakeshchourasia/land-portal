import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import useAuth from '../hooks/useAuth';

import { 
  ChevronLeft, ChevronRight, Home, Building2, Key, MapPin, Ruler, Building, 
  ArrowRight, Loader2, TrendingUp, Shield, Award, Users, Star, Check, 
  Phone, Mail, Clock, DollarSign, Sparkles, Lock 
} from 'lucide-react';

const API_URL = "https://land-portal-or0a.onrender.com";


export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("All Types");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  const { user } = useAuth();
  const isPremium = user?.subscription?.status === 'active';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const fetchFeaturedProperties = async () => {
      try {
        const { data } = await api.get('/properties?limit=4&sortBy=createdAt:desc'); 
        setFeaturedProperties(data.properties);
      } catch (err) {
        setError("Could not load featured properties.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFeaturedProperties();
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (searchLocation.trim()) {
      queryParams.append('location', searchLocation.trim());
    }
    if (searchType !== "All Types") {
      queryParams.append('propertyType', searchType);
    }
    navigate(`/properties?${queryParams.toString()}`);
  };

  const handleExploreClick = (propertyTitle) => {
    const queryParams = new URLSearchParams();
    switch (propertyTitle) {
      case "Plots & Land":
      case "Apartments":
      case "Luxury Villas":
        queryParams.append('propertyType', 'Residential');
        break;
      case "Commercial Spaces":
        queryParams.append('propertyType', 'Commercial');
        break;
      default:
        break;
    }
    navigate(`/properties?${queryParams.toString()}`);
  };

  const propertyTypes = [
    { id: 1, title: "Plots & Land", count: "300+ Options", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80", gradient: "from-emerald-500 to-teal-600" },
    { id: 2, title: "Apartments", count: "150+ Listings", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80", gradient: "from-blue-500 to-indigo-600" },
    { id: 4, title: "Luxury Villas", count: "40+ Estates", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80", gradient: "from-purple-500 to-pink-600" },
    { id: 5, title: "Commercial Spaces", count: "70+ Units", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80", gradient: "from-orange-500 to-red-600" }
  ];

  const services = [
    { id: 1, title: "Buy Property", description: "Find your future home from our curated selection of verified properties. Your dream is just a click away.", icon: <Home size={32} />, gradient: "from-blue-500 to-cyan-500", features: ["Verified Listings", "Virtual Tours", "Price Negotiation"] },
    { id: 2, title: "Sell Property", description: "Get the best value for your property. Our platform connects you with serious buyers for a fast, reliable sale.", icon: <Building2 size={32} />, gradient: "from-purple-500 to-pink-500", features: ["Free Valuation", "Professional Photos", "Wide Reach"] },
    { id: 3, title: "Expert Guidance", description: "Our dedicated agents provide support and insights, ensuring a seamless and confident real estate journey.", icon: <Key size={32} />, gradient: "from-orange-500 to-red-500", features: ["Legal Support", "Market Analysis", "24/7 Assistance"] },
  ];

  const testimonials = [
    { id: 1, name: "Anjali Sharma", role: "First-time Home Buyer", text: "The platform made finding our first home in Patna so easy. The listings were genuine and the process was transparent.", image: "https://i.pravatar.cc/100?img=25", rating: 5 },
    { id: 2, name: "Rajesh Kumar", role: "Land Seller", text: "I sold my plot within a month! The visibility and support I received were beyond my expectations. Highly recommended.", image: "https://i.pravatar.cc/100?img=32", rating: 5 },
    { id: 3, name: "Priya Singh", role: "Real Estate Investor", text: "A fantastic resource for market insights and finding investment-worthy properties. Their team is professional and knowledgeable.", image: "https://i.pravatar.cc/100?img=49", rating: 5 },
  ];

  const stats = [
    { label: "Properties Listed", value: "5,000+", icon: <Building size={24} /> },
    { label: "Happy Customers", value: "10,000+", icon: <Users size={24} /> },
    { label: "Cities Covered", value: "25+", icon: <MapPin size={24} /> },
    { label: "Success Rate", value: "98%", icon: <TrendingUp size={24} /> }
  ];
  
  const PropertyCard = ({ prop, index, isPremium }) => (
    <div 
      className="relative bg-white rounded-2xl overflow-hidden group border border-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}
    >
      <Link to={`/property/${prop._id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={`${API_URL}/${prop.images[0].replace(/\\/g, '/')}`} 
            alt={prop.title} 
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Sparkles size={14} />
            {prop.propertyType}
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-lg">
            NEW
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-xl text-gray-800 mb-4 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
            {prop.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
            <span className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
              <Ruler size={16} className="mr-1.5 text-blue-600" /> 
              {prop.area} sqft
            </span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {isPremium ? (
              <div>
                <p className="text-xs text-gray-500 mb-1">Starting from</p>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ₹{new Intl.NumberFormat('en-IN').format(prop.price)}
                </span>
              </div>
            ) : (
              <Link to="/subscribe" className="cursor-pointer group/price">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Starting from</p>
                  <span className="text-2xl font-bold text-slate-800 filter blur-sm select-none">
                      ₹*********
                  </span>
                  <p className="flex items-center gap-1 text-xs text-indigo-600 font-semibold transition-colors group-hover/price:text-purple-600">
                    <Lock size={12}/>
                    Premium Only
                  </p>
                </div>
              </Link>
            )}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="bg-white text-gray-800 font-sans w-full overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-60"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-6">
              🏡 #1 Land Portal in Patna
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br />
            <span className="relative">
              Land Today
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10">
                <path d="M0,5 Q150,0 300,5" stroke="url(#gradient)" strokeWidth="3" fill="none" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className={`max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Connecting dreams to addresses with <span className="text-cyan-400 font-semibold">trust</span>, <span className="text-purple-400 font-semibold">transparency</span>, and <span className="text-pink-400 font-semibold">technology</span>.
          </p>
          
          <div className={`w-full max-w-4xl mx-auto transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <div className="w-full flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                  <MapPin className="text-cyan-400 mr-3 flex-shrink-0" size={20} />
                  <input 
                    type="text" 
                    placeholder="Enter location (e.g., Boring Road, Kankarbagh)..." 
                    className="w-full bg-transparent focus:outline-none text-white placeholder-gray-300" 
                    value={searchLocation} 
                    onChange={(e) => setSearchLocation(e.target.value)} 
                  />
                </div>
                
                <div className="w-full lg:w-auto flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                  <Building className="text-purple-400 mr-3 flex-shrink-0" size={20} />
                  <select 
                    className="w-full lg:w-48 bg-transparent focus:outline-none text-white cursor-pointer [&>option]:text-gray-800" 
                    value={searchType} 
                    onChange={(e) => setSearchType(e.target.value)}
                  >
                    <option>All Types</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Agricultural</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full lg:w-auto flex-shrink-0 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Search Properties</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-2">
                <TrendingUp size={16} className="text-green-400" />
                Trending: Boring Road
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                Popular: Kankarbagh
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400" />
                New: Bailey Road
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-600 text-sm font-semibold mb-4">
              EXPLORE CATEGORIES
            </span>
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Property Types
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover diverse property options tailored to your unique needs and aspirations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((property) => (
              <div key={property.id} className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${property.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                </div>
                <div className="relative h-80 flex flex-col justify-end p-6">
                  <div className="transform transition-all duration-300 group-hover:translate-y-[-10px]">
                    <h3 className="text-3xl font-bold text-white mb-2">{property.title}</h3>
                    <p className="text-white/90 mb-4">{property.count}</p>
                    <button 
                      onClick={() => handleExploreClick(property.title)}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors duration-300 flex items-center gap-2"
                    >
                      Explore <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-600 text-sm font-semibold mb-4">
              HOT DEALS
            </span>
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Properties
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked properties that offer exceptional value and prime locations.
            </p>
          </div>
          
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="relative">
                <Loader2 className="h-16 w-16 animate-spin text-purple-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 bg-purple-600 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          
          {!loading && !error && (
            featuredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProperties.map((prop, index) => (
                  <PropertyCard key={prop._id} prop={prop} index={index} isPremium={isPremium} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <Building2 size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500 text-lg">No featured properties available at the moment.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-600 text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience excellence at every step of your real estate journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.gradient} rounded-2xl blur-xl`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-2xl text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Check size={16} className="mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to="#" className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold group`}>
                    Learn More 
                    <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-orange-600 text-sm font-semibold mb-4">
              CLIENT STORIES
            </span>
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Happy Customers
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from real people who found their dream properties with us.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
                      <div className="mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="inline-block w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-gradient-to-r from-orange-400 to-red-400 ring-offset-4" 
                      />
                      <h4 className="font-bold text-xl text-gray-800 mb-1">{testimonial.name}</h4>
                      <p className="text-orange-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'w-8 bg-gradient-to-r from-orange-600 to-red-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 mx-auto">
            <Sparkles size={40} className="text-white" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Find Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Dream Property?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of happy customers who have found their perfect land through our platform. Your journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/properties" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Browse All Properties
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              <Phone size={20} className="mr-2" />
              Contact Us Today
            </button>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-8 justify-center text-white">
            <div className="flex items-center gap-2">
              <Shield size={24} className="text-yellow-400" />
              <span className="font-semibold">100% Verified Listings</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={24} className="text-green-400" />
              <span className="font-semibold">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={24} className="text-pink-400" />
              <span className="font-semibold">Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Stay Updated
                  </span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Get exclusive property deals and market insights delivered to your inbox.
                </p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Check size={16} className="text-green-500" />
                    Weekly Updates
                  </div>
                  <div className="flex items-center gap-1">
                    <Check size={16} className="text-green-500" />
                    No Spam
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}