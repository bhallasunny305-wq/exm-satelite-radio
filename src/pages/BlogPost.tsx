import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch this data based on the slug
  const blogPosts = {
    "complete-guide-satellite-radio-installation": {
      title: "Complete Guide to Satellite Radio Installation for Your Car",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Installation",
      content: `
        <p>Installing satellite radio in your vehicle opens up a world of entertainment possibilities. Whether you're commuting to work or planning a cross-country road trip, satellite radio provides crystal-clear audio and nationwide coverage that traditional FM/AM radio simply can't match.</p>

        <h2>Why Choose Professional Installation?</h2>
        <p>While some car enthusiasts prefer DIY installations, professional installation ensures optimal performance, proper mounting, and warranty protection. Our certified technicians have the expertise to:</p>
        <ul>
          <li>Select the ideal antenna placement for maximum signal strength</li>
          <li>Integrate seamlessly with your vehicle's existing audio system</li>
          <li>Ensure clean, professional wiring that won't interfere with other electronics</li>
          <li>Provide comprehensive testing and setup of all features</li>
        </ul>

        <h2>The Installation Process</h2>
        <p>Our professional installation typically takes 2-3 hours and includes:</p>
        <ol>
          <li><strong>Vehicle Assessment:</strong> We evaluate your car's audio system and determine the best integration approach.</li>
          <li><strong>Antenna Installation:</strong> Strategic placement of the satellite antenna for optimal reception.</li>
          <li><strong>Receiver Integration:</strong> Connecting the satellite radio receiver to your existing stereo system.</li>
          <li><strong>Testing & Setup:</strong> Complete system testing and channel programming to ensure everything works perfectly.</li>
        </ol>

        <h2>What's Included in Your Service</h2>
        <p>When you call <strong>1-844-202-6767</strong> to schedule your installation, you get:</p>
        <ul>
          <li>Professional installation by licensed technicians</li>
          <li>High-quality satellite radio equipment</li>
          <li>3-month free trial period</li>
          <li>Comprehensive warranty on equipment and installation</li>
          <li>24/7 customer support for any technical issues</li>
        </ul>

        <h2>Maximizing Your Satellite Radio Experience</h2>
        <p>To get the most out of your new satellite radio system:</p>
        <ul>
          <li>Explore different channel categories to find your favorites</li>
          <li>Take advantage of exclusive content and commercial-free music</li>
          <li>Use preset buttons to quickly access your preferred channels</li>
          <li>Consider adding home receivers to enjoy satellite radio throughout your house</li>
        </ul>

        <h2>Common Installation Locations</h2>
        <p>Our technicians can install satellite radio systems in virtually any vehicle:</p>
        <ul>
          <li>Cars, trucks, and SUVs of all makes and models</li>
          <li>Motorcycles and recreational vehicles</li>
          <li>Commercial vehicles and fleet installations</li>
          <li>Boats and marine applications</li>
        </ul>

        <h2>Ready to Get Started?</h2>
        <p>Don't wait to upgrade your driving experience. Our professional installation team is ready to bring satellite radio to your vehicle. With our 3-month free trial, you can explore all the benefits risk-free.</p>
        
        <p><strong>Call <a href="tel:1844-202-6767">1-844-202-6767</a> today to schedule your professional satellite radio installation!</strong></p>
      `
    },
    "satellite-radio-vs-streaming-services": {
      title: "Satellite Radio vs. Streaming Services: Which is Better for Drivers?",
      date: "January 12, 2025",
      readTime: "4 min read", 
      image: "https://images.pexels.com/photos/1009600/pexels-photo-1009600.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Comparison",
      content: `
        <p>In today's digital age, drivers have more audio entertainment options than ever before. But when it comes to reliable, high-quality audio for your daily commute and road trips, how does satellite radio stack up against popular streaming services?</p>

        <h2>Coverage and Reliability</h2>
        <p><strong>Satellite Radio Wins:</strong> One of the biggest advantages of satellite radio is its nationwide coverage. Whether you're driving through downtown Manhattan or rural Montana, you'll maintain crystal-clear reception without worrying about cellular dead zones.</p>
        <p>Streaming services rely on cellular data networks, which can be spotty in rural areas, tunnels, and remote locations. Nothing ruins a road trip playlist like constant buffering.</p>

        <h2>Data Usage Concerns</h2>
        <p>Streaming services can consume significant amounts of your cellular data plan:</p>
        <ul>
          <li>Standard quality streaming: ~96MB per hour</li>
          <li>High quality streaming: ~150MB per hour</li>
          <li>Premium quality streaming: ~320MB per hour</li>
        </ul>
        <p>For frequent drivers, this can quickly eat through monthly data allowances, leading to overage charges or throttled speeds.</p>

        <h2>Content and Programming</h2>
        <p><strong>Satellite Radio Advantages:</strong></p>
        <ul>
          <li>Curated programming by professional DJs and hosts</li>
          <li>Exclusive content including live sports, comedy, and talk shows</li>
          <li>Commercial-free music channels</li>
          <li>Specialized channels for every genre and interest</li>
        </ul>

        <p><strong>Streaming Service Advantages:</strong></p>
        <ul>
          <li>Personalized playlists and recommendations</li>
          <li>On-demand access to specific songs and albums</li>
          <li>Offline downloads for data-free listening</li>
          <li>Integration with smart home devices</li>
        </ul>

        <h2>Cost Comparison</h2>
        <p>While streaming services typically range from $10-15 per month, satellite radio often provides better value for drivers:</p>
        <ul>
          <li>No data usage costs</li>
          <li>Family plans available for multiple vehicles</li>
          <li>Often includes home and online access</li>
          <li>Promotional rates and free trial periods</li>
        </ul>

        <h2>The Verdict for Drivers</h2>
        <p>For serious drivers who spend significant time on the road, satellite radio offers unmatched reliability and value. The consistent coverage, professional programming, and data-free operation make it the superior choice for automotive use.</p>

        <p>However, streaming services excel for personalized listening experiences and specific song selection, making them great complementary options when you have reliable cellular coverage.</p>

        <h2>Best of Both Worlds</h2>
        <p>Many of our customers find that combining both services provides the ultimate listening experience:</p>
        <ul>
          <li>Use satellite radio for reliable coverage during commutes and long trips</li>
          <li>Switch to streaming services when parked or in areas with excellent cellular coverage</li>
          <li>Download playlists for offline listening as a backup option</li>
        </ul>

        <p><strong>Ready to experience the reliability of satellite radio? Call <a href="tel:1844-202-6767">1-844-202-6767</a> for your 3-month free trial!</strong></p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-blue-800 font-medium hover:underline">
              Return to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-800 font-medium hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: '#374151',
              lineHeight: '1.75'
            }}
          />

          {/* Call to Action */}
          <div className="mt-12 bg-blue-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Satellite Radio?
            </h3>
            <p className="text-lg mb-6">
              Get your 3-month free trial and professional installation today!
            </p>
            <div className="bg-orange-500 text-white px-6 py-4 rounded-lg inline-block">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                <span className="font-bold mr-2">Call Now:</span>
                <a href="tel:1844-202-6767" className="text-xl font-bold text-white">
                  1-844-202-6767
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;