import React from 'react';
import { Phone, Radio, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Radio className="h-8 w-8 text-blue-800 mr-2" />
            <Link to="/" className="text-2xl font-bold text-gray-900">
              EXM Radio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-800 font-medium">Blog</Link>
            <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg font-bold">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:1844-202-6767" className="text-white hover:text-orange-100">
                1-844-202-6767
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium">Home</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-800 font-medium">Blog</Link>
              <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg font-bold w-fit">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:1844-202-6767" className="text-white">
                  1-844-202-6767
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;