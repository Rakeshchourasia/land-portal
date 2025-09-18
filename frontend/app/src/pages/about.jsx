import React from 'react';
import { MapPin, Users, Award, TrendingUp, Shield, Heart, Eye, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Unified Color Scheme */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
              <MapPin className="w-10 h-10 text-emerald-300" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              About LandPro
            </h1>
            <p className="text-xl lg:text-2xl font-light max-w-4xl mx-auto leading-relaxed text-emerald-50">
              Pioneering the future of land ownership through innovation, expertise, and unwavering commitment to your success
            </p>
          </div>
        </div>
      </div>

      {/* Story Section - Consistent Colors */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                Established 2010
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Journey in 
                <span className="text-emerald-600"> Land Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                What began as a vision to democratize land ownership has evolved into a movement. 
                LandPro started when our founders recognized that finding the right piece of land 
                shouldn't be complicated or overwhelming.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we've transformed hundreds of dreams into reality, from family homesteads 
                to commercial developments, each transaction guided by our core belief that land 
                is more than property—it's potential.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">750+</div>
                <div className="text-gray-600 font-medium">Properties Sold</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1,200+</div>
                <div className="text-gray-600 font-medium">Happy Families</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-teal-600 mb-2">75M+</div>
                <div className="text-gray-600 font-medium">Acres Transacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission - Unified Gradient Colors */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by vision, guided by mission, united in purpose
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex  items-center justify-center">
                    <Eye className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To revolutionize land acquisition by creating the most comprehensive, 
                  technology-driven platform that empowers every individual and business 
                  to discover, evaluate, and secure their ideal property with confidence 
                  and ease, building generational wealth through smart land investments.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver unparalleled land brokerage services through deep market 
                  expertise, cutting-edge technology, and genuine partnership. We connect 
                  people with perfect properties while ensuring transparent processes, 
                  competitive pricing, and lifelong relationships built on trust and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values - Unified Icon Colors */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every decision we make</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity First</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent communication and honest dealings in every transaction, 
                ensuring our clients make informed decisions with complete confidence.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Your dreams drive our mission. We invest time to understand your unique 
                goals and work relentlessly to exceed every expectation.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence Always</h3>
              <p className="text-gray-600 leading-relaxed">
                Setting industry standards through meticulous attention to detail, 
                continuous innovation, and unwavering commitment to quality service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services - Unified Card Colors */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your land needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
              <MapPin className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Residential Land</h3>
              <p className="text-gray-600">Perfect plots for dream homes, from suburban lots to expansive rural estates.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 hover:border-teal-300 transition-colors duration-300">
              <TrendingUp className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Commercial Development</h3>
              <p className="text-gray-600">Strategic locations for retail, office, and industrial development projects.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
              <Heart className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Agricultural Land</h3>
              <p className="text-gray-600">Fertile farmland and ranch properties for agricultural ventures and lifestyle farming.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 hover:border-teal-300 transition-colors duration-300">
              <Shield className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Investment Properties</h3>
              <p className="text-gray-600">High-potential land investments for long-term appreciation and development opportunities.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
              <Users className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Consultation Services</h3>
              <p className="text-gray-600">Expert guidance on zoning, permits, land use planning, and development feasibility.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 hover:border-teal-300 transition-colors duration-300">
              <Award className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Property Management</h3>
              <p className="text-gray-600">Comprehensive management services for landowners and investment portfolios.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Unified Icon Colors */}
      <div className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose LandPro?</h2>
            <p className="text-xl text-gray-300">The advantages that set us apart</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Local Market Mastery</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Deep knowledge of local markets, zoning regulations, and development trends 
                    gives you a competitive edge in property evaluation and acquisition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Extensive Network</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Strong partnerships with developers, contractors, surveyors, and financing 
                    partners to support your complete land acquisition journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Technology Innovation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced mapping tools, market analytics, and digital platforms provide 
                    access to the most current and comprehensive property information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Personalized Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every client receives dedicated attention with customized solutions 
                    tailored to specific needs, timelines, and budget requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Consistent Gradient */}
      <div className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your
            <span className="block text-emerald-100">Perfect Property?</span>
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
            Let our expertise guide your journey. Connect with us today and discover 
            the endless possibilities that await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-xl">
              Explore Properties
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;