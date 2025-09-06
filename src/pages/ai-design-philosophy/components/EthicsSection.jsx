import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const EthicsSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const ethicalCases = [
    {
      id: 0,
      title: "Bias Mitigation in Hiring AI",
      challenge: "AI recruitment tool showing gender bias in candidate screening",
      solution: "Implemented diverse training datasets, bias detection algorithms, and human oversight protocols",
      impact: "Reduced gender bias by 87% while maintaining screening efficiency",
      principles: ["Inclusive Design", "Transparent Algorithms", "Human Oversight"],
      icon: "Users",
      color: "cosmic-trust"
    },
    {
      id: 1,
      title: "Accessible AI Voice Interface",
      challenge: "Voice AI excluding users with speech disabilities and non-native speakers",
      solution: "Multi-modal input options, accent adaptation, and alternative communication methods",
      impact: "Increased accessibility compliance from 60% to 98% WCAG AAA standards",
      principles: ["Universal Access", "Adaptive Technology", "User Empowerment"],
      icon: "Mic",
      color: "cosmic-secondary"
    },
    {
      id: 2,
      title: "Privacy-First Recommendation Engine",
      challenge: "Personalization requiring extensive user data collection and tracking",
      solution: "On-device processing, differential privacy, and explicit consent mechanisms",
      impact: "Maintained 92% recommendation accuracy while reducing data collection by 75%",
      principles: ["Data Minimization", "User Control", "Transparent Processing"],
      icon: "Shield",
      color: "cosmic-accent"
    }
  ];

  const ethicalPrinciples = [
    {
      title: "Transparency",
      description: "Users should understand when and how AI affects their experience",
      icon: "Eye",
      examples: ["Clear AI indicators", "Explainable decisions", "Open algorithms"]
    },
    {
      title: "Fairness",
      description: "AI systems must work equitably for all users regardless of background",
      icon: "Scale",
      examples: ["Bias testing", "Diverse datasets", "Equal outcomes"]
    },
    {
      title: "Privacy",
      description: "User data protection and consent must be built into AI from the ground up",
      icon: "Lock",
      examples: ["Data minimization", "User control", "Secure processing"]
    },
    {
      title: "Accountability",
      description: "Clear responsibility chains for AI decisions and their consequences",
      icon: "UserCheck",
      examples: ["Human oversight", "Audit trails", "Error correction"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ethical AI Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real examples of how I've addressed ethical challenges in AI design, demonstrating responsible innovation that prioritizes human welfare and social good.
          </p>
        </motion.div>

        {/* Ethical Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ethicalPrinciples?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-subtle border border-border hover:shadow-soft transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-cosmic-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={principle?.icon} size={24} className="text-cosmic-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {principle?.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {principle?.description}
              </p>
              <div className="space-y-1">
                {principle?.examples?.map((example, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cosmic-accent rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-card rounded-3xl p-8 shadow-subtle border border-border">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Ethical Implementation Case Studies
          </h3>

          {/* Case Study Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {ethicalCases?.map((case_, index) => (
              <button
                key={case_?.id}
                onClick={() => setActiveCase(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeCase === index
                    ? `bg-${case_?.color} text-white shadow-cosmic`
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name={case_?.icon} size={16} />
                <span className="hidden sm:inline">{case_?.title}</span>
                <span className="sm:hidden">Case {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-${ethicalCases?.[activeCase]?.color}/10 rounded-xl flex items-center justify-center`}>
                  <Icon 
                    name={ethicalCases?.[activeCase]?.icon} 
                    size={24} 
                    className={`text-${ethicalCases?.[activeCase]?.color}`} 
                  />
                </div>
                <h4 className="text-xl font-heading font-bold text-foreground">
                  {ethicalCases?.[activeCase]?.title}
                </h4>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={16} className="text-warning" />
                    <span>Challenge</span>
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    {ethicalCases?.[activeCase]?.challenge}
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                    <Icon name="Lightbulb" size={16} className="text-cosmic-accent" />
                    <span>Solution</span>
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    {ethicalCases?.[activeCase]?.solution}
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span>Impact</span>
                  </h5>
                  <p className="text-muted-foreground leading-relaxed">
                    {ethicalCases?.[activeCase]?.impact}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-foreground mb-4">Applied Principles</h5>
              <div className="space-y-3 mb-6">
                {ethicalCases?.[activeCase]?.principles?.map((principle, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-xl">
                    <Icon name="CheckCircle" size={16} className={`text-${ethicalCases?.[activeCase]?.color}`} />
                    <span className="text-foreground font-medium">{principle}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Visualization */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h6 className="font-medium text-foreground mb-4">Key Metrics</h6>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Ethical Compliance</span>
                      <span className="text-sm font-medium text-foreground">98%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className={`bg-${ethicalCases?.[activeCase]?.color} rounded-full h-2 w-[98%]`}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">User Satisfaction</span>
                      <span className="text-sm font-medium text-foreground">94%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className={`bg-${ethicalCases?.[activeCase]?.color} rounded-full h-2 w-[94%]`}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Performance Maintained</span>
                      <span className="text-sm font-medium text-foreground">92%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className={`bg-${ethicalCases?.[activeCase]?.color} rounded-full h-2 w-[92%]`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ethics Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-cosmic-primary/5 rounded-3xl p-12 border border-cosmic-primary/10">
            <Icon name="Heart" size={48} className="text-cosmic-primary mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              My Ethical AI Commitment
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe that with great technological power comes great responsibility. Every AI system I design prioritizes human welfare, respects user autonomy, and contributes to a more equitable digital future. This isn't just good practice—it's the foundation of sustainable innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EthicsSection;