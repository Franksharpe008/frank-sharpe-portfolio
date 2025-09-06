import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('design');

  const skillCategories = {
    design: {
      title: "Design & UX",
      icon: "Palette",
      color: "cosmic-secondary",
      skills: [
        { name: "Visual Creativity", level: 95, description: "Fusing visual creativity with functional clarity" },
        { name: "Functional Clarity", level: 92, description: "Designing with purpose and clarity" },
        { name: "Brand Voice", level: 90, description: "Understanding and implementing brand voice in design" },
        { name: "Digital Leverage", level: 88, description: "Making brand voice and digital leverage work for you" }
      ]
    },
    development: {
      title: "Development",
      icon: "Code",
      color: "cosmic-trust",
      skills: [
        { name: "No-code Workflow Automation", level: 93, description: "Zapier, Make, IFTTT, n8n" },
        { name: "Backend Development", level: 90, description: "MongoDB, Supabase, Firebase" },
        { name: "Payment Integrations", level: 88, description: "Stripe, Gumroad, Square" },
        { name: "CRM Automations", level: 82, description: "Custom autoresponders and lead-gen pipelines" }
      ]
    },
    ai: {
      title: "AI Integration",
      icon: "Brain",
      color: "cosmic-accent",
      skills: [
        { name: "AI-driven Client Engagement", level: 90, description: "Groq, DeepAgent" },
        { name: "Real-time Chatbots", level: 85, description: "Smart, AI-driven client engagement" }
      ]
    },
    business: {
      title: "Business & Strategy",
      icon: "TrendingUp",
      color: "cosmic-primary",
      skills: [
        { name: "Financial Analysis", level: 88, description: "Top skill from resume" },
        { name: "Corporate Finance", level: 85, description: "Top skill from resume" },
        { name: "Software Troubleshooting", level: 92, description: "Top skill from resume" },
        { name: "Six Sigma: Black Belt", level: 83, description: "Certification" },
        { name: "System Administration", level: 80, description: "Certification" }
      ]
    }
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold text-foreground">{skill?.name}</h4>
        <span className="text-sm font-bold text-cosmic-accent">{skill?.level}%</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{skill?.description}</p>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill?.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className={`h-2 bg-${skillCategories?.[activeSkillCategory]?.color} rounded-full relative`}
        >
          <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-sm"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning design, development, and AI integration - built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex bg-background rounded-2xl p-2 shadow-soft">
            {Object.entries(skillCategories)?.map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveSkillCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeSkillCategory === key
                    ? `bg-${category?.color} text-white shadow-cosmic`
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={category?.icon} size={20} />
                <span className="font-medium">{category?.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills List */}
          <div className="space-y-2">
            <motion.h3
              key={activeSkillCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center space-x-3"
            >
              <Icon 
                name={skillCategories?.[activeSkillCategory]?.icon} 
                size={32} 
                className={`text-${skillCategories?.[activeSkillCategory]?.color}`} 
              />
              <span>{skillCategories?.[activeSkillCategory]?.title}</span>
            </motion.h3>

            {skillCategories?.[activeSkillCategory]?.skills?.map((skill, index) => (
              <SkillBar key={`${activeSkillCategory}-${index}`} skill={skill} index={index} />
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-background rounded-2xl p-8 shadow-soft border border-border">
            <div className="text-center mb-6">
              <Icon 
                name={skillCategories?.[activeSkillCategory]?.icon} 
                size={48} 
                className={`text-${skillCategories?.[activeSkillCategory]?.color} mx-auto mb-4`} 
              />
              <h4 className="text-2xl font-heading font-bold text-foreground mb-2">
                {skillCategories?.[activeSkillCategory]?.title} in Action
              </h4>
            </div>

            {/* Mini Demo Based on Category */}
            {activeSkillCategory === 'design' && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-cosmic-secondary rounded-lg"></div>
                  <div className="h-16 bg-cosmic-accent rounded-lg"></div>
                  <div className="h-16 bg-cosmic-trust rounded-lg"></div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Color palette generation and design system components
                </p>
              </div>
            )}

            {activeSkillCategory === 'development' && (
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-blue-400">const</span> frankSkills = {'{'}
                </div>
                <div className="ml-4 text-yellow-300">
                  react: <span className="text-green-300">'expert'</span>,
                </div>
                <div className="ml-4 text-yellow-300">
                  ai: <span className="text-green-300">'advanced'</span>,
                </div>
                <div className="ml-4 text-yellow-300">
                  creativity: <span className="text-green-300">'infinite'</span>
                </div>
                <div className="text-green-400">{'}'}</div>
              </div>
            )}

            {activeSkillCategory === 'ai' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                  <Icon name="MessageSquare" size={20} className="text-cosmic-accent" />
                  <span className="text-sm">AI-powered design suggestions</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                  <Icon name="Zap" size={20} className="text-cosmic-secondary" />
                  <span className="text-sm">Automated workflow optimization</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                  <Icon name="Shield" size={20} className="text-cosmic-trust" />
                  <span className="text-sm">Ethical AI implementation</span>
                </div>
              </div>
            )}

            {activeSkillCategory === 'business' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-cosmic-accent">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Led</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-cosmic-secondary">99%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Proven track record of delivering business value through design
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;