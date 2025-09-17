import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { Loader2, PlusCircle, Home, List, CheckCircle2, Clock, IndianRupee } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

// A reusable StatCard component for this dashboard
const StatCard = ({ title, value, icon, color = 'blue' }) => {
  const colorClasses = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/50', text: 'text-blue-600 dark:text-blue-400' },
    green: { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-600 dark:text-green-400' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/50', text: 'text-yellow-600 dark:text-yellow-400' },
  };
  const selectedColor = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm ring-1 ring-black/5 flex items-center gap-5">
      <div className={`flex-shrink-0 p-3 rounded-full ${selectedColor.bg}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};


export default function SellerDashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchSellerProperties = async () => {
        try {
            const { data } = await api.get('/properties/my-listings');
            setProperties(data);
        } catch (error) {
            console.error("Failed to fetch seller properties", error);
        } finally {
            setLoading(false);
        }
    }
    if (user) {
        fetchSellerProperties();
    } else {
      setLoading(false);
    }
  }, [user]);

  const StatusBadge = ({ status }) => {
    const styles = {
        pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
        approved: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        rejected: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
    };
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[status]}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50 dark:bg-gray-900">
        <Loader2 className="h-10 w-10 animate-spin text-green-600" />
      </div>
    );
  }
  
  // Calculate stats from the properties array
  const totalListings = properties.length;
  const approvedListings = properties.filter(p => p.status === 'approved').length;
  const pendingListings = properties.filter(p => p.status === 'pending').length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome, {user?.name}!
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Manage your property listings and view their status.
          </p>
        </header>

        {/* --- Stat Cards --- */}
        <div className="grid gap-6 md:grid-cols-3">
            <StatCard title="Total Listings" value={totalListings} icon={<List className="h-6 w-6 text-blue-600" />} color="blue" />
            <StatCard title="Approved Listings" value={approvedListings} icon={<CheckCircle2 className="h-6 w-6 text-green-600" />} color="green" />
            <StatCard title="Pending Review" value={pendingListings} icon={<Clock className="h-6 w-6 text-yellow-600" />} color="yellow" />
        </div>

        {/* --- Property Listings Section --- */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm ring-1 ring-black/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-200 dark:border-gray-700 gap-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Property Listings</h2>
            <Link to="/create-property">
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-md w-full sm:w-auto">
                <PlusCircle size={20} />
                List New Property
              </button>
            </Link>
          </div>

          {properties.length > 0 ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {properties.map(prop => (
                <div key={prop._id} className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors">
                   {/* Image Thumbnail */}
                  <div className="flex-shrink-0 w-24 h-16 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                    {prop.images && prop.images.length > 0 ? (
                      <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                         <Home className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  {/* Property Details */}
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-900 dark:text-white">{prop.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <IndianRupee size={14} />
                      {new Intl.NumberFormat('en-IN').format(prop.price)}
                    </p>
                  </div>
                   {/* Status Badge */}
                  <div className="flex-shrink-0">
                    <StatusBadge status={prop.status} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
             // --- Enhanced Empty State ---
            <div className="text-center py-16 px-6">
              <Home className="mx-auto h-16 w-16 text-gray-400" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">You haven't listed any properties yet.</h3>
              <p className="mt-2 text-sm text-gray-500">Get started by listing your first property to reach thousands of potential buyers.</p>
              <div className="mt-6">
                <Link to="/create-property">
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors shadow-md mx-auto">
                        <PlusCircle size={20} />
                        List Your First Property
                    </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}