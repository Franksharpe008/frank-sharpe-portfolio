import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const LiveMetricsSection = () => {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    roi: 0
  });
  const sectionRef = useRef(null);

  const targetValues = {
    projects: 1000,
    satisfaction: 5,
    roi: 16
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!metricsVisible) return;

    const animateCounter = (key, target, duration = 2000) => {
      const start = Date.now();
      const startValue = 0;

      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

        setCounters(prev => ({ ...prev, [key]: currentValue }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // Stagger the animations
    animateCounter('projects', targetValues?.projects, 2500);
    setTimeout(() => animateCounter('satisfaction', targetValues?.satisfaction, 2000), 300);
    setTimeout(() => animateCounter('roi', targetValues?.roi, 2200), 600);
  }, [metricsVisible]);

  const metrics = [
    {
      id: 'projects',
      value: counters?.projects,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successful AI-enhanced digital experiences',
      icon: 'Layers',
      color: 'text-cosmic-accent',
      bgColor: 'bg-cosmic-accent/10'
    },
    {
      id: 'satisfaction',
      value: counters?.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding expectations',
      icon: 'Heart',
      color: 'text-cosmic-trust',
      bgColor: 'bg-cosmic-trust/10'
    },
    {
      id: 'roi',
      value: counters?.roi,
      suffix: '%+',
      label: 'Average ROI',
      description: 'Measurable business impact delivered',
      icon: 'TrendingUp',
      color: 'text-cosmic-secondary',
      bgColor: 'bg-cosmic-secondary/10'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-cosmic-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-cosmic-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-cosmic-trust rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cosmic-primary/10 text-cosmic-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="BarChart3" size={16} />
            <span>Live TailorBytez Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Proven Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time metrics from TailorBytez showcasing consistent delivery of exceptional results and measurable business value.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics?.map((metric, index) => (
            <div
              key={metric?.id}
              className={`relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-layered transition-all duration-500 group ${
                metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 ${metric?.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${metric?.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={metric?.icon} size={28} className={metric?.color} />
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                      {metric?.value?.toLocaleString()}
                    </span>
                    <span className={`text-2xl font-semibold ${metric?.color}`}>
                      {metric?.suffix}
                    </span>
                  </div>
                </div>

                {/* Label and Description */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {metric?.label}
                </h3>
                <p className="text-muted-foreground">
                  {metric?.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="w-full bg-muted rounded-full h-1">
                    <div
                      className={`h-1 rounded-full transition-all duration-1000 ${metric?.color?.replace('text-', 'bg-')}`}
                      style={{
                        width: metricsVisible ? '100%' : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-muted rounded-xl px-6 py-4">
            <Icon name="Clock" size={20} className="text-cosmic-primary" />
            <span className="text-sm text-muted-foreground">
              Metrics updated in real-time • Last updated: {new Date()?.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetricsSection;ection;tion;