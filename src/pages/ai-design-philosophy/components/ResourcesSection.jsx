import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourcesSection = () => {
  const frameworks = [
    {
      title: "AI Design Framework",
      description: "Comprehensive methodology for integrating AI into user experiences ethically and effectively",
      type: "PDF Guide",
      size: "2.4 MB",
      downloads: "3,200+",
      icon: "FileText",
      color: "cosmic-accent",
      features: [
        "Step-by-step implementation guide",
        "Ethical consideration checklists",
        "User testing methodologies",
        "Bias detection frameworks"
      ]
    },
    {
      title: "Accessibility AI Toolkit",
      description: "Tools and guidelines for creating AI experiences that work for everyone",
      type: "Design System",
      size: "1.8 MB",
      downloads: "2,100+",
      icon: "Eye",
      color: "cosmic-trust",
      features: [
        "WCAG compliance templates",
        "Screen reader optimization",
        "Voice interface guidelines",
        "Cognitive accessibility patterns"
      ]
    },
    {
      title: "Ethical AI Checklist",
      description: "Pre-launch evaluation framework for responsible AI implementation",
      type: "Interactive Tool",
      size: "Web App",
      downloads: "5,400+",
      icon: "CheckSquare",
      color: "cosmic-secondary",
      features: [
        "Bias assessment criteria",
        "Privacy impact evaluation",
        "Transparency requirements",
        "User consent frameworks"
      ]
    }
  ];

  const contributions = [
    {
      title: "OpenAI Design Patterns",
      description: "Contributing to open-source AI design pattern library",
      status: "Active Contributor",
      icon: "Github",
      link: "github.com/openai/design-patterns"
    },
    {
      title: "AI Ethics Research",
      description: "Co-authored paper on bias mitigation in recommendation systems",
      status: "Published 2024",
      icon: "BookOpen",
      link: "arxiv.org/ai-ethics-bias"
    },
    {
      title: "Design System Components",
      description: "AI-enhanced components for React design systems",
      status: "1.2k Stars",
      icon: "Code",
      link: "github.com/frank-sharpe/ai-components"
    },
    {
      title: "Accessibility Standards",
      description: "W3C working group member for AI accessibility guidelines",
      status: "Committee Member",
      icon: "Users",
      link: "w3.org/wai/ai-accessibility"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Design Director at Microsoft",
      content: "Frank\'s AI Design Framework transformed how our team approaches AI integration. The ethical considerations alone saved us months of potential issues.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead UX at Spotify",
      content: "The accessibility toolkit is a game-changer. We've improved our AI feature compliance by 40% using Frank's methodologies.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Dr. Aisha Patel",
      role: "AI Researcher at Stanford",
      content: "Frank bridges the gap between academic AI research and practical design implementation better than anyone I know.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
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
            Resources & Contributions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Downloadable frameworks, open-source contributions, and community resources that demonstrate my commitment to advancing ethical AI design.
          </p>
        </motion.div>

        {/* Downloadable Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {frameworks?.map((framework, index) => (
            <motion.div
              key={framework?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-subtle hover:shadow-soft transition-all duration-300 border border-border hover:border-cosmic-accent/30 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 bg-${framework?.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      name={framework?.icon} 
                      size={24} 
                      className={`text-${framework?.color}`} 
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {framework?.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {framework?.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {framework?.description}
                </p>

                <div className="space-y-3 mb-6">
                  {framework?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className={`text-${framework?.color}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span>{framework?.size}</span>
                  <span>{framework?.downloads} downloads</span>
                </div>

                <Button
                  className={`w-full bg-${framework?.color} hover:bg-${framework?.color}/90 text-white`}
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Free
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Open Source Contributions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributions?.map((contribution, index) => (
              <motion.div
                key={contribution?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-soft transition-all duration-300 border border-border hover:border-cosmic-accent/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cosmic-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={contribution?.icon} size={20} className="text-cosmic-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-heading font-bold text-foreground group-hover:text-cosmic-primary transition-colors duration-300">
                          {contribution?.title}
                        </h4>
                        <span className="text-xs text-cosmic-accent bg-cosmic-accent/10 px-2 py-1 rounded-full">
                          {contribution?.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {contribution?.description}
                      </p>
                      <div className="flex items-center space-x-2 text-cosmic-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ExternalLink" size={14} />
                        <span className="text-xs font-medium">{contribution?.link}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Community Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial?.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-subtle border border-border h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial?.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial?.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-cosmic-primary/5 rounded-3xl p-12 border border-cosmic-primary/10">
            <Icon name="Lightbulb" size={48} className="text-cosmic-accent mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Ready to Transform AI Design Together?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're looking to implement ethical AI in your products or collaborate on advancing the field, I'm here to help make AI more human-centered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="cosmic-button px-8 py-3"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;