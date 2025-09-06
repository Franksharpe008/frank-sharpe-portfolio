import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FutureConceptsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('interfaces');

  const categories = [
    { id: 'interfaces', name: 'AI Interfaces', icon: 'Monitor' },
    { id: 'collaboration', name: 'Collaboration Tools', icon: 'Users' },
    { id: 'accessibility', name: 'Accessibility', icon: 'Heart' },
    { id: 'ethics', name: 'Ethical Frameworks', icon: 'Shield' }
  ];

  const concepts = {
    interfaces: [
      {
        id: 1,
        title: "Adaptive Context UI",
        subtitle: "2026-2028 Timeline",
        description: `Interfaces that dynamically restructure based on user context, task complexity, and cognitive load. Using real-time biometric feedback and behavioral patterns to optimize information architecture.`,
        features: ["Biometric-driven layouts", "Contextual information density", "Predictive interface elements", "Emotional state adaptation"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        status: "Prototype Phase",
        impact: "40% reduction in cognitive load"
      },
      {
        id: 2,
        title: "Neural Command Interface",
        subtitle: "2028-2030 Timeline",
        description: `Brain-computer interfaces for design tools that translate creative intent directly into digital actions. Eliminating the gap between imagination and execution through neural pattern recognition.`,
        features: ["Thought-to-action translation", "Creative intent mapping", "Neural feedback loops", "Subconscious preference learning"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        status: "Research Phase",
        impact: "10x faster ideation cycles"
      },
      {
        id: 3,
        title: "Holographic Design Canvas",
        subtitle: "2027-2029 Timeline",
        description: `Three-dimensional design environments that allow creators to manipulate digital objects in physical space, with AI assistants providing real-time feedback and suggestions.`,
        features: ["Spatial design tools", "Gesture-based controls", "AI design critique", "Collaborative 3D spaces"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        status: "Concept Phase",
        impact: "Revolutionary spatial design"
      }
    ],
    collaboration: [
      {
        id: 4,
        title: "AI Design Mediator",
        subtitle: "2025-2027 Timeline",
        description: `Intelligent systems that facilitate design team collaboration by understanding individual working styles, resolving creative conflicts, and suggesting optimal collaboration patterns.`,
        features: ["Conflict resolution AI", "Style compatibility analysis", "Optimal meeting timing", "Creative synthesis tools"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        status: "Development Phase",
        impact: "60% faster team alignment"
      },
      {
        id: 5,
        title: "Cross-Reality Workshops",
        subtitle: "2026-2028 Timeline",
        description: `Virtual collaboration spaces that blend physical and digital environments, allowing distributed teams to work together as if they're in the same room, with AI facilitating seamless interaction.`,
        features: ["Mixed reality collaboration", "Presence simulation", "Gesture translation", "Cultural adaptation AI"],
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop",
        status: "Prototype Phase",
        impact: "Global team unification"
      }
    ],
    accessibility: [
      {
        id: 6,
        title: "Universal Design AI",
        subtitle: "2025-2026 Timeline",
        description: `AI systems that automatically generate accessible alternatives for any digital interface, ensuring universal usability without compromising design integrity or user experience.`,
        features: ["Auto-accessibility generation", "Disability-specific adaptations", "Real-time compliance checking", "Inclusive design suggestions"],
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
        status: "Beta Testing",
        impact: "100% accessibility compliance"
      },
      {
        id: 7,
        title: "Empathy Simulation Engine",
        subtitle: "2027-2029 Timeline",
        description: `Tools that allow designers to experience their interfaces through the lens of various disabilities and conditions, fostering deeper understanding and more inclusive design decisions.`,
        features: ["Disability simulation", "Cognitive load modeling", "Sensory experience recreation", "Empathy-driven insights"],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        status: "Research Phase",
        impact: "Transformative empathy building"
      }
    ],
    ethics: [
      {
        id: 8,
        title: "Ethical AI Auditor",
        subtitle: "2025-2027 Timeline",
        description: `Automated systems that continuously monitor AI design decisions for bias, fairness, and ethical implications, providing real-time guidance and historical impact analysis.`,
        features: ["Bias detection algorithms", "Fairness metrics tracking", "Ethical decision trees", "Impact prediction modeling"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        status: "Development Phase",
        impact: "Zero-bias AI systems"
      },
      {
        id: 9,
        title: "Transparent AI Dashboard",
        subtitle: "2026-2028 Timeline",
        description: `User-facing interfaces that make AI decision-making processes completely transparent, allowing users to understand, question, and influence how AI systems affect their experience.`,
        features: ["Decision pathway visualization", "User influence controls", "Algorithmic transparency", "Personalized explanations"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        status: "Prototype Phase",
        impact: "Complete AI transparency"
      }
    ]
  };

  const activeConcepts = concepts?.[activeCategory] || [];

  return (
    <section className="py-20 bg-muted/30">
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
              <Icon name="Lightbulb" size={24} className="text-cosmic-accent" />
            </div>
            <span className="text-cosmic-accent font-mono text-sm tracking-wider uppercase">
              Future Concepts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Speculative Design
            <span className="block text-cosmic-accent">for Tomorrow's AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring the possibilities that emerge when artificial intelligence meets human-centered design principles.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-cosmic-primary text-white shadow-cosmic'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon
                name={category?.icon}
                size={18}
                className={activeCategory === category?.id ? 'text-cosmic-accent' : 'text-muted-foreground'}
              />
              <span className="font-medium">{category?.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Concepts Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeConcepts?.map((concept, index) => (
            <motion.div
              key={concept?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-layered transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={concept?.image}
                  alt={concept?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    concept?.status === 'Beta Testing' ? 'bg-cosmic-trust/20 text-cosmic-trust' :
                    concept?.status === 'Development Phase' ? 'bg-cosmic-accent/20 text-cosmic-accent' :
                    concept?.status === 'Prototype Phase'? 'bg-cosmic-secondary/20 text-cosmic-secondary' : 'bg-muted/80 text-muted-foreground'
                  }`}>
                    {concept?.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {concept?.title}
                  </h3>
                  <p className="text-sm text-cosmic-accent font-medium">
                    {concept?.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {concept?.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {concept?.features?.slice(0, 3)?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cosmic-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {concept?.features?.length > 3 && (
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-muted rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
                        +{concept?.features?.length - 3} more features
                      </span>
                    </div>
                  )}
                </div>

                {/* Impact */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-cosmic-accent" />
                    <span className="text-sm font-medium text-cosmic-accent">
                      {concept?.impact}
                    </span>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-cosmic-accent transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-cosmic-primary/10 rounded-2xl p-8 border border-cosmic-accent/20">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Want to Collaborate on Future Concepts?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These concepts represent just the beginning. I'm always looking for forward-thinking organizations to explore what's possible when AI meets human-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cosmic-button px-6 py-3 rounded-lg font-medium flex items-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>Discuss Concepts</span>
              </button>
              <button className="border border-cosmic-accent text-cosmic-accent hover:bg-cosmic-accent/10 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300">
                <Icon name="Download" size={18} />
                <span>Download Research</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureConceptsShowcase;