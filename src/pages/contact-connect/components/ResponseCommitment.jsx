import React from 'react';
import Icon from '../../../components/AppIcon';

const ResponseCommitment = () => {
  const responseTimeframes = [
    {
      type: 'Interview Opportunities',
      timeframe: '< 4 hours',
      description: 'Priority response for job interviews and career opportunities with established companies.',
      icon: 'Briefcase',
      color: 'green-600',
      priority: 'Highest'
    },
    {
      type: 'Project Inquiries',
      timeframe: '< 24 hours',
      description: 'Detailed response for collaboration proposals, client projects, and partnership opportunities.',
      icon: 'Rocket',
      color: 'cosmic-accent',
      priority: 'High'
    },
    {
      type: 'Speaking Engagements',
      timeframe: '< 48 hours',
      description: 'Comprehensive response for conference talks, workshops, and community events.',
      icon: 'Mic',
      color: 'cosmic-secondary',
      priority: 'High'
    },
    {
      type: 'General Networking',
      timeframe: '< 72 hours',
      description: 'Thoughtful response for professional connections, advice requests, and industry discussions.',
      icon: 'Users',
      color: 'cosmic-trust',
      priority: 'Standard'
    },
    {
      type: 'Media & Press',
      timeframe: '< 6 hours',
      description: 'Rapid response for media inquiries, press requests, and time-sensitive publications.',
      icon: 'Camera',
      color: 'purple-600',
      priority: 'Urgent'
    }
  ];

  const commitmentPrinciples = [
    {
      title: 'Transparent Communication',
      description: 'Clear, honest feedback about project fit, timeline availability, and collaboration potential.',
      icon: 'MessageSquare'
    },
    {
      title: 'Respectful Responses',
      description: 'Every inquiry receives a thoughtful response, even when declining opportunities.',
      icon: 'Heart'
    },
    {
      title: 'Follow-Through',
      description: 'Committed to delivering on promises made during initial conversations and consultations.',
      icon: 'CheckCircle'
    },
    {
      title: 'Professional Courtesy',
      description: 'Prompt updates on project status, timeline changes, and availability shifts.',
      icon: 'Clock'
    }
  ];

  const escalationProcedures = [
    {
      scenario: 'Emergency Project Support',
      action: 'Call directly: 479-670-1418',
      description: 'For urgent client issues or project emergencies requiring immediate attention.'
    },
    {
      scenario: 'Time-Sensitive Opportunities',
      action: 'Text message with "URGENT" prefix',
      description: 'For interview scheduling or opportunities with tight deadlines.'
    },
    {
      scenario: 'Media Deadlines',
      action: 'Email with "PRESS DEADLINE" subject',
      description: 'For journalists or media professionals with publication deadlines.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Response Commitment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional reliability you can count on. Clear timeframes, consistent communication, 
            and respect for your time and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Response Timeframes */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="Clock" size={24} className="text-cosmic-accent mr-3" />
              Response Timeframes
            </h3>
            
            <div className="space-y-6 mb-12">
              {responseTimeframes?.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${item?.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon name={item?.icon} size={20} className={`text-${item?.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{item?.type}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs px-2 py-1 rounded-md ${
                            item?.priority === 'Urgent' ? 'bg-red-100 text-red-700' :
                            item?.priority === 'Highest' ? 'bg-green-100 text-green-700' :
                            item?.priority === 'High'? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {item?.priority}
                          </span>
                          <span className="text-lg font-bold text-cosmic-accent">{item?.timeframe}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Commitment Principles */}
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="Shield" size={24} className="text-cosmic-trust mr-3" />
              Communication Principles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitmentPrinciples?.map((principle, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-cosmic-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={principle?.icon} size={16} className="text-cosmic-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{principle?.title}</h4>
                      <p className="text-sm text-muted-foreground">{principle?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Escalation & Availability */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="AlertTriangle" size={24} className="text-cosmic-secondary mr-3" />
              Escalation Procedures
            </h3>
            
            <div className="space-y-6 mb-8">
              {escalationProcedures?.map((procedure, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <h4 className="font-semibold text-foreground mb-2">{procedure?.scenario}</h4>
                  <div className="bg-cosmic-accent/10 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-cosmic-accent">{procedure?.action}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{procedure?.description}</p>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-cosmic-primary to-cosmic-secondary rounded-xl p-6 text-white mb-8">
              <h4 className="font-semibold mb-4 flex items-center">
                <Icon name="Calendar" size={16} className="text-cosmic-accent mr-2" />
                Current Availability
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>New Projects:</span>
                  <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-md text-xs">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Consultations:</span>
                  <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-md text-xs">
                    Open
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Speaking Events:</span>
                  <span className="bg-yellow-500/20 text-yellow-200 px-2 py-1 rounded-md text-xs">
                    Selective
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interviews:</span>
                  <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-md text-xs">
                    Priority
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs text-white/80">
                  Last updated: January 6, 2025
                </p>
              </div>
            </div>

            {/* Contact Preferences */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Settings" size={16} className="text-cosmic-accent mr-2" />
                Contact Preferences
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Preferred Method:</span>
                  <span className="text-foreground font-medium">Email</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Business Hours:</span>
                  <span className="text-foreground font-medium">9AM-6PM CST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Time Zone:</span>
                  <span className="text-foreground font-medium">Austin, TX (CST)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Weekend Response:</span>
                  <span className="text-foreground font-medium">Emergencies Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reliability Stats */}
        <div className="mt-16 bg-gradient-to-r from-cosmic-primary/5 to-cosmic-accent/5 rounded-2xl p-8 border border-cosmic-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Reliability Track Record
            </h3>
            <p className="text-muted-foreground">
              Consistent professional communication built on trust and respect
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-accent mb-1">98.5%</div>
              <div className="text-sm text-muted-foreground">On-Time Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Interview Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-trust mb-1">18 min</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary mb-1">2,400+</div>
              <div className="text-sm text-muted-foreground">Messages Handled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponseCommitment;