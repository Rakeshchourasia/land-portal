import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { Loader2, Users, FileCheck, FileClock, UserCheck, Inbox, Eye, X } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// --- THIS COMPONENT DEFINITION WAS MISSING ---
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value ?? '...'}</p>
    </div>
    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">{icon}</div>
  </div>
);

// --- Modal component for reviewing property details ---
const PropertyReviewModal = ({ property, onClose, onApprove, onReject }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Review Property Listing</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
        </div>
        <div className="p-6 space-y-6">
          {/* Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {property.images.map((img, i) => (
              <a key={i} href={`${API_URL}/${img.replace(/\\/g, '/')}`} target="_blank" rel="noopener noreferrer">
                <img src={`${API_URL}/${img.replace(/\\/g, '/')}`} alt={`Property ${i+1}`} className="w-full h-32 object-cover rounded-md shadow-sm" />
              </a>
            ))}
          </div>
          {/* Details Table */}
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
            <tbody>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold w-1/4">Title</td><td>{property.title}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Price (₹)</td><td>{new Intl.NumberFormat('en-IN').format(property.price)}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Location</td><td>{property.location}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Area (sq.ft)</td><td>{property.area}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Facing</td><td>{property.facing}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Property Type</td><td>{property.propertyType}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Description</td><td className="whitespace-pre-wrap">{property.description}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Owner Name</td><td>{property.ownerName}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Owner Phone</td><td>{property.ownerPhone}</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="py-2 font-semibold">Listed By</td><td>{property.seller.name} ({property.seller.email})</td></tr>
            </tbody>
          </table>
          {/* Documents */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Documents</h4>
            {property.documents && property.documents.length > 0 ? property.documents.map((doc, i) => (
              <a key={i} href={`${API_URL}/${doc.replace(/\\/g, '/')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block">{`Document ${i+1}`}</a>
            )) : <p className="text-gray-500">No documents uploaded.</p>}
          </div>
        </div>
        <div className="p-4 border-t flex justify-end gap-3 sticky bottom-0 bg-white dark:bg-gray-800">
          <button onClick={() => onReject(property._id)} className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition">Reject</button>
          <button onClick={() => onApprove(property._id)} className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition">Approve</button>
        </div>
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---
export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [pendingProperties, setPendingProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [statsRes, pendingPropsRes] = await Promise.all([
        api.get('/admin/dashboard-stats'),
        api.get('/admin/properties/pending'),
      ]);
      setStats(statsRes.data);
      setPendingProperties(pendingPropsRes.data);
    } catch (err) {
      setError('Failed to fetch dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewDetails = async (propertyId) => {
    try {
      const { data } = await api.get(`/admin/properties/${propertyId}`);
      setSelectedProperty(data);
    } catch (err) {
      alert('Could not fetch property details.');
    }
  };

  const handlePropertyAction = async (propertyId, action) => {
    try {
      await api.patch(`/admin/properties/${propertyId}/${action}`);
      alert(`Property has been ${action}ed.`);
      setSelectedProperty(null);
      fetchData();
    } catch (err) {
      alert(`Failed to ${action} property.`);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader2 className="h-10 w-10 animate-spin text-blue-600" /></div>;
  if (error) return <div className="text-center p-4 m-4 bg-red-100 text-red-700 rounded-md">{error}</div>;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-gray-900 min-h-screen">
      <PropertyReviewModal 
        property={selectedProperty} 
        onClose={() => setSelectedProperty(null)}
        onApprove={(id) => handlePropertyAction(id, 'approve')}
        onReject={(id) => handlePropertyAction(id, 'reject')}
      />

      <div className="max-w-7xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        </header>

        {/* Stats Grid where StatCard is used */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Users" value={stats?.totalUsers} icon={<Users />} />
          <StatCard title="Premium Buyers" value={stats?.premiumUsers} icon={<UserCheck />} />
          <StatCard title="Pending Listings" value={stats?.pendingProperties} icon={<FileClock />} />
          <StatCard title="Approved Listings" value={stats?.approvedProperties} icon={<FileCheck />} />
        </div>

        {/* Pending Property Approvals */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm ring-1 ring-black/5">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Property Approvals</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {pendingProperties.length > 0 ? (
              pendingProperties.map(prop => (
                <div key={prop._id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{prop.title}</p>
                    <p className="text-sm text-gray-500">{prop.seller.name} ({prop.seller.email})</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => handleViewDetails(prop._id)} className="flex items-center gap-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold py-2 px-3 rounded-md">
                      <Eye size={14} /> View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Inbox className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium">All Clear!</h3>
                <p className="mt-1 text-sm">No pending properties to review.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}