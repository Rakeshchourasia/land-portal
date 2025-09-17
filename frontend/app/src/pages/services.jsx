import React from 'react';
import { Home, Tag, Key, Briefcase, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const Service = () => {
  // Added source information for proper attribution
  const services = [
    {
      id: 1,
      title: "Buy Property",
      description: "Discover thousands of verified listings with advanced search capabilities to find your dream home or commercial space.",
      icon: Home,
      buttonText: "Find a Property",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
      source: { name: "Binyamin Mellish", link: "https://unsplash.com/@binyamins" }
    },
    {
      id: 2,
      title: "Sell Property",
      description: "We make selling simpler and faster with maximum visibility, whether you're an individual, builder, or real estate agent.",
      icon: Tag,
      buttonText: "List Your Property",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      source: { name: "Tierra Mallorca", link: "https://unsplash.com/@tierramallorca" }
    },
    {
      id: 3,
      title: "Rent Property",
      description: "Landlords and tenants can connect in real-time, ensuring a smooth rental process with zero brokerage options available.",
      icon: Key,
      buttonText: "Search Rentals",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
      source: { name: "Breno Assis", link: "https://unsplash.com/@brenoassis" }
    },
    {
      id: 4,
      title: "Agent & Builder Services",
      description: "Comprehensive tools and support for real estate professionals to manage leads, listings, and showcase their projects effectively.",
      icon: Briefcase,
      buttonText: "Explore Tools",
      image: "https://images.unsplash.com/photo-1556761175-b413da4b248a?q=80&w=1974&auto=format&fit=crop",
      source: { name: "austin distel", link: "https://unsplash.com/@austindistel" }
    },
    {
      id: 5,
      title: "Property Management",
      description: "We go beyond listings with end-to-end support, from legal assistance and tenant verification to interior design.",
      icon: Settings,
      buttonText: "View Add-ons",
      image: "https://images.unsplash.com/photo-1599696845627-2c6b3e21824c?q=80&w=1964&auto=format&fit=crop",
      source: { name: "C Dustin", link: "https://unsplash.com/@cdustin" }
    },
    {
      id: 6,
      title: "Market Insights",
      description: "Empowering you with data-driven analysis and intelligent tools to make confident and profitable real estate investments.",
      icon: TrendingUp,
      buttonText: "Analyze Market",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      source: { name: "Scott Graham", link: "https://unsplash.com/@homajob" }
    }
  ];

  const ctaImage = {
    url: "https://images.unsplash.com/photo-1600585152225-358b5c1fac95?q=80&w=2070&auto=format&fit=crop",
    source: { name: "R ARCHITECTURE", link: "https://unsplash.com/@rarchitecture_melbourne" }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-white pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-semibold text-emerald-600 mb-3">Our Expertise</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Comprehensive Real Estate Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From buying and selling to market analysis, we provide a complete spectrum of services to empower your property journey.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <div className="overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-lg mt-1">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Link */}
                  <div className="mt-auto pt-6">
                    <a href="#" className="inline-flex items-center gap-2 font-semibold text-emerald-600 group-hover:text-emerald-800 transition-colors">
                      {service.buttonText}
                      <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div 
            className="relative rounded-2xl p-12 text-center overflow-hidden bg-gray-800"
            style={{
              backgroundImage: `url('${ctaImage.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/80 to-teal-800/80"></div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
              <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                Our expert team is here to guide you. Contact us today to discuss your property needs and let us help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-50 transition-transform hover:scale-105 shadow-lg">
                  Contact Us Today
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-700 transition-all">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
     
     

    </div>
  );
};

export default Service;