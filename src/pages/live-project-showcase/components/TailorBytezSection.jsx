import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TailorBytezSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const clientTransformations = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "SaaS Platform",
      challenge: "Low user engagement and 23% conversion rate",
      solution: "AI-powered personalization engine with dynamic content optimization",
      results: {
        engagement: "+312%",
        conversion: "+89%",
        revenue: "$1.8M",
        timeline: "3 months"
      },
      beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      testimonial: `Frank transformed our entire user experience. The AI personalization engine he built increased our conversion rate by 89% in just 3 months. His technical expertise combined with design thinking is unmatched.`,
      clientName: "Sarah Chen",
      clientRole: "VP of Product",
      clientAvatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      client: "RetailMax Commerce",
      industry: "E-commerce",
      challenge: "High cart abandonment and poor mobile experience",
      solution: "WebGL-powered 3D product visualization with AI recommendations",
      results: {
        engagement: "+245%",
        conversion: "+156%",
        revenue: "$3.2M",
        timeline: "4 months"
      },
      beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      testimonial: `The 3D product visualization Frank created revolutionized our mobile shopping experience. Cart abandonment dropped by 67% and our mobile conversion rate increased by 156%. Absolutely game-changing work.`,
      clientName: "Marcus Rodriguez",
      clientRole: "CEO",
      clientAvatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 3,
      client: "DataInsight Analytics",
      industry: "Data Analytics",
      challenge: "Complex data difficult to understand and act upon",
      solution: "Interactive D3.js dashboards with AI-generated insights",
      results: {
        engagement: "+198%",
        conversion: "+134%",
        revenue: "$2.7M",
        timeline: "5 months"
      },
      beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      testimonial: `Frank's data visualization expertise transformed how our clients interact with complex analytics. The AI-powered insights feature he developed became our primary differentiator in the market.`,
      clientName: "Dr. Emily Watson",
      clientRole: "Chief Data Officer",
      clientAvatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  const companyStats = [
    { label: "Client Satisfaction", value: "99%", icon: "Heart", color: "text-success" },
    { label: "Average ROI", value: "250%+", icon: "TrendingUp", color: "text-cosmic-accent" },
    { label: "Projects Delivered", value: "500+", icon: "CheckCircle", color: "text-cosmic-secondary" },
    { label: "Years Experience", value: "8+", icon: "Award", color: "text-cosmic-primary" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cosmic-primary/5 via-background to-cosmic-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-cosmic-primary rounded-2xl flex items-center justify-center">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-heading font-bold text-foreground">TailorBytez</h2>
              <p className="text-cosmic-accent font-semibold">Digital Transformation Studio</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming businesses through AI-enhanced design and development. 
            Real client success stories with measurable impact and quantified results.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyStats?.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-soft text-center group hover:shadow-layered transition-all duration-300">
              <Icon name={stat?.icon} size={32} className={`${stat?.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Client Transformations */}
        <div className="space-y-16">
          {clientTransformations?.map((transformation, index) => (
            <div key={transformation?.id} className="bg-card rounded-2xl shadow-soft overflow-hidden">
              <div className="p-8">
                {/* Client Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {transformation?.client}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-cosmic-primary/10 text-cosmic-primary rounded-full font-medium">
                        {transformation?.industry}
                      </span>
                      <span>Timeline: {transformation?.results?.timeline}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cosmic-accent mb-1">
                      {transformation?.results?.revenue}
                    </div>
                    <div className="text-sm text-muted-foreground">Additional Revenue</div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="AlertCircle" size={20} className="text-warning" />
                      <h4 className="font-heading font-semibold text-foreground">Challenge</h4>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src={transformation?.beforeImage}
                        alt={`${transformation?.client} before transformation`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          BEFORE
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{transformation?.challenge}</p>
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="CheckCircle" size={20} className="text-success" />
                      <h4 className="font-heading font-semibold text-foreground">Solution</h4>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src={transformation?.afterImage}
                        alt={`${transformation?.client} after transformation`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-success/20 flex items-center justify-center">
                        <span className="bg-success text-white px-3 py-1 rounded-full text-sm font-semibold">
                          AFTER
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{transformation?.solution}</p>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-success/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-success mb-1">
                      {transformation?.results?.engagement}
                    </div>
                    <div className="text-xs text-muted-foreground">User Engagement</div>
                  </div>
                  <div className="bg-cosmic-accent/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cosmic-accent mb-1">
                      {transformation?.results?.conversion}
                    </div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="bg-cosmic-secondary/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cosmic-secondary mb-1">
                      {transformation?.results?.revenue}
                    </div>
                    <div className="text-xs text-muted-foreground">Revenue Impact</div>
                  </div>
                  <div className="bg-cosmic-primary/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cosmic-primary mb-1">
                      {transformation?.results?.timeline}
                    </div>
                    <div className="text-xs text-muted-foreground">Delivery Time</div>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-muted/30 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={transformation?.clientAvatar}
                      alt={transformation?.clientName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <blockquote className="text-foreground italic mb-4">
                        "{transformation?.testimonial}"
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-semibold text-foreground">{transformation?.clientName}</div>
                          <div className="text-sm text-muted-foreground">{transformation?.clientRole}</div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-cosmic-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-cosmic-text-secondary mb-6 max-w-2xl mx-auto">
              Join 500+ satisfied clients who've achieved measurable growth through AI-enhanced design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-cosmic-accent hover:bg-cosmic-accent/90 text-white"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cosmic-primary"
                iconName="FileText"
                iconPosition="left"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailorBytezSection;