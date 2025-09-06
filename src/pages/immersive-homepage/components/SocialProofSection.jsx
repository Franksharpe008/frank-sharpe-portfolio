import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "VP of Product",
      company: "TechFlow Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `Frank's ability to seamlessly integrate AI capabilities into our user experience was transformative. His approach to making complex technology feel intuitive resulted in a 340% increase in user engagement. The attention to both technical excellence and human-centered design is remarkable.`,
      rating: 5,
      project: "AI-Enhanced Dashboard",
      impact: "340% engagement increase"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Austin Digital Collective",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `Working with Frank was like having a crystal ball into the future of design. His WebGL experiments and AI integrations pushed our creative boundaries while maintaining practical business value. The collaborative process was as impressive as the final results.`,
      rating: 5,
      project: "Interactive Brand Experience",
      impact: "280% brand recall improvement"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of Innovation",
      company: "MedTech Innovations",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: `Frank's expertise in AI-driven design systems revolutionized our product development cycle. His ability to translate complex medical data into intuitive interfaces while maintaining regulatory compliance is unmatched. A true creative technologist.`,
      rating: 5,
      project: "Medical AI Interface",
      impact: "450% faster development cycles"
    }
  ];

  const industryRecognition = [
    {
      title: "Six Sigma: Black Belt",
      organization: "Certification",
      year: "",
      icon: "Award"
    },
    {
      title: "CompTIA A+ Essentials",
      organization: "Certification",
      year: "",
      icon: "CheckCircle"
    },
    {
      title: "Top Performer",
      organization: "Award",
      year: "",
      icon: "Star"
    },
    {
      title: "System Administration",
      organization: "Certification",
      year: "",
      icon: "Server"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="testimonial-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cosmic-trust/10 text-cosmic-trust px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from clients and peers who've experienced the transformative impact of AI-enhanced design and creative technology solutions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-layered border border-border relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6 font-medium">
                    "{testimonials?.[currentTestimonial]?.content}"
                  </blockquote>

                  {/* Project Impact */}
                  <div className="bg-muted rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonials?.[currentTestimonial]?.project}
                        </h4>
                        <p className="text-sm text-muted-foreground">Project Impact</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-cosmic-accent">
                          {testimonials?.[currentTestimonial]?.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={testimonials?.[currentTestimonial]?.avatar}
                      alt={testimonials?.[currentTestimonial]?.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cosmic-trust rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {testimonials?.[currentTestimonial]?.name}
                  </h3>
                  <p className="text-cosmic-primary font-medium mb-1">
                    {testimonials?.[currentTestimonial]?.role}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials?.[currentTestimonial]?.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-cosmic-accent scale-125' :'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
            Industry Recognition & Speaking Engagements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryRecognition?.map((recognition, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-layered transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-cosmic-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cosmic-primary/20 transition-colors duration-300">
                  <Icon name={recognition?.icon} size={24} className="text-cosmic-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {recognition?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {recognition?.organization}
                </p>
                <p className="text-xs text-cosmic-accent font-medium">
                  {recognition?.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;