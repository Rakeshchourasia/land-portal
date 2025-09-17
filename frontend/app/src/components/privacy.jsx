import React from 'react';
import { Shield, Eye, Lock, UserCheck, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-green-100 text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-4 text-sm text-green-200">
            Last updated: March 15, 2024
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-700 leading-relaxed">
              At LandProperty.com, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our land and 
              property services, including our website, mobile applications, and related services.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Name, email address, and phone number</li>
                  <li>• Mailing address and billing information</li>
                  <li>• Government-issued identification for property transactions</li>
                  <li>• Financial information for mortgage and loan applications</li>
                  <li>• Property ownership history and investment preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Property Information</h3>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Property details including location, size, and features</li>
                  <li>• Property photos, videos, and virtual tours</li>
                  <li>• Land surveys, soil reports, and environmental assessments</li>
                  <li>• Property valuation and market analysis data</li>
                  <li>• Transaction history and pricing information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Usage Information</h3>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Website and app usage patterns and preferences</li>
                  <li>• Search queries and property viewing history</li>
                  <li>• Device information and IP addresses</li>
                  <li>• Location data for property proximity services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <UserCheck className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Property Services</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Facilitate property searches and listings</li>
                  <li>• Process property transactions and transfers</li>
                  <li>• Provide property valuations and market analysis</li>
                  <li>• Connect buyers with sellers and agents</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Communication & Support</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Send property alerts and market updates</li>
                  <li>• Provide customer support and assistance</li>
                  <li>• Process inquiries and service requests</li>
                  <li>• Send important account notifications</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Legal & Compliance</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Verify identity for property transactions</li>
                  <li>• Comply with real estate regulations</li>
                  <li>• Prevent fraud and ensure security</li>
                  <li>• Maintain transaction records</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Service Improvement</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Analyze usage patterns and preferences</li>
                  <li>• Improve our platform and services</li>
                  <li>• Develop new features and tools</li>
                  <li>• Personalize your experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Information Sharing and Disclosure</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">We may share your information with:</h3>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• <strong>Real Estate Professionals:</strong> Licensed agents, brokers, and attorneys involved in your transactions</li>
                  <li>• <strong>Financial Institutions:</strong> Banks, lenders, and mortgage companies for financing purposes</li>
                  <li>• <strong>Government Agencies:</strong> Tax authorities, land registries, and regulatory bodies as required by law</li>
                  <li>• <strong>Service Providers:</strong> Title companies, surveyors, inspectors, and other professional services</li>
                  <li>• <strong>Technology Partners:</strong> Trusted third-party services that help us operate our platform</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> We never sell your personal information to third parties for marketing purposes. 
                  All sharing is done with your consent or as required for legitimate business purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                We implement comprehensive security measures to protect your information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Technical Safeguards</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Encrypted data storage</li>
                    <li>• Regular security audits and testing</li>
                    <li>• Secure access controls</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Operational Safeguards</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Employee background checks</li>
                    <li>• Data access on need-to-know basis</li>
                    <li>• Regular staff training on privacy</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <UserCheck className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Your Privacy Rights</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">You have the right to:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your account and data</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent where applicable</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Data Retention</h3>
                <p className="text-gray-700 mb-3">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Provide our services</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Resolve disputes</li>
                  <li>• Enforce our agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cookies and Tracking Technologies</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                We use cookies and similar technologies to enhance your experience on our platform:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Essential Cookies</h3>
                  <p className="text-gray-700">Required for basic site functionality and security</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Analytics Cookies</h3>
                  <p className="text-gray-700">Help us understand how visitors interact with our website</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Marketing Cookies</h3>
                  <p className="text-gray-700">Used to deliver relevant advertisements and track campaign effectiveness</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                You can manage your cookie preferences through your browser settings or our cookie preference center.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-green-50 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
            
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-700">privacy@landproperty.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-700">1-800-LAND-HELP</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Mailing Address</p>
                    <p className="text-gray-700">
                      LandProperty.com Privacy Office<br />
                      123 Property Plaza<br />
                      Real Estate City, RC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Policy Updates</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            
            <ul className="text-gray-700 space-y-2 ml-4 mb-4">
              <li>• Posting the updated policy on our website</li>
              <li>• Sending email notifications to registered users</li>
              <li>• Displaying prominent notices on our platform</li>
            </ul>
            
            <p className="text-gray-700">
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </section>

      </div>
      
      
      
    </div>
  );
};

export default PrivacyPolicy;