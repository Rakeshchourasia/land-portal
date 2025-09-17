import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PropertyDetails from './pages/PropertyDetails';
import CreateProperty from './pages/CreateProperty';
import SubscriptionPage from './pages/SubscriptionPage';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import SellerDashboard from './pages/Dashboard/SellerDashboard';
import BuyerDashboard from './pages/Dashboard/BuyerDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import PropertiesPage from './pages/PropertiesPage';
import About from './pages/about';
import Contact from './pages/contact';
import Service from './pages/services';
import TermsAndConditions from './components/terms';
import PrivacyPolicy from './components/privacy';
import UserAgreement from './components/userAgreement';
import Disclaimer from './components/disclaimer';

function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-grow container mx-auto px-0 py-0">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/agreement" element={<UserAgreement />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />



          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/subscribe" element={<SubscriptionPage />} />
              <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
              <Route path="/properties" element={<PropertiesPage/>} />
              <Route element={<ProtectedRoute allowedRoles={['seller', 'admin']} />}>
                  <Route path="/create-property" element={<CreateProperty />} />
                  <Route path="/dashboard/seller" element={<SellerDashboard />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                  <Route path="/dashboard/admin" element={<AdminDashboard />} />
              </Route>
          </Route>

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;