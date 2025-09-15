import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, User, Mail, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    navigate('/thank-you');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Support & Sales Assistance
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill out the form below and we'll help you get started with your satellite radio service.
          </p>
          <div className="bg-orange-500 text-white px-6 py-4 rounded-lg inline-block mb-8">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Call Now: </span>
              <a href="tel:1844-202-6767" className="text-xl font-bold ml-2 text-white">
                1-844-202-6767
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Mail className="h-4 w-4 mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="issue" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="h-4 w-4 mr-2" />
                How can we help you? *
              </label>
              <textarea
                id="issue"
                name="issue"
                required
                rows={4}
                value={formData.issue}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your needs: installation, technical support, equipment purchase, etc."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-lg"
            >
              Submit Request & Get Instant Support
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms-conditions" className="text-blue-600 hover:underline">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;