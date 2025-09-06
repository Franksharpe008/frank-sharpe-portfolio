import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveDemoModal = ({ project, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('demo');

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const demoViews = [
    { id: 'demo', label: 'Live Demo', icon: 'Play' },
    { id: 'code', label: 'Code Snippets', icon: 'Code' },
    { id: 'metrics', label: 'Performance', icon: 'TrendingUp' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-layered max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-cosmic-primary rounded-xl flex items-center justify-center">
              <Icon name="ExternalLink" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">{project?.title}</h2>
              <p className="text-muted-foreground">Interactive Live Demonstration</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-muted"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border">
          {demoViews?.map((view) => (
            <button
              key={view?.id}
              onClick={() => setCurrentView(view?.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-300 ${
                currentView === view?.id
                  ? 'text-cosmic-primary border-b-2 border-cosmic-primary bg-cosmic-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={view?.icon} size={18} />
              <span>{view?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-cosmic-primary/20 border-t-cosmic-primary rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading interactive demo...</p>
              </div>
            </div>
          ) : (
            <>
              {currentView === 'demo' && (
                <div className="space-y-6">
                  {/* Demo Interface */}
                  <div className="bg-muted/30 rounded-xl p-8 border-2 border-dashed border-cosmic-primary/30">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-cosmic-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="Sparkles" size={40} className="text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {project?.title} Demo
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Interactive demonstration of key features and AI capabilities
                      </p>
                      
                      {/* Mock Interactive Elements */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {project?.demoFeatures?.map((feature, index) => (
                          <div key={index} className="bg-card p-4 rounded-lg border border-border">
                            <Icon name={feature?.icon} size={24} className="text-cosmic-accent mx-auto mb-2" />
                            <h4 className="font-semibold text-sm text-foreground mb-1">{feature?.name}</h4>
                            <p className="text-xs text-muted-foreground">{feature?.description}</p>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="default"
                        className="cosmic-button"
                        iconName="Play"
                        iconPosition="left"
                      >
                        Start Interactive Demo
                      </Button>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project?.metrics?.map((metric, index) => (
                      <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                        <div className="text-2xl font-bold text-cosmic-primary mb-1">{metric?.value}</div>
                        <div className="text-sm text-muted-foreground">{metric?.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentView === 'code' && (
                <div className="space-y-6">
                  <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Key Implementation</span>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                    <pre className="text-green-400">
{`// AI-Enhanced Component Implementation
import { useAI, useWebGL } from '@/hooks';

const ${project?.title?.replace(/\s+/g, '')}Component = () => {
  const { generateContent, isLoading } = useAI();
  const { scene, camera, renderer } = useWebGL();
  
  const handleAIInteraction = async (input) => {
    const result = await generateContent({
      prompt: input,
      model: 'gpt-4',
      temperature: 0.7
    });
    
    return processResult(result);
  };
  
  return (
    <div className="ai-enhanced-interface">
      {/* Interactive AI Components */}
    </div>
  );
};`}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                      <div className="space-y-2">
                        {project?.technologies?.map((tech, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name={tech?.icon} size={16} className="text-cosmic-accent" />
                            <span className="text-sm text-muted-foreground">{tech?.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Performance Metrics</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Load Time:</span>
                          <span className="text-success font-semibold">&lt; 2.5s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lighthouse Score:</span>
                          <span className="text-success font-semibold">95/100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bundle Size:</span>
                          <span className="text-success font-semibold">245KB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentView === 'metrics' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: 'User Engagement', value: '+185%', icon: 'Users', color: 'text-cosmic-accent' },
                      { label: 'Conversion Rate', value: '+67%', icon: 'TrendingUp', color: 'text-success' },
                      { label: 'Page Load Speed', value: '2.1s', icon: 'Zap', color: 'text-cosmic-secondary' },
                      { label: 'User Satisfaction', value: '4.8/5', icon: 'Star', color: 'text-warning' }
                    ]?.map((metric, index) => (
                      <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                        <Icon name={metric?.icon} size={32} className={`${metric?.color} mx-auto mb-3`} />
                        <div className="text-2xl font-bold text-foreground mb-1">{metric?.value}</div>
                        <div className="text-sm text-muted-foreground">{metric?.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border">
                    <h4 className="font-heading font-bold text-lg text-foreground mb-4">Impact Analysis</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-foreground">User Experience Enhancement</h5>
                          <p className="text-sm text-muted-foreground">AI-powered personalization increased user engagement by 185% and reduced bounce rate by 43%</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-foreground">Performance Optimization</h5>
                          <p className="text-sm text-muted-foreground">WebGL implementation with lazy loading achieved 95+ Lighthouse scores across all metrics</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-foreground">Business Impact</h5>
                          <p className="text-sm text-muted-foreground">Generated $2.3M additional revenue through improved conversion funnels and AI recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Calendar" size={16} />
              <span>Completed: {project?.completedDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} />
              <span>Duration: {project?.duration}</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Close Demo
            </Button>
            <Button variant="default" className="cosmic-button" iconName="ExternalLink" iconPosition="right">
              View Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoModal;