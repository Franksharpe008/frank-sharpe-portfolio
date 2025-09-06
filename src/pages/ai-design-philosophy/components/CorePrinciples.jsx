import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CorePrinciples = () => {
  const principles = [
    {
      id: 1,
      icon: "Heart",
      title: "Human-First Design",
      description: "AI should enhance human capabilities, not replace human judgment. Every algorithm serves a human need.",
      details: "I prioritize user empathy in AI implementations, ensuring technology feels approachable and trustworthy. Through extensive user research and iterative testing, I create AI experiences that feel intuitive rather than intimidating.",
      color: "cosmic-trust"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Ethical Implementation",
      description: "Responsible AI means transparent processes, bias mitigation, and inclusive design from the ground up.",
      details: "My approach includes comprehensive bias audits, diverse testing groups, and clear communication about AI decision-making processes. I believe users deserve to understand how AI affects their experience.",
      color: "cosmic-secondary"
    },
    {
      id: 3,
      icon: "Lightbulb",
      title: "Creative Amplification",
      description: "AI is a creative partner that unlocks new possibilities while preserving human artistic vision.",
      details: "Rather than automating creativity, I use AI to explore new design territories, generate unexpected solutions, and push creative boundaries while maintaining authentic human expression.",
      color: "cosmic-accent"
    },
    {
      id: 4,
      icon: "Eye",
      title: "Transparent Intelligence",
      description: "Users should understand when and how AI influences their experience, building trust through clarity.",
      details: "I design clear indicators for AI-generated content, provide explanations for AI recommendations, and ensure users maintain control over their AI-enhanced experiences.",
      color: "cosmic-cta"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Core Design Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These foundational beliefs guide every AI integration decision, ensuring technology serves humanity with purpose and integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles?.map((principle, index) => (
            <motion.div
              key={principle?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-subtle hover:shadow-soft transition-all duration-300 border border-border hover:border-cosmic-accent/30">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-${principle?.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      name={principle?.icon} 
                      size={24} 
                      className={`text-${principle?.color}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {principle?.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {principle?.description}
                    </p>
                  </div>
                </div>
                
                <div className="pl-16">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle?.details}
                  </p>
                </div>

                {/* Interactive Element */}
                <div className="mt-6 pl-16">
                  <div className="flex items-center space-x-2 text-cosmic-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="ArrowRight" size={16} />
                    <span className="text-sm font-medium">Learn More</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-cosmic-primary/5 rounded-3xl p-12 border border-cosmic-primary/10">
            <Icon name="Quote" size={32} className="text-cosmic-accent mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-6 leading-relaxed">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <cite className="text-cosmic-accent font-medium">— Steve Jobs</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorePrinciples;