import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmic-background via-cosmic-primary to-primary">
      {/* Cosmic Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cosmic-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cosmic-secondary rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cosmic-trust rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-cosmic-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cosmic-accent shadow-cosmic">
              <Image
                src="/images/ME.jpeg"
                alt="Frank Sharpe - AI Design Technologist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight"
            >
              Frank's Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-cosmic-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              My journey began in 2009, providing hands-on tech support and has evolved into building scalable digital ecosystems, powered by AI, automation, and beautiful front-end experiences.
            </motion.p>
          </div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-accent">8+</div>
              <div className="text-sm text-cosmic-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-secondary">500+</div>
              <div className="text-sm text-cosmic-text-secondary">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-trust">5</div>
              <div className="text-sm text-cosmic-text-secondary">Years as Top Sales Rep</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2 text-cosmic-text-secondary">
              <span className="text-sm font-medium">Discover the Story</span>
              <Icon name="ChevronDown" size={24} className="animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;