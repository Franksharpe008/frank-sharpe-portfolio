import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalSection = () => {
  const personalInterests = [
    {
      title: "Family Time",
      icon: "Heart",
      description: "Spending quality time with my wife and children.",
      image: "/images/20170218_153212.jpg"
    },
    {
      title: "Legacy Building",
      icon: "TrendingUp",
      description: "Building a better future for my family and community.",
      image: "/images/20200112_190004_186.jpg"
    },
    {
      title: "Helping Others",
      icon: "Users",
      description: "I don't play with people's dreams — I help them bring them to life.",
      image: "/images/IMG_1539.jpeg"
    },
    {
      title: "Continuous Learning",
      icon: "BookOpen",
      description: "Staying curious and adaptable to new technologies.",
      image: "/images/IMG_2857.jpeg"
    }
  ];

  const philosophyPoints = [
    {
      icon: "Lightbulb",
      title: "Curiosity-Driven",
      description: "Every project starts with 'What if?' and 'How might we?'"
    },
    {
      icon: "Heart",
      title: "Human-First",
      description: "Technology should enhance human capabilities, not replace them"
    },
    {
      icon: "Zap",
      title: "Iterative Innovation",
      description: "Small experiments lead to breakthrough discoveries"
    },
    {
      icon: "Shield",
      title: "Ethical Foundation",
      description: "Every design decision considers long-term societal impact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Beyond the Pixels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The personal interests and philosophy that fuel my creative process and shape my approach to AI-enhanced design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Interests */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center space-x-3"
            >
              <Icon name="User" size={32} className="text-cosmic-secondary" />
              <span>Personal Interests</span>
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {personalInterests?.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-layered transition-all duration-300 border border-border h-full">
                    <div className="rounded-xl overflow-hidden mb-4">
                      <Image
                        src={interest?.image}
                        alt={interest?.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name={interest?.icon} size={20} className="text-cosmic-accent" />
                      <h4 className="text-lg font-heading font-bold text-foreground">
                        {interest?.title}
                      </h4>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {interest?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 bg-muted rounded-2xl p-6"
            >
              <h4 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="Smile" size={24} className="text-cosmic-trust" />
                <span>Fun Facts</span>
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Icon name="Coffee" size={16} className="text-cosmic-secondary mt-0.5" />
                  <span>Drinks exactly 3 cups of locally roasted coffee per day</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Music" size={16} className="text-cosmic-accent mt-0.5" />
                  <span>Has attended South by Southwest 8 consecutive years</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Code" size={16} className="text-cosmic-trust mt-0.5" />
                  <span>Wrote first line of code at age 12, first AI experiment at 28</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-cosmic-primary mt-0.5" />
                  <span>Lived in 4 Austin neighborhoods, currently in East Austin</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Design Philosophy */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center space-x-3"
            >
              <Icon name="Compass" size={32} className="text-cosmic-accent" />
              <span>Design Philosophy</span>
            </motion.h3>

            <div className="space-y-6 mb-8">
              {philosophyPoints?.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-soft border border-border"
                >
                  <div className="w-12 h-12 bg-cosmic-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={point?.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                      {point?.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {point?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cosmic-primary to-cosmic-secondary rounded-2xl p-8 text-center"
            >
              <Icon name="Quote" size={32} className="text-white mx-auto mb-4" />
              <blockquote className="text-xl font-heading text-white italic mb-4">
                "The best AI-enhanced designs feel like magic to users but are built on a foundation of deep human understanding and ethical consideration."
              </blockquote>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-px bg-white/50"></div>
                <span className="text-sm text-cosmic-text-secondary font-medium">Frank Sharpe</span>
                <div className="w-8 h-px bg-white/50"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-background rounded-3xl p-12 shadow-layered border border-border text-center"
        >
          <Icon name="FileText" size={48} className="text-cosmic-accent mx-auto mb-6" />
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
            Complete Professional Summary
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my comprehensive resume with detailed project descriptions, technical skills, and professional references
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="default"
              className="cosmic-button"
              iconName="Download"
              iconPosition="left"
            >
              Download Resume (PDF)
            </Button>
            <a href="https://www.linkedin.com/in/therelentlessconnoisseur" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
            >
              View LinkedIn Profile
            </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>frank@tailorbytez.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>(512) 555-0123</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} />
              <span>Austin, Texas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalSection;