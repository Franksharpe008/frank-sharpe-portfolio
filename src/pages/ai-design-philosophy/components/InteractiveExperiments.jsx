import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveExperiments = () => {
  const [activeExperiment, setActiveExperiment] = useState('design-critique');
  const [designInput, setDesignInput] = useState('');
  const [accessibilityUrl, setAccessibilityUrl] = useState('');
  const [critiqueResult, setCritiqueResult] = useState('');
  const [accessibilityResult, setAccessibilityResult] = useState('');

  const experiments = [
    {
      id: 'design-critique',
      title: 'AI Design Critique Tool',
      description: 'Get instant feedback on your design decisions using AI-powered analysis',
      icon: 'MessageSquare',
      color: 'cosmic-accent'
    },
    {
      id: 'accessibility-checker',
      title: 'AI Accessibility Checker',
      description: 'Analyze your interface for accessibility improvements with AI insights',
      icon: 'Eye',
      color: 'cosmic-trust'
    },
    {
      id: 'color-harmony',
      title: 'Color Harmony Generator',
      description: 'Generate accessible color palettes using AI color theory',
      icon: 'Palette',
      color: 'cosmic-secondary'
    }
  ];

  const handleDesignCritique = () => {
    if (!designInput?.trim()) return;
    
    // Mock AI response
    const mockResponses = [
      "Your design shows strong visual hierarchy with the large heading and clear CTA placement. Consider increasing the contrast ratio for the secondary text to meet WCAG AA standards. The color palette creates good emotional resonance, but adding more whitespace around key elements would improve scannability.",
      "Excellent use of progressive disclosure in your interface. The information architecture flows logically from general to specific. However, the button sizes might be too small for mobile touch targets - consider increasing to at least 44px. The typography choices support readability well.",
      "Your layout demonstrates good understanding of F-pattern scanning behavior. The visual weight distribution guides attention effectively. Consider adding loading states for better perceived performance, and ensure all interactive elements have clear hover/focus states for accessibility."
    ];
    
    setCritiqueResult(mockResponses?.[Math.floor(Math.random() * mockResponses?.length)]);
  };

  const handleAccessibilityCheck = () => {
    if (!accessibilityUrl?.trim()) return;
    
    // Mock accessibility analysis
    const mockResults = [
      "Accessibility Score: 87/100\n\n✅ Good color contrast ratios\n✅ Proper heading hierarchy\n✅ Alt text present on images\n\n⚠️ Missing focus indicators on custom buttons\n⚠️ Form labels could be more descriptive\n⚠️ Consider adding skip navigation links",
      "Accessibility Score: 92/100\n\n✅ Excellent keyboard navigation\n✅ Screen reader friendly structure\n✅ Proper ARIA labels\n\n⚠️ Some interactive elements lack sufficient touch targets\n⚠️ Color-only information in charts needs text alternatives",
      "Accessibility Score: 78/100\n\n✅ Good semantic HTML structure\n✅ Responsive design works well\n\n⚠️ Low contrast on secondary text\n⚠️ Missing error message associations\n⚠️ Auto-playing content needs user controls"
    ];
    
    setAccessibilityResult(mockResults?.[Math.floor(Math.random() * mockResults?.length)]);
  };

  const generateColorPalette = () => {
    // Mock color generation
    const palettes = [
      ['#1a1b3a', '#2d3561', '#ff6b35', '#00d9ff', '#4ecdc4'],
      ['#2d1b69', '#4a3c8a', '#ff3366', '#00ff88', '#ffd700'],
      ['#0a0a0f', '#1e1e2e', '#ff6b9d', '#4ecdc4', '#45b7d1']
    ];
    
    return palettes?.[Math.floor(Math.random() * palettes?.length)];
  };

  const [generatedPalette, setGeneratedPalette] = useState(generateColorPalette());

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Interactive AI Experiments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience my AI design principles firsthand through these interactive tools that demonstrate practical applications of AI in design workflows.
          </p>
        </motion.div>

        {/* Experiment Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {experiments?.map((experiment) => (
            <button
              key={experiment?.id}
              onClick={() => setActiveExperiment(experiment?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeExperiment === experiment?.id
                  ? 'bg-cosmic-primary text-white shadow-cosmic'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon 
                name={experiment?.icon} 
                size={20} 
                className={activeExperiment === experiment?.id ? `text-${experiment?.color}` : ''} 
              />
              <span className="hidden sm:inline">{experiment?.title}</span>
              <span className="sm:hidden">{experiment?.title?.split(' ')?.[0]}</span>
            </button>
          ))}
        </div>

        {/* Experiment Content */}
        <div className="max-w-4xl mx-auto">
          {activeExperiment === 'design-critique' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-subtle border border-border"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cosmic-accent/10 rounded-xl flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-cosmic-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    AI Design Critique Tool
                  </h3>
                  <p className="text-muted-foreground">
                    Describe your design and get AI-powered feedback
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Describe your design or paste a design brief:
                  </label>
                  <textarea
                    value={designInput}
                    onChange={(e) => setDesignInput(e?.target?.value)}
                    placeholder="e.g., I'm designing a mobile app landing page with a hero section, feature cards, and a call-to-action button. The color scheme is blue and white with orange accents..."
                    className="w-full h-32 px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cosmic-accent focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  onClick={handleDesignCritique}
                  disabled={!designInput?.trim()}
                  className="cosmic-button"
                  iconName="Sparkles"
                  iconPosition="left"
                >
                  Get AI Critique
                </Button>

                {critiqueResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-cosmic-accent/5 rounded-xl p-6 border border-cosmic-accent/20"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon name="Bot" size={20} className="text-cosmic-accent mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-2">AI Design Analysis</h4>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {critiqueResult}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeExperiment === 'accessibility-checker' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-subtle border border-border"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cosmic-trust/10 rounded-xl flex items-center justify-center">
                  <Icon name="Eye" size={24} className="text-cosmic-trust" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    AI Accessibility Checker
                  </h3>
                  <p className="text-muted-foreground">
                    Analyze your interface for accessibility improvements
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Enter website URL or describe your interface:
                  </label>
                  <input
                    type="text"
                    value={accessibilityUrl}
                    onChange={(e) => setAccessibilityUrl(e?.target?.value)}
                    placeholder="https://example.com or describe your interface design"
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cosmic-trust focus:border-transparent"
                  />
                </div>

                <Button
                  onClick={handleAccessibilityCheck}
                  disabled={!accessibilityUrl?.trim()}
                  className="bg-cosmic-trust hover:bg-cosmic-trust/90 text-white"
                  iconName="Search"
                  iconPosition="left"
                >
                  Analyze Accessibility
                </Button>

                {accessibilityResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-cosmic-trust/5 rounded-xl p-6 border border-cosmic-trust/20"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-cosmic-trust mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-2">Accessibility Report</h4>
                        <pre className="text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans text-sm">
                          {accessibilityResult}
                        </pre>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeExperiment === 'color-harmony' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-subtle border border-border"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cosmic-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Palette" size={24} className="text-cosmic-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Color Harmony Generator
                  </h3>
                  <p className="text-muted-foreground">
                    Generate accessible color palettes using AI color theory
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-5 gap-4">
                  {generatedPalette?.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-full h-20 rounded-xl shadow-subtle border border-border mb-2"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs font-mono text-muted-foreground">{color}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setGeneratedPalette(generateColorPalette())}
                    className="bg-cosmic-secondary hover:bg-cosmic-secondary/90 text-white"
                    iconName="Shuffle"
                    iconPosition="left"
                  >
                    Generate New Palette
                  </Button>
                  
                  <Button
                    variant="outline"
                    iconName="Copy"
                    iconPosition="left"
                  >
                    Copy CSS Variables
                  </Button>
                </div>

                <div className="bg-cosmic-secondary/5 rounded-xl p-4 border border-cosmic-secondary/20">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-cosmic-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">AI Color Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        This palette maintains WCAG AA contrast ratios while creating visual harmony through complementary color relationships. The primary colors establish trust and professionalism, while accent colors add energy and guide user attention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Experiment Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-cosmic-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-cosmic-accent" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">2,500+</h3>
            <p className="text-muted-foreground">Designers using these tools</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cosmic-trust/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={32} className="text-cosmic-trust" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">15,000+</h3>
            <p className="text-muted-foreground">AI analyses completed</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cosmic-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={32} className="text-cosmic-secondary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">94%</h3>
            <p className="text-muted-foreground">Accuracy in recommendations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveExperiments;