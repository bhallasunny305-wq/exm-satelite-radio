import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ExitIntentPopup from '../components/ExitIntentPopup';
import { Phone, Car, Home, Shield, Clock, Award, Star, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const testimonials = [
    {
      name: "Mike Johnson",
      location: "Texas",
      rating: 5,
      comment: "Amazing service! The installation team was professional and the sound quality is incredible. Called 1-844-202-6767 and got everything set up within days."
    },
    {
      name: "Sarah Williams", 
      location: "California",
      rating: 5,
      comment: "Crystal clear reception even in remote areas. The customer service team at 1-844-202-6767 walked me through everything. Highly recommend!"
    },
    {
      name: "David Chen",
      location: "New York", 
      rating: 5,
      comment: "Best decision I made for my daily commute. Endless music channels and great sports coverage. The free trial convinced me instantly."
    }
  ];

  const features = [
    {
      icon: Car,
      title: "Car Installation",
      description: "Professional installation in any vehicle with nationwide coverage and crystal clear sound quality."
    },
    {
      icon: Home,
      title: "Home Setup", 
      description: "Bring satellite radio to your home with easy setup and access to all premium channels."
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Expert technical support available around the clock. Call 1-844-202-6767 anytime."
    },
    {
      icon: Clock,
      title: "3 Months FREE",
      description: "Try our premium service risk-free for 3 full months. No commitment, cancel anytime."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ExitIntentPopup />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Satellite Radio
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              For Your Car & Home
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
              Crystal clear sound, nationwide coverage, and endless entertainment. 
              Get professional installation and 24/7 support.
            </p>

            <div className="bg-orange-500 text-white px-8 py-6 rounded-xl inline-block mb-8 shadow-2xl">
              <p className="text-3xl font-bold mb-2">3 MONTHS FREE TRIAL</p>
              <div className="flex items-center justify-center">
                <Phone className="h-8 w-8 mr-3" />
                <a href="tel:1844-202-6767" className="text-3xl font-bold text-white hover:text-orange-100">
                  1-844-202-6767
                </a>
              </div>
              <p className="text-sm mt-2 opacity-90">Call now for instant activation!</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:1844-202-6767"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="h-6 w-6 mr-2" />
                Call Now for Free Trial
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200"
              >
                Get Started Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EXM Radio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional service, premium quality, and unmatched customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Satellite Radio Experience
              </h2>
              <ul className="space-y-4">
                {[
                  "150+ commercial-free music channels",
                  "Exclusive sports coverage and talk shows", 
                  "Howard Stern, music specials, and comedy",
                  "Nationwide coverage - no dead zones",
                  "Professional installation included",
                  "24/7 customer support"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-orange-500 text-white px-6 py-4 rounded-lg inline-block">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-2" />
                  <span className="font-bold">Ready to get started? Call: </span>
                  <a href="tel:1844-202-6767" className="font-bold ml-2 text-white">
                    1-844-202-6767
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:text-center">
              <img 
                src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car radio installation" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Thousands of satisfied customers nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Trusted by Thousands Nationwide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-lg font-semibold">A+ BBB Rating</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-400 mr-3" />
                <span className="text-lg font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-lg font-semibold">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;