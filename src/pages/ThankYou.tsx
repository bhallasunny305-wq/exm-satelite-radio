import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Clock, CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Request!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              We've received your information and our team is ready to help you get started 
              with your satellite radio service.
            </p>

            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                IMPORTANT - Final Step Required
              </h2>
              
              <div className="bg-red-500 text-white px-6 py-4 rounded-lg mb-6">
                <div className="flex items-center justify-center flex-wrap">
                  <Clock className="h-8 w-8 mr-3" />
                  <span className="text-2xl font-bold mr-4">Time Remaining:</span>
                  <span className="text-4xl font-bold text-yellow-300">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>

              <p className="text-lg text-red-800 font-semibold mb-4">
                To complete your free trial activation and verify your information, 
                you must call within the next 2 minutes:
              </p>

              <div className="bg-orange-500 text-white px-8 py-6 rounded-xl inline-block mb-4 transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center">
                  <Phone className="h-10 w-10 mr-4" />
                  <div className="text-left">
                    <p className="text-sm opacity-90">Call Now:</p>
                    <a href="tel:1844-202-6767" className="text-4xl font-bold text-white block">
                      1-844-202-6767
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-red-700 font-medium">
                Our verification specialist is standing by to activate your 3-month free trial!
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                What happens when you call:
              </h3>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Instant verification (30 seconds)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Activate your 3-month free trial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Schedule professional installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Get exclusive customer pricing</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="tel:1844-202-6767"
                className="bg-orange-500 text-white px-12 py-6 rounded-lg font-bold text-2xl hover:bg-orange-600 transition-colors duration-200 inline-flex items-center shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                <Phone className="h-8 w-8 mr-3" />
                Call Now: 1-844-202-6767
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Don't wait! This exclusive offer expires if you don't call within the time limit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;