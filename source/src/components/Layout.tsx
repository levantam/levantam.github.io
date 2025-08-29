import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationData } from '../data/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { navItems, brand, ctaButton } = navigationData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <nav className="sticky top-0 z-50 border-b shadow-sm backdrop-blur-md bg-white/80 border-neutral-200/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 animate-fade-in">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className="text-xl font-bold transition-all duration-300 text-neutral-900 hover:text-primary-600 hover:scale-105"
              >
                <img src={"/logo.png"} alt="Logo" className="w-[140px]" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={scrollToTop}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-fade-in-delay ${
                      location.pathname === item.path
                        ? 'text-white bg-primary-600 shadow-lg'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={ctaButton.url}
                  target={ctaButton.external ? "_blank" : undefined}
                  rel={ctaButton.external ? "noopener noreferrer" : undefined}
                  className="px-6 py-2 ml-4 text-sm font-medium text-white bg-cyan-700 rounded-full transition-all duration-300 hover:bg-primary-700 hover:scale-105 hover:shadow-lg"
                >
                  {ctaButton.label}
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToTop();
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-white bg-primary-600'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t backdrop-blur-md bg-white/80 border-neutral-200/50">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-sm text-center text-neutral-600">
            <p className="animate-fade-in">&copy; {new Date().getFullYear()} tamle.cv.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;