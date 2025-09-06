import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisionHero = () => {
  return (
    <section className="relative min-h-screen bg-cosmic-background overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-primary/20 via-cosmic-background to-cosmic-secondary/10"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cosmic-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cosmic-trust rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cosmic-secondary rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cosmic-accent rounded-full animate-bounce opacity-30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-cosmic-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Telescope" size={24} className="text-cosmic-accent" />
                </div>
                <span className="text-cosmic-accent font-mono text-sm tracking-wider uppercase">
                  Vision & Future Impact
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-cosmic-text-primary leading-tight"
              >
                Shaping the Future of
                <span className="block text-cosmic-accent">AI-Driven Design</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-cosmic-text-secondary leading-relaxed max-w-2xl"
              >
                Where human creativity meets artificial intelligence to create experiences that don't just serve users—they inspire them. This is my manifesto for the next decade of design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                className="cosmic-button text-lg px-8 py-4"
                iconName="Rocket"
                iconPosition="left"
                iconSize={20}
              >
                Explore Vision
              </Button>
              <Button
                variant="outline"
                className="text-cosmic-text-primary border-cosmic-accent hover:bg-cosmic-accent/10 text-lg px-8 py-4"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Manifesto
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-cosmic-accent/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cosmic-accent">2030</div>
                <div className="text-sm text-cosmic-text-secondary">Vision Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cosmic-accent">15+</div>
                <div className="text-sm text-cosmic-text-secondary">Future Concepts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cosmic-accent">∞</div>
                <div className="text-sm text-cosmic-text-secondary">Possibilities</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cosmic-accent rounded-full shadow-cosmic animate-pulse"></div>
              
              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cosmic-accent/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cosmic-trust rounded-full"></div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-cosmic-secondary rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cosmic-accent rounded-full"></div>
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-cosmic-trust rounded-full"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cosmic-secondary/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cosmic-accent rounded-full"></div>
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-cosmic-trust rounded-full"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cosmic-secondary rounded-full"></div>
                <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-cosmic-accent rounded-full"></div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-16 left-16 w-12 h-12 bg-cosmic-primary/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="Brain" size={20} className="text-cosmic-accent" />
              </div>
              <div className="absolute top-20 right-20 w-12 h-12 bg-cosmic-primary/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="Sparkles" size={20} className="text-cosmic-trust" />
              </div>
              <div className="absolute bottom-20 left-20 w-12 h-12 bg-cosmic-primary/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="Zap" size={20} className="text-cosmic-secondary" />
              </div>
              <div className="absolute bottom-16 right-16 w-12 h-12 bg-cosmic-primary/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="Target" size={20} className="text-cosmic-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-cosmic-text-secondary text-sm font-mono">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-cosmic-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cosmic-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default VisionHero;