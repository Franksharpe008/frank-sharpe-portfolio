import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    { value: 'ai-integration', label: 'AI Integration & Design' },
    { value: 'web-development', label: 'Web Development & UX' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'speaking', label: 'Speaking Engagement' },
    { value: 'collaboration', label: 'Partnership/Collaboration' },
    { value: 'interview', label: 'Interview/Job Opportunity' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-2weeks', label: '1-2 Weeks' },
    { value: '1month', label: '1 Month' },
    { value: '2-3months', label: '2-3 Months' },
    { value: '6months', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: '',
        priority: 'normal'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-12 shadow-layered text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for reaching out! I've received your message and will respond within 24 hours. 
              For urgent matters, feel free to call directly at (512) 555-0147.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                className="cosmic-button"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => setSubmitStatus(null)}
              >
                Send Another Message
              </Button>
              
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell me about your project, timeline, and goals. I'll respond with insights, 
            recommendations, and next steps tailored to your specific needs.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-layered">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Your name"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />
            </div>

            <Input
              label="Company/Organization"
              type="text"
              placeholder="Your company name (optional)"
              value={formData?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
            />

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Project Type"
                placeholder="Select project type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                required
              />
              <Select
                label="Timeline"
                placeholder="Project timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
              />
              <Select
                label="Budget Range"
                placeholder="Budget estimate"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details & Goals
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-cosmic-primary focus:border-transparent resize-none"
                rows={6}
                placeholder="Tell me about your project goals, technical requirements, target audience, and any specific AI integration needs. The more details you provide, the better I can tailor my response to your needs."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                required
              />
              <p className="text-xs text-muted-foreground mt-2">
                Minimum 50 characters. Include technical requirements, design preferences, and success metrics.
              </p>
            </div>

            {/* Priority Level */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-4 flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Response Priority
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: 'normal', label: 'Standard', desc: '24-48 hours', color: 'blue' },
                  { value: 'high', label: 'High Priority', desc: '< 24 hours', color: 'orange' },
                  { value: 'urgent', label: 'Urgent', desc: '< 4 hours', color: 'red' }
                ]?.map((priority) => (
                  <label
                    key={priority?.value}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      formData?.priority === priority?.value
                        ? 'border-cosmic-primary bg-cosmic-primary/5' :'border-border hover:border-cosmic-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={priority?.value}
                      checked={formData?.priority === priority?.value}
                      onChange={(e) => handleInputChange('priority', e?.target?.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      formData?.priority === priority?.value
                        ? 'border-cosmic-primary bg-cosmic-primary' :'border-muted-foreground'
                    }`}>
                      {formData?.priority === priority?.value && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">{priority?.label}</div>
                      <div className="text-xs text-muted-foreground">{priority?.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                className="cosmic-button flex-1"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                disabled={!formData?.name || !formData?.email || !formData?.message}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
              <Button
                type="button"
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/frank-sharpe', '_blank')}
              >
                Schedule Call Instead
              </Button>
            </div>

            {/* Form Footer */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree to receive communications about your inquiry. 
                Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;ree to receive communications about your inquiry. 
                Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;