import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AustinInfluence = () => {
  const austinValues = [
    {
      title: "Keep Austin Weird",
      description: "Embracing unconventional solutions and creative risk-taking in AI design",
      icon: "Zap",
      story: "Austin's 'Keep It Weird' ethos taught me that the most innovative AI solutions often come from questioning conventional approaches. When everyone else was building chatbots that sounded robotic, I focused on creating AI that felt authentically human.",
      color: "cosmic-secondary"
    },
    {
      title: "Community Over Competition",
      description: "Collaborative approach to AI development and open-source contributions",
      icon: "Users",
      story: "The Austin tech scene's collaborative spirit shaped my belief that AI advancement happens through community, not competition. I regularly share frameworks, contribute to open-source projects, and mentor other designers entering the AI space.",
      color: "cosmic-trust"
    },
    {
      title: "Music City Innovation",
      description: "Rhythm and harmony principles applied to AI user experience design",
      icon: "Music",
      story: "Living in the Live Music Capital taught me about rhythm, timing, and emotional resonance. I apply these musical principles to AI interactions—creating experiences that feel natural, with perfect timing and emotional depth.",
      color: "cosmic-accent"
    },
    {
      title: "Authentic Storytelling",
      description: "Genuine narratives that make complex AI concepts accessible and relatable",
      icon: "BookOpen",
      story: "Austin's storytelling culture, from SXSW to local coffee shops, influenced my approach to explaining AI. Instead of technical jargon, I craft narratives that help people understand and connect with AI technology on a human level.",
      color: "cosmic-cta"
    }
  ];

  const austinSpots = [
    {
      name: "South by Southwest",
      impact: "Where I first presented AI design concepts to global audiences",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop"
    },
    {
      name: "The ARCH",
      impact: "Volunteering here taught me about inclusive design and accessibility",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
    },
    {
      name: "Lady Bird Lake",
      impact: "Morning runs here inspire my most creative AI solutions",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-cosmic-secondary/5 via-background to-cosmic-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-cosmic-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Icon name="MapPin" size={20} className="text-cosmic-secondary" />
            <span className="text-cosmic-secondary font-medium">Austin, Texas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Austin's Creative DNA in AI Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How the Live Music Capital's unique culture shaped my approach to ethical AI design and human-centered innovation.
          </p>
        </motion.div>

        {/* Austin Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {austinValues?.map((value, index) => (
            <motion.div
              key={value?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-subtle hover:shadow-soft transition-all duration-300 border border-border hover:border-cosmic-accent/30 h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-${value?.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      name={value?.icon} 
                      size={24} 
                      className={`text-${value?.color}`} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {value?.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {value?.description}
                    </p>
                  </div>
                </div>
                
                <div className="pl-16">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value?.story}
                  </p>
                </div>

                <div className="mt-6 pl-16">
                  <div className="flex items-center space-x-2 text-cosmic-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="ExternalLink" size={16} />
                    <span className="text-sm font-medium">See in Action</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Austin Inspiration Spots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Places That Shaped My Philosophy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {austinSpots?.map((spot, index) => (
              <motion.div
                key={spot?.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-soft transition-all duration-300 border border-border hover:border-cosmic-accent/30">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={spot?.image}
                      alt={spot?.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-heading font-bold text-lg mb-1">
                        {spot?.name}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {spot?.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Austin Tech Scene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-12 shadow-subtle border border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Building" size={32} className="text-cosmic-accent" />
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Silicon Hills Impact
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Austin's tech ecosystem taught me that innovation thrives at the intersection of technology and humanity. The city's unique blend of creative energy and technical excellence shaped my belief that AI should amplify human potential, not replace it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-cosmic-trust mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Collaborative Innovation</h4>
                    <p className="text-sm text-muted-foreground">Learning from Dell, IBM, and local startups about balancing scale with humanity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-cosmic-trust mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Diverse Perspectives</h4>
                    <p className="text-sm text-muted-foreground">Austin's inclusive culture informing my approach to bias-free AI design</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-cosmic-trust mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Creative Problem-Solving</h4>
                    <p className="text-sm text-muted-foreground">Applying artistic thinking to technical challenges in AI implementation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cosmic-accent/20 to-cosmic-secondary/20 rounded-2xl p-8 text-center">
                <Icon name="Heart" size={48} className="text-cosmic-accent mx-auto mb-4" />
                <h4 className="text-xl font-heading font-bold text-foreground mb-4">
                  "Keep Austin Weird" in AI Design
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  This isn't just a slogan—it's a design philosophy. In a world of cookie-cutter AI implementations, I bring Austin's creative authenticity to every project, ensuring AI solutions are as unique and human as the people they serve.
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cosmic-accent/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cosmic-secondary/20 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Community Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
            Giving Back to the Austin Tech Community
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-cosmic-accent" />
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Mentorship</h4>
              <p className="text-muted-foreground text-sm">Guiding 50+ designers into AI careers through Austin Design Week</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-trust/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code" size={32} className="text-cosmic-trust" />
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Open Source</h4>
              <p className="text-muted-foreground text-sm">Contributing AI design tools to the Austin developer community</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mic" size={32} className="text-cosmic-secondary" />
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Speaking</h4>
              <p className="text-muted-foreground text-sm">Regular talks at SXSW and local meetups on ethical AI design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AustinInfluence;