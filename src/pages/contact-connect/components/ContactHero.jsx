import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-cosmic-primary text-white py-20 lg:py-32 overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-primary via-primary to-secondary opacity-90"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cosmic-secondary rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cosmic-trust rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for New Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Let's Create Something
            <span className="block text-cosmic-accent">Extraordinary Together</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your AI vision into reality? Multiple pathways to connect, 
            collaborate, and create the future of digital experiences.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-accent">&lt; 24h</div>
              <div className="text-sm text-white/70">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-accent">99%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-accent">Austin, TX</div>
              <div className="text-sm text-white/70">Based & Available</div>
            </div>
          </div>

          {/* Preferred Contact Methods */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Icon name="Mail" size={16} className="text-cosmic-accent" />
              <span className="text-sm">Email Preferred</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Icon name="Calendar" size={16} className="text-cosmic-accent" />
              <span className="text-sm">Calendar Booking</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Icon name="Linkedin" size={16} className="text-cosmic-accent" />
              <span className="text-sm">LinkedIn Connect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;