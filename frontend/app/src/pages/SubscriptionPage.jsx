import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import useAuth from '../hooks/useAuth';
import { LockKeyhole, CheckCircle2, BadgePercent, FileText } from 'lucide-react';

const SubscriptionPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user, refreshUserProfile } = useAuth();
  const navigate = useNavigate();

  const handlePayment = async () => {
    setLoading(true);
    setError('');
    
    try {
      // 1. Create a Razorpay order from your backend
      const { data: order } = await api.post('/payment/create-order');

      // 2. Configure Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        name: 'LandConnect Premium',
        description: 'Yearly Subscription Plan',
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3. Verify the payment on your backend
            await api.post('/payment/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            setSuccess("Payment successful! Your request is now pending admin approval.");
            await refreshUserProfile(); // Update the user's status in the app
            setTimeout(() => navigate('/dashboard/buyer'), 3000);
          } catch (verificationError) {
            setError("Payment verification failed. Please contact support.");
          }
        },
        prefill: { name: user.name, email: user.email },
        theme: { color: '#009ee3' },
      };

      // 4. Open the Razorpay checkout modal
      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false); // The modal is open, so we are no longer "loading"

    } catch (err) {
      setError(err.response?.data?.message || 'Could not initiate payment.');
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto my-12 bg-white rounded-2xl shadow-2xl border">
      <div className="p-8 text-center bg-gray-50 border-b">
        <LockKeyhole className="mx-auto h-16 w-16 text-blue-500 mb-4" />
        <h2 className="text-4xl font-bold text-gray-800">Unlock Full Access</h2>
        <p className="mt-2 text-gray-600">Upgrade to view complete property details and connect with sellers.</p>
      </div>
      <div className="p-8">
        <div className="mb-8 text-center">
          <span className="text-5xl font-extrabold text-gray-900">₹4999</span>
          <span className="text-xl font-medium text-gray-500">/year</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center"><CheckCircle2 className="w-6 h-6 text-green-500 mr-3" /><span>View Seller Contact Information</span></li>
          <li className="flex items-center"><FileText className="w-6 h-6 text-green-500 mr-3" /><span>Download Ownership Documents</span></li>
          <li className="flex items-center"><BadgePercent className="w-6 h-6 text-green-500 mr-3" /><span>Get Exclusive Deals & Early Access</span></li>
        </ul>
        <button onClick={handlePayment} disabled={loading} className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-wait">
          {loading ? 'Processing...' : 'Upgrade to Premium'}
        </button>
        {error && <p className="mt-4 text-sm text-center text-red-600">{error}</p>}
        {success && <p className="mt-4 text-sm text-center text-green-600">{success}</p>}
      </div>
    </div>
  );
};

export default SubscriptionPage;