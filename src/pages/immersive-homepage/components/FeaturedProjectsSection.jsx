import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "Scalable Digital Ecosystems for Small Businesses",
      category: "Business Technology",
      description: "Building scalable digital ecosystems, powered by AI, automation, and beautiful front-end experiences that work while you sleep. From logo and branding packages to complete front-end and backend web solutions.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop",
      technologies: ["Zapier", "Make", "Groq", "DeepAgent", "MongoDB", "Supabase", "Firebase", "Stripe"],
      impact: {
        metric: "Client Growth",
        value: "10x",
        description: "Helping small businesses and creators break through the noise and scale with precision."
      },
      demoUrl: "/live-project-showcase",
      isInteractive: true,
      status: "Live Demo Available"
    },
    {
      id: 2,
      title: "Personalized Wealth-Building Strategies",
      category: "FinTech",
      description: "Guiding individuals and families toward real-time financial freedom through personalized wealth-building strategies using a proprietary 7-step Financial Needs Analysis (FNA).",
      image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&h=600&fit=crop",
      technologies: ["Financial Needs Analysis (FNA)", "CRM Automation", "Lead-Gen Pipelines"],
      impact: {
        metric: "Debt Elimination",
        value: "90%",
        description: "Helping clients to eliminate debt, secure income, and create actionable plans."
      },
      demoUrl: "/live-project-showcase",
      isInteractive: true,
      status: "Interactive Demo"
    },
    {
      id: 3,
      title: "Equipment Technology and Maintenance",
      category: "Industrial Technology",
      description: "Worked as an Equipment Technology Technician, ensuring the effective operation of broadcast systems, troubleshooting issues to minimize downtime, and completing emergency fixes.",
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&h=600&fit=crop",
      technologies: ["Broadcast Systems", "Data Entry", "Equipment Maintenance", "Quality Control"],
      impact: {
        metric: "Downtime Reduction",
        value: "75%",
        description: "Minimized downtime by quickly resolving issues with broadcast systems."
      },
      demoUrl: "/live-project-showcase",
      isInteractive: true,
      status: "Case Study Available"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cosmic-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-cosmic-trust rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cosmic-accent/10 text-cosmic-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Interactive Project Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore live demonstrations of AI-enhanced experiences and creative technology solutions that deliver measurable business impact.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featuredProjects?.map((project, index) => (
            <button
              key={project?.id}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeProject === index
                  ? 'bg-cosmic-primary text-white shadow-cosmic'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              {project?.category}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-layered">
              <Image
                src={featuredProjects?.[activeProject]?.image}
                alt={featuredProjects?.[activeProject]?.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <Icon name="Play" size={16} />
                    <span className="text-sm font-medium">
                      {featuredProjects?.[activeProject]?.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-cosmic-accent text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-cosmic-accent text-sm font-medium mb-2">
                <Icon name="Layers" size={16} />
                <span>{featuredProjects?.[activeProject]?.category}</span>
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                {featuredProjects?.[activeProject]?.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredProjects?.[activeProject]?.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {featuredProjects?.[activeProject]?.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-foreground text-sm rounded-lg border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                    {featuredProjects?.[activeProject]?.impact?.metric}
                  </h4>
                  <div className="text-2xl font-heading font-bold text-cosmic-accent">
                    {featuredProjects?.[activeProject]?.impact?.value}
                  </div>
                </div>
                <Icon name="TrendingUp" size={32} className="text-cosmic-trust" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {featuredProjects?.[activeProject]?.impact?.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={featuredProjects?.[activeProject]?.demoUrl} className="flex-1">
                <Button
                  variant="default"
                  className="w-full bg-cosmic-accent hover:bg-cosmic-accent/90 text-white font-heading font-semibold"
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={16}
                >
                  View Live Demo
                </Button>
              </Link>
              <Link to="/live-project-showcase" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-cosmic-primary text-cosmic-primary hover:bg-cosmic-primary/10 font-heading font-semibold"
                  iconName="FileText"
                  iconPosition="right"
                  iconSize={16}
                >
                  Read Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Link to="/live-project-showcase">
            <Button
              variant="outline"
              className="border-2 border-cosmic-primary text-cosmic-primary hover:bg-cosmic-primary hover:text-white font-heading font-semibold px-8 py-4 text-lg transition-all duration-300"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={20}
            >
              Explore All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;