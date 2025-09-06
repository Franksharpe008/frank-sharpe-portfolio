import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email for Detailed Inquiries',
      description: 'Perfect for project discussions, collaboration proposals, and detailed questions about AI design integration.',
      icon: 'Mail',
      action: 'Send Email',
      contact: 'frank@tailorbytez.com',
      responseTime: '< 24 hours',
      bestFor: 'Project inquiries, collaboration proposals, detailed discussions',
      color: 'cosmic-accent'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Professional Network',
      description: 'Connect for industry insights, networking, and staying updated on AI design trends and innovations.',
      icon: 'Linkedin',
      action: 'Connect on LinkedIn',
      contact: '/in/frank-sharpe-ai-design',
      responseTime: '< 48 hours',
      bestFor: 'Professional networking, industry discussions, career opportunities',
      color: 'blue-500'
    },
    {
      id: 'calendar',
      title: 'Schedule a Consultation',
      description: 'Book a 30-minute discovery call to discuss your AI integration needs and explore collaboration possibilities.',
      icon: 'Calendar',
      action: 'Book Meeting',
      contact: 'calendly.com/frank-sharpe',
      responseTime: 'Real-time booking',
      bestFor: 'Project consultations, technical discussions, partnership exploration',
      color: 'cosmic-secondary'
    },
    {
      id: 'phone',
      title: 'Direct Phone Contact',
      description: 'For urgent project needs or time-sensitive opportunities. Available during Austin business hours.',
      icon: 'Phone',
      action: 'Call Direct',
      contact: '+1 (512) 555-0147',
      responseTime: 'Business hours',
      bestFor: 'Urgent inquiries, interview scheduling, immediate consultation needs',
      color: 'cosmic-trust'
    }
  ];

  const handleContactClick = (method) => {
    switch (method?.id) {
      case 'email':
        window.location.href = `mailto:${method?.contact}?subject=AI Design Collaboration Inquiry`;
        break;
      case 'linkedin':
        window.open(`https://linkedin.com${method?.contact}`, '_blank');
        break;
      case 'calendar':
        window.open(`https://${method?.contact}`, '_blank');
        break;
      case 'phone':
        window.location.href = `tel:${method?.contact}`;
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Connection Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to reach out, each optimized for different types of conversations and collaboration needs.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-layered transition-all duration-300 border border-border group"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 bg-${method?.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    name={method?.icon} 
                    size={24} 
                    className={`text-${method?.color}`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {method?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method?.description}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Contact:</span>
                  <span className="text-sm font-mono text-muted-foreground">{method?.contact}</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Response Time:</span>
                  <span className="text-sm text-cosmic-accent font-medium">{method?.responseTime}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Best for: {method?.bestFor}</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-cosmic-primary group-hover:text-white group-hover:border-cosmic-primary transition-all duration-300"
                iconName={method?.icon}
                iconPosition="left"
                onClick={() => handleContactClick(method)}
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-gradient-to-r from-cosmic-primary/5 to-cosmic-accent/5 rounded-2xl p-8 border border-cosmic-primary/20">
          <div className="text-center">
            <Icon name="Zap" size={32} className="text-cosmic-accent mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Urgent Project Needs?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For time-sensitive opportunities or emergency project support, reach out directly. 
              I prioritize urgent client needs and interview opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                className="cosmic-button"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:+15125550147'}
              >
                Call Now: (512) 555-0147
              </Button>
              <Button
                variant="outline"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={() => window.location.href = 'sms:479-670-1418'}
              >
                Text Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;ontactMethods;