import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { User, Mail, Lock, Briefcase, Loader2, AlertTriangle } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
   // Correct endpoint with /api prefix
await api.post("/auth/register", { name, email, password, role });

      navigate('/'); // Redirect to home after successful registration
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* --- Image Column (Consistent with Login Page) --- */}
        <div className="hidden lg:block relative">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')" }}>
          </div>
          <div className="absolute inset-0 bg-green-900 opacity-60"></div>
          {/* Centered text content */}
          <div className="relative flex flex-col justify-center items-center h-full p-12 text-white text-center">
            <h1 className="text-5xl font-bold leading-tight">LandConnect</h1>
            <p className="text-xl mt-4 max-w-lg">Join a community of landowners, buyers, and sellers shaping the future of real estate.</p>
          </div>
        </div>

        {/* --- Form Column --- */}
        <div className="flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Create Your Account
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Start your journey with us today.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input id="name" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"/>
                </div>
              </div>
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input id="email" type="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"/>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input id="password" type="password" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"/>
                </div>
              </div>
              
              {/* Role Select */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">I am a</label>
                <div className="mt-1 relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white cursor-pointer">
                    <option value="buyer" className="text-black">Buyer</option>
                    <option value="seller" className="text-black">Seller</option>
                  </select>
                </div>
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-3 p-3 text-sm text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              
              {/* Submit Button */}
              <div className="pt-2">
                <button type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400 disabled:cursor-not-allowed">
                  {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-green-600 hover:text-green-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}