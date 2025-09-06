import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const values = [
    {
      title: "Visual Creativity & Functional Clarity",
      icon: "Eye",
      color: "cosmic-secondary",
      description: "I fuse visual creativity with functional clarity.",
      example: "Designing a user interface that is both beautiful and intuitive.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
    },
    {
      title: "Strategic Design",
      icon: "Target",
      color: "cosmic-trust",
      description: "I think like a strategist, design like an architect, and move like a builder with purpose.",
      example: "Developing a website that not only looks good but also achieves specific business goals.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    },
    {
      title: "Time, Brand, and Leverage",
      icon: "Clock",
      color: "cosmic-accent",
      description: "I understand the value of time, brand voice, and digital leverage — and how to make them all work for you.",
      example: "Creating a content strategy that builds brand authority and saves time.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
    },
    {
      title: "Legacy Builder",
      icon: "Users",
      color: "cosmic-primary",
      description: "As a husband, father, and legacy builder, I don't play with people's dreams — I help them bring them to life.",
      example: "Working with entrepreneurs to build businesses that will last for generations.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop"
    },
    {
      title: "Scalable Design",
      icon: "TrendingUp",
      color: "cosmic-secondary",
      description: "At TailorBytez, we specialize in scalable design + tech that moves fast, speaks clearly, and builds your brand with clarity, authority, and style.",
      example: "Building a website that can handle a large amount of traffic and can be easily updated.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Measurable Return",
      icon: "BarChart3",
      color: "cosmic-trust",
      description: "We scale intelligently from there, ensuring every investment delivers real, measurable return.",
      example: "Tracking key metrics to ensure that our clients are getting a positive return on their investment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
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
            Core Values & Ethics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide every design decision, client interaction, and technological implementation in my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-layered transition-all duration-300 border border-border h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-${value?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value?.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {value?.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src={value?.image}
                    alt={`${value?.title} illustration`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-foreground leading-relaxed mb-6 flex-grow">
                  {value?.description}
                </p>

                {/* Example */}
                <div className="bg-muted rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className={`text-${value?.color} mt-0.5 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Real Example:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value?.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethics Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cosmic-primary to-cosmic-secondary rounded-3xl p-12 text-center"
        >
          <Icon name="Scale" size={48} className="text-white mx-auto mb-6" />
          <h3 className="text-3xl font-heading font-bold text-white mb-6">
            My Design Ethics Pledge
          </h3>
          <p className="text-xl text-cosmic-text-secondary max-w-4xl mx-auto leading-relaxed">
            "I commit to designing AI-enhanced experiences that respect user privacy, promote digital wellbeing, and create opportunities for human flourishing. Every line of code and pixel placed serves to make technology more humane, accessible, and beneficial for all."
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="text-white font-medium">— Frank Sharpe, 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
      </div>
    </section>
  );
};

export default ValuesSection;