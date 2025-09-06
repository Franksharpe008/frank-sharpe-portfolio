import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const DigitalAlchemy = () => {
  const [activeStep, setActiveStep] = useState(0);

  const alchemySteps = [
    {
      id: 0,
      title: "Raw AI Capability",
      description: "Complex algorithms and machine learning models",
      icon: "Cpu",
      color: "red-500",
      details: "Starting with raw computational power—neural networks, natural language processing, computer vision, and predictive analytics. These are the fundamental building blocks that most users find intimidating and inaccessible.",
      example: "GPT-4\'s 175 billion parameters processing natural language"
    },
    {
      id: 1,
      title: "Human Understanding",
      description: "User research, empathy mapping, and behavioral insights",
      icon: "Users",
      color: "orange-500",
      details: "Deep research into human needs, behaviors, and mental models. Understanding how people actually think, work, and make decisions—not how we assume they do. This human intelligence guides the transformation process.",
      example: "Discovering users need confidence indicators, not just AI outputs"
    },
    {
      id: 2,
      title: "Design Translation",
      description: "Converting complexity into intuitive interactions",
      icon: "Palette",
      color: "yellow-500",
      details: "The critical transformation phase where technical capabilities become human-centered experiences. This involves information architecture, interaction design, and visual communication that makes AI feel approachable.",
      example: "Turning recommendation algorithms into personalized suggestion cards"
    },
    {
      id: 3,
      title: "Magical Experience",
      description: "Seamless, delightful AI-enhanced interactions",
      icon: "Sparkles",
      color: "cosmic-accent",
      details: "The final result: AI that feels magical because it\'s invisible. Users accomplish their goals more effectively without thinking about the underlying technology. The complexity is hidden behind elegant simplicity.",
      example: "Smart compose that anticipates your writing style perfectly"
    }
  ];

  return (
    <section className="py-24 bg-cosmic-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-accent/20 via-transparent to-cosmic-secondary/20"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Digital Alchemy Process
          </h2>
          <p className="text-lg text-cosmic-text-secondary max-w-3xl mx-auto">
            How I transform complex AI capabilities into intuitive, magical user experiences through systematic design thinking.
          </p>
        </motion.div>

        {/* Interactive Process Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-6">
            {alchemySteps?.map((step, index) => (
              <motion.div
                key={step?.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-cosmic-accent shadow-cosmic' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-cosmic-accent text-white' :'bg-white/10 text-cosmic-text-secondary'
                    }`}>
                      <Icon name={step?.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-white mb-1">
                        {step?.title}
                      </h3>
                      <p className="text-cosmic-text-secondary text-sm">
                        {step?.description}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      activeStep === index 
                        ? 'border-cosmic-accent bg-cosmic-accent' :'border-white/20'
                    }`}>
                      {activeStep === index && (
                        <Icon name="Check" size={16} className="text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-cosmic-accent rounded-2xl flex items-center justify-center">
                    <Icon name={alchemySteps?.[activeStep]?.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {alchemySteps?.[activeStep]?.title}
                    </h3>
                    <p className="text-cosmic-accent">
                      Step {activeStep + 1} of 4
                    </p>
                  </div>
                </div>

                <p className="text-cosmic-text-secondary mb-6 leading-relaxed">
                  {alchemySteps?.[activeStep]?.details}
                </p>

                <div className="bg-cosmic-accent/10 rounded-xl p-4 border border-cosmic-accent/20">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={20} className="text-cosmic-accent mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Real Example</h4>
                      <p className="text-cosmic-text-secondary text-sm">
                        {alchemySteps?.[activeStep]?.example}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cosmic-text-secondary text-sm">Process Progress</span>
                    <span className="text-cosmic-accent text-sm font-medium">
                      {Math.round(((activeStep + 1) / alchemySteps?.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-cosmic-accent rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${((activeStep + 1) / alchemySteps?.length) * 100}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-cosmic-text-secondary mb-6">
            Ready to see this process in action?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="cosmic-button px-8 py-3 rounded-xl font-medium flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Icon name="Play" size={20} />
              <span>View Case Studies</span>
            </button>
            <button className="text-cosmic-accent hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <span>Download Framework</span>
              <Icon name="Download" size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalAlchemy;