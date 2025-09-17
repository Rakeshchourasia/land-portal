import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../api/api';
import PropertyCard from '../components/PropertyCard';
import { Loader2, Search, MapPin, Building } from 'lucide-react';

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [locationInput, setLocationInput] = useState(searchParams.get('location') || '');
  const [typeInput, setTypeInput] = useState(searchParams.get('propertyType') || 'All Types');

  useEffect(() => {
    const query = searchParams.toString();

    const fetchFilteredProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await api.get(`/properties?${query}`);
        setProperties(data.properties);
      } catch (err) {
        setError('Could not fetch properties at this time. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProperties();
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams();
    if (locationInput.trim()) {
      newParams.set('location', locationInput.trim());
    }
    if (typeInput !== "All Types") {
      newParams.set('propertyType', typeInput);
    }
    setSearchParams(newParams);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-100">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
          <div className="max-w-xl mx-auto text-center text-red-600 font-semibold p-6 bg-red-100 rounded-md shadow-md">
            {error}
          </div>
      </div>
    );
  }

  return (
    // Set a background color for the entire page and ensure it covers the full screen height
    <div className="bg-slate-100 dark:bg-gray-950 min-h-screen">
      
      {/* --- Search Bar Section (Full-width & Sticky) --- */}
      <header className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-20">
        <div className="container mx-auto p-4">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row md:items-end gap-4">
            
            {/* Location Input */}
            <div className="flex-1">
              <label htmlFor="location" className="block mb-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                Location
              </label>
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
                <MapPin className="text-gray-500 mr-2 flex-shrink-0" size={18} />
                <input
                  id="location"
                  type="text"
                  placeholder="Enter city or neighborhood"
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none text-base"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  aria-label="Search by Location"
                />
              </div>
            </div>

            {/* Property Type Select */}
            <div className="w-full md:w-52">
              <label htmlFor="propertyType" className="block mb-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                Property Type
              </label>
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
  <Building className="text-gray-500 mr-2 flex-shrink-0" size={18} />
  <select
    id="propertyType"
    className="w-full bg-transparent text-gray-900 dark:text-gray-100 text-base cursor-pointer focus:outline-none"
    value={typeInput}
    onChange={(e) => setTypeInput(e.target.value)}
    aria-label="Select Property Type"
  >
    {/* Add a dark text color class to each option */}
    <option className="text-black">All Types</option>
    <option className="text-black">Residential</option>
    <option className="text-black">Commercial</option>
    <option className="text-black">Agricultural</option>
  </select>
</div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-lg shadow-lg transition-colors text-base"
                aria-label="Search Properties"
              >
                <Search size={20} className="mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* --- Main Content: Property Listing Section --- */}
      <main className="container mx-auto p-6 py-10">
        {properties.length > 0 ? (
          // Responsive grid for a nice card arrangement
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map(property => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          // Centered message when no properties are found
          <div className="text-center text-gray-600 dark:text-gray-400 py-20 max-w-lg mx-auto">
            <Search className="mx-auto h-14 w-14 text-gray-400 mb-6" />
            <h2 className="text-2xl font-semibold mb-2">No Properties Found</h2>
            <p className="mb-6 text-lg">Your search did not match any listings. Try adjusting your filters.</p>
            <Link to="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default PropertiesPage;