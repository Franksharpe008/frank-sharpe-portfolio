import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import CosmicParticleSystem from './CosmicParticleSystem';

const CallToActionSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const collaborationPaths = [
    {
      id: 'web-automation',
      title: 'Web & Automation',
      subtitle: 'For Your Business',
      description: 'Clean, custom digital platforms, automation flows, and AI-enhanced systems — all tailored to mission, not market trend.',
      icon: 'Rocket',
      color: 'cosmic-accent',
      link: '/contact-connect',
      cta: 'Build Your Vision',
      highlight: 'Primary Service'
    },
    {
      id: 'consulting',
      title: 'Business Technology Consultant',
      subtitle: 'Expert Guidance',
      description: 'Solving real problems, fast, with human-first support. Get help with your tech challenges.',
      icon: 'MessageSquare',
      color: 'cosmic-secondary',
      link: '/contact-connect',
      cta: 'Get Support',
      highlight: 'Available Now'
    },
    {
      id: 'connect',
      title: "Let's Connect",
      subtitle: 'Start a Conversation',
      description: 'Connect for speaking engagements, collaborative experiments, or industry thought leadership.',
      icon: 'Users',
      color: 'cosmic-trust',
      link: '/contact-connect',
      cta: "Get in Touch",
      highlight: 'Open to Opportunities'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-cosmic-background via-cosmic-primary to-primary overflow-hidden">
      <CosmicParticleSystem isActive={true} intensity={0.8} />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-background/90 via-transparent to-cosmic-primary/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} />
            <span>Ready to Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Let's Build the Future of
            <span className="block text-cosmic-accent">AI-Driven Design</span>
          </h2>
          <p className="text-xl text-cosmic-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to hire exceptional AI design talent, transform your product with cutting-edge technology, or explore collaborative opportunities, I'm ready to make an impact.
          </p>
        </div>

        {/* Collaboration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {collaborationPaths?.map((path) => (
            <div
              key={path?.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(path?.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105">
                {/* Highlight Badge */}
                <div className={`absolute -top-3 left-6 px-3 py-1 bg-${path?.color} text-white text-xs font-semibold rounded-full`}>
                  {path?.highlight}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-${path?.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${path?.color}/30 transition-all duration-300`}>
                  <Icon 
                    name={path?.icon} 
                    size={32} 
                    className={`text-${path?.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {path?.title}
                  </h3>
                  <p className={`text-${path?.color} font-medium mb-4`}>
                    {path?.subtitle}
                  </p>
                  <p className="text-cosmic-text-secondary leading-relaxed">
                    {path?.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link to={path?.link}>
                  <Button
                    variant="default"
                    className={`w-full bg-${path?.color} hover:bg-${path?.color}/90 text-white font-heading font-semibold transition-all duration-300 ${
                      hoveredCard === path?.id ? 'shadow-cosmic' : ''
                    }`}
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                  >
                    {path?.cta}
                  </Button>
                </Link>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-${path?.color}/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Info */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Multiple Ways to Connect
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-cosmic-text-secondary">
                <Icon name="Mail" size={20} className="text-cosmic-accent" />
                <span>frank@tailorbytez.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-cosmic-text-secondary">
                <Icon name="Linkedin" size={20} className="text-cosmic-trust" />
                <span>LinkedIn Profile</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-cosmic-text-secondary">
                <Icon name="MapPin" size={20} className="text-cosmic-secondary" />
                <span>Austin, TX</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-connect">
                <Button
                  variant="default"
                  className="bg-white text-cosmic-primary hover:bg-white/90 font-heading font-semibold px-8 py-3"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={16}
                >
                  Schedule a Conversation
                </Button>
              </Link>
              <Link to="/about-frank-s-journey">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-heading font-semibold px-8 py-3"
                  iconName="User"
                  iconPosition="left"
                  iconSize={16}
                >
                  Learn My Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-cosmic-accent rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-cosmic-trust rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-cosmic-secondary rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-cosmic-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default CallToActionSection;={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default CallToActionSection;