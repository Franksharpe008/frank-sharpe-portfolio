import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ManifestoSection = () => {
  const [activeManifesto, setActiveManifesto] = useState(0);

  const manifestoPoints = [
    {
      id: 0,
      title: "Visual Creativity & Functional Clarity",
      subtitle: "Fuse Creativity with Clarity",
      content: `I fuse visual creativity with functional clarity. Design is not just what it looks like and feels like. Design is how it works.`,
      icon: "Eye",
      color: "cosmic-accent"
    },
    {
      id: 1,
      title: "Strategic Design",
      subtitle: "Think, Design, Build with Purpose",
      content: `I think like a strategist, design like an architect, and move like a builder with purpose. Every element is intentional and serves a strategic goal.`,
      icon: "Target",
      color: "cosmic-trust"
    },
    {
      id: 2,
      title: "Time, Brand, and Leverage",
      subtitle: "Maximize Your Impact",
      content: `I understand the value of time, brand voice, and digital leverage — and how to make them all work for you. I build systems that are efficient and effective.`,
      icon: "Clock",
      color: "cosmic-secondary"
    },
    {
      id: 3,
      title: "Legacy Builder",
      subtitle: "Building Dreams that Last",
      content: `As a husband, father, and legacy builder, I don't play with people's dreams — I help them bring them to life. I am committed to building things that are sustainable and have a lasting impact.`,
      icon: "Users",
      color: "cosmic-accent"
    },
    {
      id: 4,
      title: "Scalable Design & Measurable Return",
      subtitle: "Growth-Oriented Design",
      content: `At TailorBytez, we specialize in scalable design + tech that moves fast, speaks clearly, and builds your brand with clarity, authority, and style. We scale intelligently, ensuring every investment delivers real, measurable return.`,
      icon: "TrendingUp",
      color: "cosmic-trust"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-cosmic-accent/20 rounded-full flex items-center justify-center">
              <Icon name="FileText" size={24} className="text-cosmic-accent" />
            </div>
            <span className="text-cosmic-accent font-mono text-sm tracking-wider uppercase">
              Design Manifesto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            My Principles for
            <span className="block text-cosmic-accent">AI-Driven Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Five core beliefs that guide every AI design decision I make, from concept to implementation.
          </p>
        </motion.div>

        {/* Manifesto Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {manifestoPoints?.map((point, index) => (
              <motion.button
                key={point?.id}
                onClick={() => setActiveManifesto(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeManifesto === index
                    ? 'bg-cosmic-primary text-white shadow-cosmic'
                    : 'bg-card hover:bg-muted text-foreground'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeManifesto === index
                      ? 'bg-cosmic-accent/20' :'bg-muted'
                  }`}>
                    <Icon
                      name={point?.icon}
                      size={20}
                      className={activeManifesto === index ? 'text-cosmic-accent' : 'text-muted-foreground'}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {point?.title}
                    </h3>
                    <p className={`text-sm ${
                      activeManifesto === index ? 'text-cosmic-text-secondary' : 'text-muted-foreground'
                    }`}>
                      {point?.subtitle}
                    </p>
                  </div>
                  <Icon
                    name="ChevronRight"
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeManifesto === index ? 'rotate-90 text-cosmic-accent' : 'text-muted-foreground'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content Display */}
          <motion.div
            key={activeManifesto}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 bg-${manifestoPoints?.[activeManifesto]?.color}/20 rounded-xl flex items-center justify-center`}>
                <Icon
                  name={manifestoPoints?.[activeManifesto]?.icon}
                  size={28}
                  className={`text-${manifestoPoints?.[activeManifesto]?.color}`}
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {manifestoPoints?.[activeManifesto]?.title}
                </h3>
                <p className="text-cosmic-accent font-medium">
                  {manifestoPoints?.[activeManifesto]?.subtitle}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {manifestoPoints?.[activeManifesto]?.content?.split('\n\n')?.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex space-x-2">
                {manifestoPoints?.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === activeManifesto ? 'bg-cosmic-accent' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                {activeManifesto + 1} / {manifestoPoints?.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;