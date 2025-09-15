import React, { useEffect, useState } from 'react';
import { X, Phone, Gift } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative animate-bounce">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <Gift className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wait! Don't Miss This!
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-bold text-orange-500">6 MONTHS FREE TRIAL</span>
          </p>
          <p className="text-gray-600 mb-6">
            For new customers only! Call now to claim this exclusive offer.
          </p>
          
          <div className="bg-orange-500 text-white px-6 py-4 rounded-lg mb-4">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-2" />
              <a href="tel:1844-202-6767" className="text-2xl font-bold text-white">
                1-844-202-6767
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Limited time offer. Call within the next 24 hours!
          </p>

          <button 
            onClick={() => setIsVisible(false)}
            className="mt-4 text-gray-500 underline hover:text-gray-700"
          >
            No thanks, I'll pass on this deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;