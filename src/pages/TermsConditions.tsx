import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <p className="text-sm text-gray-500 mb-4">Last updated: January 2025</p>
                <p className="text-lg">
                  These Terms and Conditions ("Terms") govern your use of EXM Radio's 
                  satellite radio services. By using our services, you agree to these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement</h2>
                <p className="mb-4">
                  EXM Radio provides satellite radio services for automotive and home use. 
                  Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Satellite radio programming and content</li>
                  <li>Professional installation services</li>
                  <li>Technical support and customer service</li>
                  <li>Equipment sales and maintenance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Trial Terms</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">3-Month Free Trial</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Available to new customers only</li>
                    <li>Requires valid payment method for verification</li>
                    <li>Automatic billing begins after trial period unless cancelled</li>
                    <li>Must call 1-844-202-6767 to activate</li>
                    <li>Trial can be cancelled anytime during the free period</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Monthly or annual subscription billing options available</li>
                  <li>Payment due in advance of service period</li>
                  <li>Automatic renewal unless cancelled by customer</li>
                  <li>Late payment may result in service suspension</li>
                  <li>Refunds processed according to our refund policy</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation and Equipment</h2>
                <p className="mb-4">Professional installation services include:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Licensed and insured technician installation</li>
                  <li>Equipment provided as part of service</li>
                  <li>Warranty coverage on equipment and installation</li>
                  <li>Scheduled appointment within your preferred timeframe</li>
                </ul>
                <p>
                  <strong>Important:</strong> Equipment remains property of EXM Radio and 
                  must be returned upon service cancellation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                <p>
                  Our satellite radio service provides nationwide coverage, however service 
                  may be affected by:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Weather conditions and atmospheric interference</li>
                  <li>Geographic location and terrain</li>
                  <li>Building structures and underground parking</li>
                  <li>Technical maintenance and updates</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate contact and payment information</li>
                  <li>Allow access for professional installation</li>
                  <li>Report technical issues promptly</li>
                  <li>Use services in compliance with applicable laws</li>
                  <li>Protect equipment from damage or theft</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="mb-2"><strong>How to Cancel:</strong></p>
                  <p className="mb-2">Call: <a href="tel:1844-202-6767" className="text-blue-600 font-semibold">1-844-202-6767</a></p>
                  <p className="mb-2">Email: support@exmradio.com</p>
                  <p className="text-sm text-gray-600">
                    Cancellation takes effect at the end of your current billing period. 
                    Equipment must be returned within 30 days.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>
                  EXM Radio's liability is limited to the amount paid by you for services 
                  in the preceding 12 months. We are not liable for indirect, incidental, 
                  or consequential damages arising from service interruptions or equipment issues.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="mb-4">
                  For questions about these Terms or our services, contact us:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p><strong>Phone:</strong> <a href="tel:1844-202-6767" className="text-blue-600">1-844-202-6767</a></p>
                  <p><strong>Email:</strong> support@exmradio.com</p>
                  <p><strong>Hours:</strong> 24/7 Customer Support</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be 
                  posted on our website and take effect immediately. Continued use of our 
                  services constitutes acceptance of modified Terms.
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

export default TermsConditions;