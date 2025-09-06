import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialPresence = () => {
  const socialPlatforms = [
    {
      platform: 'LinkedIn',
      handle: '/in/frank-sharpe-ai-design',
      followers: '2.5K+',
      description: 'Professional insights on AI design, industry trends, and career development in creative technology.',
      recentActivity: 'Posted about ethical AI design principles',
      engagement: 'High engagement on AI design posts',
      icon: 'Linkedin',
      color: 'blue-600',
      url: 'https://linkedin.com/in/frank-sharpe-ai-design'
    },
    {
      platform: 'Twitter/X',
      handle: '@FrankSharpeAI',
      followers: '1.8K+',
      description: 'Real-time thoughts on AI developments, design experiments, and Austin tech scene updates.',
      recentActivity: 'Thread on AI accessibility in design',
      engagement: 'Active in AI design community discussions',
      icon: 'Twitter',
      color: 'slate-900',
      url: 'https://twitter.com/FrankSharpeAI'
    },
    {
      platform: 'GitHub',
      handle: '/frank-sharpe-design',
      followers: '890+',
      description: 'Open-source design systems, AI integration examples, and experimental web technologies.',
      recentActivity: 'Updated AI Design System components',
      engagement: 'Regular contributions to design tools',
      icon: 'Github',
      color: 'slate-800',
      url: 'https://github.com/frank-sharpe-design'
    },
    {
      platform: 'Dribbble',
      handle: '/frank-sharpe',
      followers: '1.2K+',
      description: 'Visual portfolio showcasing AI-enhanced designs, UI experiments, and creative explorations.',
      recentActivity: 'Shared AI-generated design variations',
      engagement: 'Featured in design community highlights',
      icon: 'Dribbble',
      color: 'pink-500',
      url: 'https://dribbble.com/frank-sharpe'
    }
  ];

  const recentInsights = [
    {
      title: 'The Future of AI in Design Systems',
      platform: 'LinkedIn',
      date: '2 days ago',
      engagement: '127 likes, 23 comments',
      preview: 'How AI is revolutionizing the way we think about scalable design systems and component libraries...'
    },
    {
      title: 'Ethical Considerations in AI-Driven UX',
      platform: 'Medium',
      date: '1 week ago',
      engagement: '89 claps, 12 responses',
      preview: 'Exploring the responsibility designers have when implementing AI features that impact user behavior...'
    },
    {
      title: 'Austin Tech Scene: AI Design Opportunities',
      platform: 'Twitter',
      date: '3 days ago',
      engagement: '45 retweets, 78 likes',
      preview: 'Thread about the growing demand for AI-savvy designers in Austin\'s thriving tech ecosystem...'
    }
  ];

  const communityContributions = [
    {
      title: 'AI Design Ethics Workshop',
      type: 'Speaking Engagement',
      event: 'Austin Design Week 2024',
      date: 'March 2024',
      description: 'Led workshop on ethical AI implementation in user experience design.'
    },
    {
      title: 'Open Source Design System',
      type: 'Project Contribution',
      event: 'GitHub Community',
      date: 'Ongoing',
      description: 'Maintaining AI-enhanced component library used by 200+ designers.'
    },
    {
      title: 'AI Design Mentorship',
      type: 'Community Service',
      event: 'ADPList Platform',
      date: 'Monthly',
      description: 'Mentoring junior designers on AI integration and career development.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Active in the Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow my journey, insights, and contributions across platforms where I share knowledge, 
            connect with peers, and advance the AI design community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Social Platforms */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="Share2" size={24} className="text-cosmic-accent mr-3" />
              Social Presence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {socialPlatforms?.map((social, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border group hover:shadow-layered transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-${social?.color}/10 rounded-lg flex items-center justify-center`}>
                        <Icon name={social?.icon} size={20} className={`text-${social?.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{social?.platform}</h4>
                        <p className="text-sm text-muted-foreground">{social?.handle}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-cosmic-accent/10 text-cosmic-accent px-2 py-1 rounded-md">
                      {social?.followers}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{social?.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Icon name="Activity" size={12} className="mr-2" />
                      {social?.recentActivity}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Icon name="TrendingUp" size={12} className="mr-2" />
                      {social?.engagement}
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-cosmic-primary group-hover:text-white group-hover:border-cosmic-primary transition-all duration-300"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => window.open(social?.url, '_blank')}
                  >
                    Follow on {social?.platform}
                  </Button>
                </div>
              ))}
            </div>

            {/* Recent Insights */}
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="BookOpen" size={24} className="text-cosmic-trust mr-3" />
              Recent Insights & Articles
            </h3>
            
            <div className="space-y-6">
              {recentInsights?.map((insight, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{insight?.title}</h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Icon name="Calendar" size={12} />
                      <span>{insight?.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-cosmic-accent font-medium">{insight?.platform}</span>
                    <span className="text-xs text-muted-foreground">{insight?.engagement}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{insight?.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Contributions */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="Heart" size={24} className="text-cosmic-secondary mr-3" />
              Community Impact
            </h3>
            
            <div className="space-y-6 mb-8">
              {communityContributions?.map((contribution, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{contribution?.title}</h4>
                    <span className="text-xs bg-cosmic-secondary/10 text-cosmic-secondary px-2 py-1 rounded-md">
                      {contribution?.type}
                    </span>
                  </div>
                  <p className="text-sm text-cosmic-accent font-medium mb-2">{contribution?.event}</p>
                  <p className="text-xs text-muted-foreground mb-3">{contribution?.date}</p>
                  <p className="text-sm text-muted-foreground">{contribution?.description}</p>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-cosmic-primary to-cosmic-secondary rounded-xl p-6 text-white">
              <div className="text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-cosmic-accent" />
                <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
                <p className="text-sm text-white/80 mb-6">
                  Get monthly insights on AI design trends, project updates, and industry observations.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cosmic-accent"
                  />
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-cosmic-primary hover:bg-white/90"
                    iconName="Send"
                    iconPosition="right"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-white/60 mt-3">
                  No spam, unsubscribe anytime. ~500 subscribers and growing.
                </p>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Zap" size={16} className="text-cosmic-accent mr-2" />
                Quick Social Connect
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Linkedin"
                  onClick={() => window.open('https://linkedin.com/in/therelentlessconnoisseur', '_blank')}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Twitter"
                  onClick={() => window.open('https://twitter.com/FrankSharpeAI', '_blank')}
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Github"
                  onClick={() => window.open('https://github.com/frank-sharpe-design', '_blank')}
                >
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Dribbble"
                  onClick={() => window.open('https://dribbble.com/frank-sharpe', '_blank')}
                >
                  Dribbble
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPresence;nce;