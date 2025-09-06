import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import CosmicParticleSystem from './CosmicParticleSystem';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Where AI Amplifies Human Creativity",
    "Transforming Complex AI into Intuitive Experiences",
    "Building the Future of Human-AI Collaboration"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmic-background via-cosmic-primary to-primary">
      <CosmicParticleSystem isActive={true} intensity={1.2} />
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-background/80 via-transparent to-cosmic-primary/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-cosmic-text-primary mb-4 leading-tight">
              <span className="block mb-2">Frank Sharpe</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl text-cosmic-secondary font-normal">
                Digital Visionary | Co-Founder, TailorBytez
              </span>
            </h1>
            
            {/* Dynamic Value Proposition */}
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-cosmic-text-secondary font-medium transition-all duration-500">
                {heroTexts?.[currentText]}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="Brain" size={32} className="text-cosmic-accent mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Integration Expert</h3>
              <p className="text-cosmic-text-secondary text-sm">Bridging AI capabilities with human-centered design</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="Palette" size={32} className="text-cosmic-secondary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Austin Creative Culture</h3>
              <p className="text-cosmic-text-secondary text-sm">Innovation balanced with authentic storytelling</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="Zap" size={32} className="text-cosmic-trust mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Proven Impact</h3>
              <p className="text-cosmic-text-secondary text-sm">500+ projects with measurable business results</p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/live-project-showcase">
              <Button
                variant="default"
                className="bg-cosmic-accent hover:bg-cosmic-accent/90 text-white font-heading font-semibold px-8 py-4 text-lg shadow-cosmic transition-all duration-300 hover:scale-105"
                iconName="Sparkles"
                iconPosition="left"
                iconSize={20}
              >
                Explore My Projects
              </Button>
            </Link>
            
            <Link to="/ai-design-philosophy">
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-heading font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                iconName="FileText"
                iconPosition="left"
                iconSize={20}
              >
                View OpenAI-Ready Portfolio
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-white/60" />
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cosmic-accent rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-cosmic-trust rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cosmic-secondary rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cosmic-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;ction;nimate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;