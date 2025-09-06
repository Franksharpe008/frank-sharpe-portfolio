import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityImpact = () => {
  const [activeTab, setActiveTab] = useState('opensource');

  const impactAreas = [
    { id: 'opensource', name: 'Open Source', icon: 'Code' },
    { id: 'mentorship', name: 'Mentorship', icon: 'Users' },
    { id: 'education', name: 'Education', icon: 'BookOpen' },
    { id: 'advocacy', name: 'Advocacy', icon: 'Megaphone' }
  ];

  const openSourceProjects = [
    {
      id: 1,
      name: "AI Design System",
      description: "Open-source design system specifically built for AI-powered applications, including components for explainable AI, user consent flows, and accessibility-first patterns.",
      stats: { stars: 2847, forks: 394, contributors: 67 },
      technologies: ["React", "TypeScript", "Storybook", "Figma"],
      impact: "Used by 150+ companies worldwide",
      github: "https://github.com/franksharpe/ai-design-system",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Ethical AI Toolkit",
      description: "Comprehensive toolkit for designers and developers to implement ethical AI principles, including bias detection tools, transparency frameworks, and user consent patterns.",
      stats: { stars: 1923, forks: 287, contributors: 43 },
      technologies: ["JavaScript", "Python", "React", "D3.js"],
      impact: "Downloaded 50K+ times monthly",
      github: "https://github.com/franksharpe/ethical-ai-toolkit",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Accessibility AI Components",
      description: "React components that make AI interfaces accessible by default, including screen reader optimizations, keyboard navigation, and cognitive load considerations.",
      stats: { stars: 1456, forks: 198, contributors: 29 },
      technologies: ["React", "ARIA", "TypeScript", "Jest"],
      impact: "Improved accessibility for 1M+ users",
      github: "https://github.com/franksharpe/a11y-ai-components",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
    }
  ];

  const mentorshipPrograms = [
    {
      title: "AI Design Bootcamp",
      description: "12-week intensive program teaching designers how to create human-centered AI experiences",
      participants: 247,
      successRate: 94,
      outcomes: ["89% career advancement", "156 AI projects launched", "67% salary increase average"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      title: "Underrepresented Voices in AI",
      description: "Scholarship program providing free AI design education to underrepresented groups in tech",
      participants: 89,
      successRate: 97,
      outcomes: ["78% hired at AI companies", "45 diversity advocates trained", "23 speaking opportunities created"],
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop"
    },
    {
      title: "Senior Designer Transition",
      description: "Helping experienced designers transition into AI-focused roles with personalized guidance",
      participants: 134,
      successRate: 91,
      outcomes: ["112 successful role transitions", "89% retained after 1 year", "34 new AI design leaders"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ];

  const educationalInitiatives = [
    {
      title: "AI Design Ethics Course",
      platform: "University of Texas at Austin",
      description: "Guest lecturer for graduate-level course on ethical considerations in AI interface design",
      reach: "500+ students annually",
      impact: "Curriculum adopted by 12 universities",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
    },
    {
      title: "YouTube: AI Design Explained",
      platform: "YouTube Channel",
      description: "Weekly videos breaking down complex AI design concepts for designers and developers",
      reach: "125K subscribers, 2.3M views",
      impact: "Translated into 8 languages",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Design Systems for AI",
      platform: "Online Course",
      description: "Comprehensive course on building scalable design systems for AI-powered products",
      reach: "3,400+ enrolled students",
      impact: "4.9/5 rating, 89% completion rate",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    }
  ];

  const advocacyWork = [
    {
      title: "AI Accessibility Standards",
      organization: "W3C Web Accessibility Initiative",
      role: "Contributing Member",
      description: "Helping develop accessibility standards specifically for AI-powered web applications",
      impact: "Standards adopted by major tech companies",
      timeline: "2023-Present"
    },
    {
      title: "Ethical AI Design Conference",
      organization: "Austin Design Week",
      role: "Keynote Speaker & Organizer",
      description: "Annual conference bringing together designers, ethicists, and AI researchers",
      impact: "1,200+ attendees, 45 speakers, 8 countries",
      timeline: "2022-Present"
    },
    {
      title: "AI Bias in Design Research",
      organization: "MIT Media Lab",
      role: "Research Collaborator",
      description: "Collaborative research on identifying and preventing bias in AI interface design",
      impact: "3 published papers, 15 citations",
      timeline: "2023-2024"
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'opensource':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Open Source Contributions
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Building tools and resources that make AI design more accessible, ethical, and inclusive for the entire community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSourceProjects?.map((project, index) => (
                <motion.div
                  key={project?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-layered transition-all duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project?.image}
                      alt={project?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {project?.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project?.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-cosmic-accent" />
                        <span className="text-muted-foreground">{project?.stats?.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="GitFork" size={14} className="text-cosmic-trust" />
                        <span className="text-muted-foreground">{project?.stats?.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} className="text-cosmic-secondary" />
                        <span className="text-muted-foreground">{project?.stats?.contributors}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project?.technologies?.slice(0, 3)?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-cosmic-accent font-medium">
                        {project?.impact}
                      </span>
                      <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-cosmic-accent transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'mentorship':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Mentorship Programs
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Empowering the next generation of AI designers through structured mentorship and career guidance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorshipPrograms?.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-soft border border-border"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={program?.image}
                      alt={program?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {program?.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {program?.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-cosmic-accent">{program?.participants}</div>
                        <div className="text-xs text-muted-foreground">Participants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-cosmic-trust">{program?.successRate}%</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {program?.outcomes?.map((outcome, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cosmic-accent rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Educational Initiatives
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Making AI design knowledge accessible through courses, content, and collaborative learning experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalInitiatives?.map((initiative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-soft border border-border"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={initiative?.image}
                      alt={initiative?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="BookOpen" size={16} className="text-cosmic-accent" />
                      <span className="text-xs text-cosmic-accent font-medium">{initiative?.platform}</span>
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {initiative?.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {initiative?.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Reach</span>
                        <span className="text-sm font-medium text-cosmic-accent">{initiative?.reach}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Impact</span>
                        <span className="text-sm font-medium text-cosmic-trust">{initiative?.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'advocacy':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Industry Advocacy
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Working with organizations and institutions to establish ethical standards and best practices for AI design.
              </p>
            </div>
            <div className="space-y-6">
              {advocacyWork?.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-cosmic-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={24} className="text-cosmic-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-heading font-semibold text-xl text-foreground mb-1">
                            {work?.title}
                          </h4>
                          <div className="flex items-center space-x-3 text-sm">
                            <span className="text-cosmic-accent font-medium">{work?.organization}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{work?.role}</span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {work?.timeline}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {work?.description}
                      </p>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-cosmic-trust" />
                        <span className="text-sm font-medium text-cosmic-trust">
                          {work?.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

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
              <Icon name="Heart" size={24} className="text-cosmic-accent" />
            </div>
            <span className="text-cosmic-accent font-mono text-sm tracking-wider uppercase">
              Community Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Giving Back to the
            <span className="block text-cosmic-accent">Design Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a more inclusive, ethical, and accessible future for AI design through education, mentorship, and open collaboration.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cosmic-accent mb-2">470+</div>
            <div className="text-sm text-muted-foreground">Mentees Guided</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cosmic-trust mb-2">125K+</div>
            <div className="text-sm text-muted-foreground">Students Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cosmic-secondary mb-2">6.2K+</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cosmic-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Speaking Events</div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {impactAreas?.map((area) => (
            <button
              key={area?.id}
              onClick={() => setActiveTab(area?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === area?.id
                  ? 'bg-cosmic-primary text-white shadow-cosmic'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon
                name={area?.icon}
                size={18}
                className={activeTab === area?.id ? 'text-cosmic-accent' : 'text-muted-foreground'}
              />
              <span className="font-medium">{area?.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {getTabContent()}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-cosmic-primary/10 rounded-2xl p-8 border border-cosmic-accent/20">
            <Icon name="Users" size={48} className="text-cosmic-accent mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Join the Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to contribute to open source projects, join a mentorship program, or collaborate on educational initiatives, there's a place for you in our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cosmic-button px-6 py-3 rounded-lg font-medium flex items-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>Get Involved</span>
              </button>
              <button className="border border-cosmic-accent text-cosmic-accent hover:bg-cosmic-accent/10 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300">
                <Icon name="Github" size={18} />
                <span>View Projects</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityImpact;