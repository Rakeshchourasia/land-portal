import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Star, Clock, Rocket, ArrowRight } from 'lucide-react';

export default function BuyerDashboard() {
  const { user } = useAuth();
  const { subscription } = user || {};

  // The core logic remains the same, but we add icons and new styles
  const getStatusInfo = () => {
    switch (subscription?.status) {
      case 'active':
        return {
          title: "Premium Member",
          description: "You have full access to all premium property details and features.",
          borderColor: 'border-green-500',
          Icon: <Star className="h-8 w-8 text-green-500" />,
          iconBg: 'bg-green-100 dark:bg-green-900/50',
          action: (
            <Link to="/properties">
              <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-5 rounded-lg transition-colors">
                Browse Properties <ArrowRight size={16} />
              </button>
            </Link>
          )
        };
      case 'pending':
        return {
          title: "Subscription Pending",
          description: "Your subscription request is awaiting admin approval. This usually takes a few hours.",
          borderColor: 'border-yellow-500',
          Icon: <Clock className="h-8 w-8 text-yellow-500" />,
          iconBg: 'bg-yellow-100 dark:bg-yellow-900/50',
          action: null
        };
      default:
        return {
          title: "Upgrade to Premium",
          description: "Get full access to property details, owner contacts, and important documents.",
          borderColor: 'border-gray-300 dark:border-gray-600',
          Icon: <Rocket className="h-8 w-8 text-green-500" />,
          iconBg: 'bg-green-100 dark:bg-green-900/50',
          action: (
            <Link to="/subscribe">
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors shadow-md">
                Upgrade Now <ArrowRight size={16} />
              </button>
            </Link>
          )
        };
    }
  };

  const { title, description, borderColor, Icon, iconBg, action } = getStatusInfo();

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* --- Personalized Header --- */}
        <header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome, {user?.name}!
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Here's an overview of your account and subscription status.
          </p>
        </header>

        {/* --- Redesigned Subscription Status Card --- */}
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden border-t-4 ${borderColor}`}>
          <div className="p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Icon */}
            <div className={`flex-shrink-0 p-4 rounded-full ${iconBg}`}>
              {Icon}
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
              {subscription?.endDate && subscription?.status === 'active' && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Your plan is valid until {new Date(subscription.endDate).toLocaleDateString()}.
                </p>
              )}
            </div>

            {/* Action Button */}
            {action && (
              <div className="mt-4 sm:mt-0 flex-shrink-0">
                {action}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}