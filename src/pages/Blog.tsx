import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      slug: "complete-guide-satellite-radio-installation",
      title: "Complete Guide to Satellite Radio Installation for Your Car",
      excerpt: "Everything you need to know about professional satellite radio installation, from choosing the right equipment to finding the perfect mounting location.",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Installation"
    },
    {
      slug: "satellite-radio-vs-streaming-services",
      title: "Satellite Radio vs. Streaming Services: Which is Better for Drivers?",
      excerpt: "Compare the pros and cons of satellite radio versus music streaming services for your daily commute and long road trips.",
      date: "January 12, 2025", 
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1009600/pexels-photo-1009600.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Comparison"
    },
    {
      slug: "troubleshooting-satellite-radio-reception",
      title: "Troubleshooting Common Satellite Radio Reception Issues",
      excerpt: "Quick fixes for poor signal quality, audio dropouts, and other common satellite radio problems that drivers face.",
      date: "January 10, 2025",
      readTime: "6 min read", 
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technical Support"
    },
    {
      slug: "best-satellite-radio-channels-2025",
      title: "Top 10 Satellite Radio Channels You Must Try in 2025",
      excerpt: "Discover the most popular and entertaining satellite radio channels covering music, sports, news, and comedy for every taste.",
      date: "January 8, 2025",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Entertainment"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EXM Radio Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, installation guides, and tips to get the most out of your satellite radio experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-800">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-blue-800 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started with Satellite Radio?
            </h3>
            <p className="text-lg mb-6">
              Get your 3-month free trial and professional installation today!
            </p>
            <div className="bg-orange-500 text-white px-6 py-4 rounded-lg inline-block">
              <div className="flex items-center">
                <span className="font-bold mr-2">Call Now:</span>
                <a href="tel:1844-202-6767" className="text-xl font-bold text-white">
                  1-844-202-6767
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;