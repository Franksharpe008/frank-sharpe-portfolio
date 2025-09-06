import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('speaking');

  const achievements = {
    speaking: {
      title: "Speaking & Conferences",
      icon: "Mic",
      color: "cosmic-secondary",
      items: [
        {
          title: "Small Business Tech Summit",
          location: "Austin, TX",
          date: "2023",
          description: "Keynote on 'Automating Your Business for Success'",
          audience: "200+ small business owners",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
        },
        {
          title: "Future of Work Conference",
          location: "Virtual",
          date: "2022",
          description: "Panel discussion on the role of automation in the modern workplace",
          audience: "1,000+ global attendees",
          image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop"
        }
      ]
    },
    recognition: {
      title: "Awards & Recognition",
      icon: "Award",
      color: "cosmic-accent",
      items: [
        {
          title: "Top Performer",
          organization: "Front Door Promotions LLC",
          date: "2006-2011",
          description: "Achieved top sales rep 5 years in a row.",
          achievement: "Winner",
          image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop"
        },
        {
          title: "Six Sigma: Black Belt",
          organization: "Certification",
          date: "",
          description: "",
          achievement: "Certified",
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
        },
        {
          title: "CompTIA A+ Essentials",
          organization: "Certification",
          date: "",
          description: "",
          achievement: "Certified",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
        }
      ]
    },
    community: {
      title: "Community Impact",
      icon: "Users",
      color: "cosmic-trust",
      items: [
        {
          title: "Tech Support for Local Businesses",
          platform: "Austin, TX",
          date: "2009-Present",
          description: "Providing hands-on tech support to local business owners, creatives, and families.",
          impact: "1,000+ systems installed",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
        }
      ]
    },
    publications: {
      title: "Publications & Research",
      icon: "BookOpen",
      color: "cosmic-primary",
      items: []
    }
  };

  const TabButton = ({ tabKey, category }) => (
    <button
      onClick={() => setActiveTab(tabKey)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
        activeTab === tabKey
          ? `bg-${category?.color} text-white shadow-cosmic`
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      }`}
    >
      <Icon name={category?.icon} size={20} />
      <span className="font-medium">{category?.title}</span>
    </button>
  );

  const AchievementCard = ({ item, index, category }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-layered transition-all duration-300 border border-border"
    >
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden mb-4">
            <Image
              src={item?.image}
              alt={item?.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center">
            <div className={`inline-flex items-center space-x-2 px-3 py-1 bg-${category?.color} text-white rounded-full text-sm font-medium`}>
              <Icon name={category?.icon} size={16} />
              <span>{item?.date}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            {item?.title}
          </h3>
          
          {item?.location && (
            <div className="flex items-center space-x-2 text-muted-foreground mb-2">
              <Icon name="MapPin" size={16} />
              <span>{item?.location}</span>
            </div>
          )}
          
          {item?.organization && (
            <div className="flex items-center space-x-2 text-muted-foreground mb-2">
              <Icon name="Building" size={16} />
              <span>{item?.organization}</span>
            </div>
          )}
          
          {item?.publication && (
            <div className="flex items-center space-x-2 text-muted-foreground mb-2">
              <Icon name="FileText" size={16} />
              <span>{item?.publication}</span>
            </div>
          )}
          
          {item?.platform && (
            <div className="flex items-center space-x-2 text-muted-foreground mb-2">
              <Icon name="Globe" size={16} />
              <span>{item?.platform}</span>
            </div>
          )}

          <p className="text-foreground leading-relaxed mb-4">
            {item?.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            {item?.audience && (
              <div className="flex items-center space-x-2 text-cosmic-accent">
                <Icon name="Users" size={16} />
                <span>{item?.audience}</span>
              </div>
            )}
            {item?.achievement && (
              <div className="flex items-center space-x-2 text-cosmic-secondary">
                <Icon name="Trophy" size={16} />
                <span>{item?.achievement}</span>
              </div>
            )}
            {item?.impact && (
              <div className="flex items-center space-x-2 text-cosmic-trust">
                <Icon name="TrendingUp" size={16} />
                <span>{item?.impact}</span>
              </div>
            )}
            {item?.metrics && (
              <div className="flex items-center space-x-2 text-cosmic-primary">
                <Icon name="BarChart3" size={16} />
                <span>{item?.metrics}</span>
              </div>
            )}
          </div>
        </div>
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
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building thought leadership through speaking, writing, and community contributions in the AI design space
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex bg-background rounded-2xl p-2 shadow-soft">
            {Object.entries(achievements)?.map(([key, category]) => (
              <TabButton key={key} tabKey={key} category={category} />
            ))}
          </div>
        </div>

        {/* Achievement Content */}
        <div className="space-y-8">
          <motion.h3
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading font-bold text-foreground mb-8 flex items-center justify-center space-x-3"
          >
            <Icon 
              name={achievements?.[activeTab]?.icon} 
              size={32} 
              className={`text-${achievements?.[activeTab]?.color}`} 
            />
            <span>{achievements?.[activeTab]?.title}</span>
          </motion.h3>

          {achievements?.[activeTab]?.items?.map((item, index) => (
            <AchievementCard 
              key={`${activeTab}-${index}`} 
              item={item} 
              index={index} 
              category={achievements?.[activeTab]} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cosmic-primary to-cosmic-accent rounded-3xl p-12">
            <Icon name="Sparkles" size={48} className="text-white mx-auto mb-6" />
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-xl text-cosmic-text-secondary max-w-2xl mx-auto mb-8">
              These achievements represent just the beginning. I'm excited to bring this experience and passion to OpenAI's Design Studio team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-white font-medium">8+ Years Experience</span>
              </div>
              <div className="bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-white font-medium">500+ Projects</span>
              </div>
              <div className="bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-white font-medium">Industry Recognition</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;