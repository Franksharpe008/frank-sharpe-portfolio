import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/immersive-homepage', icon: 'Home' },
    { name: 'Philosophy', path: '/ai-design-philosophy', icon: 'Brain' },
    { name: 'Showcase', path: '/live-project-showcase', icon: 'Layers' },
    { name: 'About', path: '/about-frank-s-journey', icon: 'User' },
    { name: 'Vision', path: '/vision-future-impact', icon: 'Telescope' }
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact-connect', icon: 'MessageCircle' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const Logo = () => (
    <Link to="/immersive-homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-cosmic-primary rounded-lg flex items-center justify-center group-hover:shadow-cosmic transition-all duration-300">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
              className="animate-glow-pulse"
            />
            <circle cx="12" cy="12" r="2" fill="var(--color-cosmic-accent)" />
          </svg>
        </div>
        <div className="absolute -inset-1 bg-cosmic-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-lg text-foreground group-hover:text-cosmic-primary transition-colors duration-300">
          Frank Sharpe
        </span>
        <span className="text-xs text-muted-foreground font-mono tracking-wider">
          AI × DESIGN
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'floating-nav shadow-layered'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'bg-cosmic-primary text-white shadow-cosmic'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={16}
                  className={`transition-transform duration-300 ${
                    isActivePath(item?.path) ? 'text-cosmic-accent' : 'group-hover:scale-110'
                  }`}
                />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact-connect">
              <Button
                variant="default"
                className="cosmic-button font-heading font-semibold"
                iconName="Sparkles"
                iconPosition="left"
                iconSize={16}
              >
                Let's Collaborate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'X' : 'Menu'}
              size={24}
              className="transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-layered">
            <nav className="px-4 py-6 space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-cosmic-primary text-white shadow-cosmic'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon
                    name={item?.icon}
                    size={20}
                    className={isActivePath(item?.path) ? 'text-cosmic-accent' : ''}
                  />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border">
                <Link to="/contact-connect" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="default"
                    className="cosmic-button w-full font-heading font-semibold"
                    iconName="Sparkles"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Let's Collaborate
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Cosmic Particle Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-cosmic-accent rounded-full animate-particle-float opacity-60"></div>
        <div className="absolute top-0 right-1/3 w-1 h-1 bg-cosmic-secondary rounded-full animate-particle-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-0.5 h-0.5 bg-cosmic-trust rounded-full animate-particle-float opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>
    </header>
  );
};

export default Header;