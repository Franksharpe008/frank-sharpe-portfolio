import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AustinSection = () => {
  const austinInfluences = [
    {
      title: "Music Scene Collaboration",
      icon: "Music",
      description: "Austin\'s collaborative music culture taught me the power of creative partnerships and iterative improvement.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      title: "Tech Community Spirit",
      icon: "Users",
      description: "The supportive Austin tech scene fostered my growth from designer to full-stack creative technologist.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
      title: "Keep It Weird Philosophy",
      icon: "Sparkles",
      description: "Austin's embrace of uniqueness encourages bold, innovative solutions that stand out from conventional approaches.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ];

  const austinFavorites = [
    { name: "Franklin Barbecue", type: "Food", icon: "UtensilsCrossed" },
    { name: "Zilker Park", type: "Nature", icon: "Trees" },
    { name: "South by Southwest", type: "Event", icon: "Calendar" },
    { name: "Lady Bird Lake", type: "Recreation", icon: "Waves" },
    { name: "The Continental Club", type: "Music", icon: "Music" },
    { name: "Austin City Limits", type: "Festival", icon: "Mic" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cosmic-secondary/10 to-cosmic-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Austin Roots & Inspiration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How the Live Music Capital of the World shaped my approach to creative collaboration and innovative design
          </p>
        </motion.div>

        {/* Austin Map Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-background rounded-3xl p-8 shadow-layered border border-border overflow-hidden">
            <div className="absolute top-4 right-4 text-cosmic-accent">
              <Icon name="MapPin" size={32} />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Why Austin Matters
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Austin isn't just where I live—it's the creative ecosystem that shaped my design philosophy. The city's unique blend of technology innovation, artistic expression, and collaborative spirit directly influences how I approach AI-enhanced design projects.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-cosmic-accent" />
                    <span className="text-foreground">Collaborative over competitive mindset</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-cosmic-accent" />
                    <span className="text-foreground">Embrace of creative experimentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-cosmic-accent" />
                    <span className="text-foreground">Community-first approach to innovation</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Austin, Texas"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=30.2672,-97.7431&z=12&output=embed"
                    className="rounded-2xl"
                  ></iframe>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cosmic-accent text-white p-4 rounded-2xl shadow-cosmic">
                  <div className="text-center">
                    <div className="text-2xl font-bold">ATX</div>
                    <div className="text-sm opacity-90">Home Base</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Austin Influences */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {austinInfluences?.map((influence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-layered transition-all duration-300 border border-border h-full">
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src={influence?.image}
                    alt={influence?.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name={influence?.icon} size={24} className="text-cosmic-secondary" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {influence?.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {influence?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Austin Favorites */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl p-12 shadow-layered border border-border"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Austin Favorites
            </h3>
            <p className="text-lg text-muted-foreground">
              The places and experiences that keep me inspired and connected to the city's creative energy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {austinFavorites?.map((favorite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-muted rounded-2xl p-6 mb-3 group-hover:bg-cosmic-accent group-hover:text-white transition-all duration-300">
                  <Icon name={favorite?.icon} size={32} className="mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {favorite?.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {favorite?.type}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <blockquote className="text-2xl font-heading text-foreground italic max-w-3xl mx-auto">
              "Austin taught me that the best innovations come from bringing diverse creative minds together. That's the energy I bring to every AI design project."
            </blockquote>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="w-12 h-px bg-cosmic-accent"></div>
              <span className="text-sm text-muted-foreground font-medium">Frank Sharpe</span>
              <div className="w-12 h-px bg-cosmic-accent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AustinSection;