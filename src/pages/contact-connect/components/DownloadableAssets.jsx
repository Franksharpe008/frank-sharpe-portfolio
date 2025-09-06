import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableAssets = () => {
  const downloadableAssets = [
    {
      title: 'Professional Resume',
      description: 'Comprehensive CV highlighting AI design expertise, technical skills, and career achievements.',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      lastUpdated: 'January 2025',
      icon: 'FileText',
      color: 'cosmic-accent',
      downloadUrl: '/Resume and portfolio (1).docx',
      preview: 'Includes detailed project outcomes, technical proficiencies, and quantified impact metrics.'
    }
  ];

  const handleDownload = (asset) => {
    // Simulate download tracking
    console.log(`Downloading: ${asset?.title}`);
    
    // In a real application, this would trigger the actual download
    // For demo purposes, we'll show an alert
    alert(`Download started: ${asset?.title}\n\nIn a real application, this would download the file from: ${asset?.downloadUrl}`);
  };

  const handleRequestCustom = () => {
    const subject = encodeURIComponent('Custom Asset Request');
    const body = encodeURIComponent(`Hi Frank,

I'd like to request a custom asset or additional information for:

[ ] Specific project case study
[ ] Technical documentation
[ ] Speaking engagement materials
[ ] Other: _______________

Please let me know what additional information you can provide.

Best regards,`);
    
    window.location.href = `mailto:frank@tailorbytez.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Professional Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download comprehensive materials for hiring managers, event organizers, 
            and collaboration partners. All assets are regularly updated and professionally formatted.
          </p>
        </div>

        {/* Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {downloadableAssets?.map((asset, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-layered transition-all duration-300 border border-border group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-${asset?.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    name={asset?.icon} 
                    size={24} 
                    className={`text-${asset?.color}`}
                  />
                </div>
                <div className="text-right">
                  <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                    {asset?.fileType}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {asset?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {asset?.description}
              </p>

              {/* Preview */}
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-muted-foreground">{asset?.preview}</p>
              </div>

              {/* File Details */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Icon name="Download" size={12} className="mr-1" />
                    {asset?.fileSize}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Calendar" size={12} className="mr-1" />
                    {asset?.lastUpdated}
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-cosmic-primary group-hover:text-white group-hover:border-cosmic-primary transition-all duration-300"
                iconName="Download"
                iconPosition="left"
                onClick={() => handleDownload(asset)}
              >
                Download {asset?.fileType}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Custom Request */}
          <div className="bg-gradient-to-r from-cosmic-primary/5 to-cosmic-accent/5 rounded-2xl p-8 border border-cosmic-primary/20">
            <div className="text-center">
              <Icon name="FileQuestion" size={32} className="text-cosmic-accent mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Need Something Specific?
              </h3>
              <p className="text-muted-foreground mb-6">
                Looking for a particular case study, technical documentation, or custom asset? 
                I can provide tailored materials for your specific needs.
              </p>
              <Button
                variant="outline"
                iconName="Mail"
                iconPosition="left"
                onClick={handleRequestCustom}
              >
                Request Custom Asset
              </Button>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Info" size={20} className="text-cosmic-trust mr-2" />
              Usage Guidelines
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Free to use for hiring, speaking, and collaboration purposes</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Please credit Frank Sharpe when sharing or republishing</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Contact for permission before commercial use</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Do not modify or redistribute without permission</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                All materials are updated regularly. For the most current versions, 
                please download directly from this page or contact me directly.
              </p>
            </div>
          </div>
        </div>

        {/* Download Stats */}
        <div className="mt-12 bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Resource Impact
            </h3>
            <p className="text-muted-foreground">
              These resources have helped facilitate meaningful professional connections
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-accent mb-1">2,400+</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-secondary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Hiring Managers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-trust mb-1">45+</div>
              <div className="text-sm text-muted-foreground">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Positive Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadableAssets;
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                All materials are updated regularly. For the most current versions, 
                please download directly from this page or contact me directly.
              </p>
            </div>
          </div>
        </div>

        {/* Download Stats */}
        <div className="mt-12 bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Resource Impact
            </h3>
            <p className="text-muted-foreground">
              These resources have helped facilitate meaningful professional connections
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-accent mb-1">2,400+</div>
              <div className="text-sm text-muted-foreground">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-secondary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Hiring Managers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-trust mb-1">45+</div>
              <div className="text-sm text-muted-foreground">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Positive Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadableAssets;