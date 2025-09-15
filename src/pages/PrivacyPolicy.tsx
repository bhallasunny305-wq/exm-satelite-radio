import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <p className="text-sm text-gray-500 mb-4">Last updated: January 2025</p>
                <p className="text-lg">
                  At EXM Radio, we are committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard your information when 
                  you use our satellite radio services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Payment and billing information</li>
                  <li>Service preferences and usage data</li>
                  <li>Customer support communications</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Device information and radio equipment details</li>
                  <li>Service usage patterns and listening preferences</li>
                  <li>Location data for service optimization</li>
                  <li>Website analytics and cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and maintain our satellite radio services</li>
                  <li>Process payments and manage your account</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Improve our services and develop new features</li>
                  <li>Send service updates and promotional communications</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With service providers who help us deliver our services</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>In connection with a business merger or acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. This includes encryption, secure servers, and regular security audits.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p>
                  Our website uses cookies and similar technologies to enhance your experience, 
                  analyze usage patterns, and provide personalized content. You can control 
                  cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p><strong>Phone:</strong> <a href="tel:1844-202-6767" className="text-blue-600">1-844-202-6767</a></p>
                  <p><strong>Email:</strong> privacy@exmradio.com</p>
                  <p><strong>Address:</strong> EXM Radio Privacy Department</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;