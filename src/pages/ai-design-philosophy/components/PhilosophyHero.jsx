import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmic-background via-cosmic-primary to-primary">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-accent rounded-full opacity-60"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              y: [null, -100, null],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-cosmic-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Icon name="Brain" size={20} className="text-cosmic-accent" />
            <span className="text-cosmic-accent font-medium">AI Design Philosophy</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight"
        >
          AI Amplifies Human
          <span className="block text-cosmic-accent glow-effect">Creativity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-cosmic-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          It doesn't replace it. Through ethical AI integration and human-centered design, 
          I transform complex algorithms into intuitive experiences that feel magical yet purposeful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <div className="flex items-center space-x-2 text-cosmic-text-secondary">
            <Icon name="Users" size={20} className="text-cosmic-trust" />
            <span>Human-Centered</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-cosmic-text-secondary/30"></div>
          <div className="flex items-center space-x-2 text-cosmic-text-secondary">
            <Icon name="Shield" size={20} className="text-cosmic-trust" />
            <span>Ethically Driven</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-cosmic-text-secondary/30"></div>
          <div className="flex items-center space-x-2 text-cosmic-text-secondary">
            <Icon name="Sparkles" size={20} className="text-cosmic-trust" />
            <span>Innovation Focused</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-cosmic-text-secondary"
          >
            <span className="text-sm">Explore Philosophy</span>
            <Icon name="ChevronDown" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyHero;