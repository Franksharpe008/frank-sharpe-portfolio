import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  const timelineData = [
    {
      year: "2009",
      title: "The Beginning",
      subtitle: "Hands-on Tech Support",
      description: `My journey began in 2009, boots on the ground, providing hands-on tech support, installing studio gear, building custom PCs, and setting up over 1,000 DIY smart home and security systems.`,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&h=400&fit=crop",
      icon: "Wrench",
      color: "cosmic-secondary"
    },
    {
      year: "2013",
      title: "Front Door Promotions LLC",
      subtitle: "Regional Director of Sales And Marketing",
      description: `Accomplished Sales Manager offering 14 years of experience developing and maximizing Door-To-Door sales. Diligent in building and retaining accounts by providing support and attentive service.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      icon: "Briefcase",
      color: "cosmic-trust"
    },
    {
      year: "2018",
      title: "The Clorox Company",
      subtitle: "Senior Technical Process Specialist",
      description: `Coordinated with engineers and producers to ensure effective operation of broadcast systems. Troubleshot issues with broadcast systems to resolve problems quickly to minimize downtime.`,
      image: "https://images.unsplash.com/photo-1554224155-16954435a260?w=600&h=400&fit=crop",
      icon: "Settings",
      color: "cosmic-accent"
    },
    {
      year: "2023",
      title: "Tesla",
      subtitle: "Equipment Technology Technician",
      description: `Experience includes working in fast-paced production environments running extruder machines. Hardworking and reliable with a flexible schedule and the physical fitness to take on any task.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5a4a3a8?w=600&h=400&fit=crop",
      icon: "Zap",
      color: "cosmic-primary"
    },
    {
      year: "2025",
      title: "Afortus financial",
      subtitle: "Wealth Building Architect",
      description: `I specialize in guiding individuals and families toward real-time financial freedom through personalized wealth-building strategies.`,
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&h=400&fit=crop",
      icon: "TrendingUp",
      color: "cosmic-secondary"
    },
    {
      year: "Present",
      title: "TailorBytez",
      subtitle: "Business Technology Consultant",
      description: `I've scaled those roots into TailorBytez, where we build scalable digital ecosystems, powered by AI, automation, and beautiful front-end experiences that work while you sleep.`,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      icon: "Rocket",
      color: "cosmic-accent"
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
            The Evolution Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional design to AI-enhanced creativity, each step shaped my understanding of technology's role in amplifying human potential
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
                onMouseEnter={() => setActiveTimelineItem(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-${item?.color} flex items-center justify-center shadow-lg ${
                    activeTimelineItem === index ? 'scale-110 shadow-cosmic' : ''
                  } transition-all duration-300`}>
                    <Icon name={item?.icon} size={24} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}>
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-layered transition-all duration-300 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`text-2xl font-bold text-${item?.color}`}>{item?.year}</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {item?.title}
                    </h3>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">
                      {item?.subtitle}
                    </h4>
                    
                    <p className="text-foreground leading-relaxed mb-6 whitespace-pre-line">
                      {item?.description}
                    </p>

                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src={item?.image}
                        alt={`${item?.title} - ${item?.year}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex space-x-2 bg-muted rounded-full p-2">
            {timelineData?.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTimelineItem(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTimelineItem === index
                    ? `bg-${item?.color} text-white shadow-cosmic`
                    : 'text-muted-foreground hover:text-foreground hover:bg-background'
                }`}
              >
                <span className="text-sm font-bold">{item?.year?.slice(-2)}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;