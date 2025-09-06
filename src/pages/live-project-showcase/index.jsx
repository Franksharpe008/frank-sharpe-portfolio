import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import LiveDemoModal from './components/LiveDemoModal';
import TailorBytezSection from './components/TailorBytezSection';
import WebGLExperiments from './components/WebGLExperiments';

const LiveProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "AI-Enhanced E-commerce Platform",
      type: "AI Enhanced",
      category: "ai-enhanced",
      description: `Revolutionary e-commerce experience powered by GPT-4 for personalized product recommendations, dynamic pricing optimization, and intelligent customer support. Features include real-time inventory management, AI-generated product descriptions, and predictive analytics for demand forecasting.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      hasLiveDemo: true,
      technologies: [
        { name: "React 18", icon: "Atom" },
        { name: "OpenAI GPT-4", icon: "Brain" },
        { name: "Node.js", icon: "Server" },
        { name: "MongoDB", icon: "Database" }
      ],
      metrics: [
        { label: "Conversion Rate", value: "+89%" },
        { label: "User Engagement", value: "+156%" },
        { label: "Revenue Impact", value: "$2.3M" }
      ],
      highlights: [
        "AI-powered product recommendations",
        "Real-time personalization engine",
        "Automated customer support",
        "Predictive inventory management"
      ],
      demoFeatures: [
        { name: "Smart Search", icon: "Search", description: "AI-powered product discovery" },
        { name: "Price Optimization", icon: "DollarSign", description: "Dynamic pricing algorithms" },
        { name: "Chat Assistant", icon: "MessageCircle", description: "GPT-4 customer support" }
      ],
      completedDate: "March 2024",
      duration: "4 months"
    },
    {
      id: 2,
      title: "3D Data Visualization Dashboard",
      type: "WebGL/3D",
      category: "webgl",
      description: `Immersive 3D dashboard for complex data visualization using Three.js and WebGL shaders. Features interactive data exploration, real-time updates, and customizable visualization modes. Optimized for performance with 60fps rendering and GPU acceleration.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      hasLiveDemo: true,
      technologies: [
        { name: "Three.js", icon: "Box" },
        { name: "WebGL", icon: "Zap" },
        { name: "D3.js", icon: "BarChart3" },
        { name: "React", icon: "Atom" }
      ],
      metrics: [
        { label: "Performance", value: "60 FPS" },
        { label: "Data Points", value: "1M+" },
        { label: "Load Time", value: "< 2s" }
      ],
      highlights: [
        "Real-time 3D data rendering",
        "Interactive exploration tools",
        "GPU-accelerated performance",
        "Responsive design optimization"
      ],
      demoFeatures: [
        { name: "3D Rendering", icon: "Box", description: "WebGL-powered visualizations" },
        { name: "Real-time Data", icon: "Activity", description: "Live data streaming" },
        { name: "Interactive Controls", icon: "MousePointer", description: "Intuitive navigation" }
      ],
      completedDate: "February 2024",
      duration: "3 months"
    },
    {
      id: 3,
      title: "Smart Healthcare Platform",
      type: "Data Visualization",
      category: "data-viz",
      description: `Comprehensive healthcare analytics platform with AI-driven insights, patient data visualization, and predictive health modeling. Features secure data handling, HIPAA compliance, and intuitive interfaces for medical professionals.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      hasLiveDemo: false,
      technologies: [
        { name: "React", icon: "Atom" },
        { name: "D3.js", icon: "BarChart3" },
        { name: "TensorFlow", icon: "Brain" },
        { name: "PostgreSQL", icon: "Database" }
      ],
      metrics: [
        { label: "Patient Outcomes", value: "+34%" },
        { label: "Diagnosis Speed", value: "+67%" },
        { label: "Cost Reduction", value: "28%" }
      ],
      highlights: [
        "HIPAA-compliant architecture",
        "Predictive health analytics",
        "Real-time patient monitoring",
        "Intuitive medical interfaces"
      ],
      demoFeatures: [
        { name: "Patient Analytics", icon: "Users", description: "Comprehensive health insights" },
        { name: "Predictive Models", icon: "TrendingUp", description: "AI-powered predictions" },
        { name: "Secure Data", icon: "Shield", description: "HIPAA-compliant security" }
      ],
      completedDate: "January 2024",
      duration: "6 months"
    },
    {
      id: 4,
      title: "TailorBytez Client Portal",
      type: "TailorBytez",
      category: "tailorbytez",
      description: `Comprehensive client management platform for TailorBytez with project tracking, real-time collaboration tools, and automated reporting. Features include client onboarding, project milestones, and performance analytics.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      hasLiveDemo: true,
      technologies: [
        { name: "React", icon: "Atom" },
        { name: "Node.js", icon: "Server" },
        { name: "Socket.io", icon: "Wifi" },
        { name: "MongoDB", icon: "Database" }
      ],
      metrics: [
        { label: "Client Satisfaction", value: "99%" },
        { label: "Project Efficiency", value: "+45%" },
        { label: "Communication", value: "+78%" }
      ],
      highlights: [
        "Real-time collaboration tools",
        "Automated project reporting",
        "Client satisfaction tracking",
        "Integrated communication hub"
      ],
      demoFeatures: [
        { name: "Project Tracking", icon: "CheckSquare", description: "Real-time progress updates" },
        { name: "Team Collaboration", icon: "Users", description: "Seamless team communication" },
        { name: "Analytics Dashboard", icon: "BarChart3", description: "Performance insights" }
      ],
      completedDate: "December 2023",
      duration: "2 months"
    },
    {
      id: 5,
      title: "Fintech Trading Interface",
      type: "E-commerce",
      category: "ecommerce",
      description: `Advanced trading platform with real-time market data, AI-powered trading suggestions, and risk management tools. Features include portfolio optimization, automated trading strategies, and comprehensive market analysis.`,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      hasLiveDemo: true,
      technologies: [
        { name: "React", icon: "Atom" },
        { name: "WebSocket", icon: "Wifi" },
        { name: "Chart.js", icon: "BarChart3" },
        { name: "Python", icon: "Code" }
      ],
      metrics: [
        { label: "Trading Volume", value: "+234%" },
        { label: "User Retention", value: "94%" },
        { label: "Profit Margin", value: "+67%" }
      ],
      highlights: [
        "Real-time market data streaming",
        "AI-powered trading insights",
        "Advanced risk management",
        "Mobile-optimized interface"
      ],
      demoFeatures: [
        { name: "Live Trading", icon: "TrendingUp", description: "Real-time market execution" },
        { name: "AI Insights", icon: "Brain", description: "Machine learning predictions" },
        { name: "Risk Management", icon: "Shield", description: "Automated risk controls" }
      ],
      completedDate: "November 2023",
      duration: "5 months"
    },
    {
      id: 6,
      title: "Interactive Learning Platform",
      type: "AI Enhanced",
      category: "ai-enhanced",
      description: `Personalized learning platform with AI-driven content adaptation, progress tracking, and interactive exercises. Features include adaptive learning paths, real-time feedback, and gamification elements.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      hasLiveDemo: false,
      technologies: [
        { name: "React", icon: "Atom" },
        { name: "OpenAI", icon: "Brain" },
        { name: "Firebase", icon: "Database" },
        { name: "WebRTC", icon: "Video" }
      ],
      metrics: [
        { label: "Learning Outcomes", value: "+89%" },
        { label: "Engagement", value: "+156%" },
        { label: "Completion Rate", value: "87%" }
      ],
      highlights: [
        "Adaptive learning algorithms",
        "Personalized content delivery",
        "Real-time progress tracking",
        "Interactive multimedia content"
      ],
      demoFeatures: [
        { name: "Adaptive Learning", icon: "Brain", description: "AI-powered personalization" },
        { name: "Progress Tracking", icon: "TrendingUp", description: "Real-time analytics" },
        { name: "Interactive Content", icon: "Play", description: "Engaging multimedia" }
      ],
      completedDate: "October 2023",
      duration: "4 months"
    }
  ];

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects?.filter(project => project?.category === activeFilter));
    }
  }, [activeFilter]);

  // Calculate project counts for filters
  const projectCounts = {
    all: projects?.length,
    aiEnhanced: projects?.filter(p => p?.category === 'ai-enhanced')?.length,
    webgl: projects?.filter(p => p?.category === 'webgl')?.length,
    ecommerce: projects?.filter(p => p?.category === 'ecommerce')?.length,
    dataViz: projects?.filter(p => p?.category === 'data-viz')?.length,
    tailorbytez: projects?.filter(p => p?.category === 'tailorbytez')?.length
  };

  const handleViewDemo = (project) => {
    setSelectedProject(project);
    setIsDemoModalOpen(true);
  };

  const handleViewCase = (project) => {
    // Navigate to detailed case study
    console.log('View case study for:', project?.title);
  };

  return (
    <>
      <Helmet>
        <title>Live Project Showcase - Frank Sharpe | AI-Enhanced Design Portfolio</title>
        <meta name="description" content="Interactive gallery of Frank Sharpe's most impactful AI-enhanced projects with live demonstrations, case studies, and measurable business results. Featuring WebGL experiments, TailorBytez client transformations, and cutting-edge web applications." />
        <meta name="keywords" content="AI design portfolio, WebGL projects, React applications, TailorBytez, interactive demos, case studies, Frank Sharpe" />
        <meta property="og:title" content="Live Project Showcase - Frank Sharpe Portfolio" />
        <meta property="og:description" content="Explore interactive demonstrations of AI-enhanced projects with measurable business impact and technical innovation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/live-project-showcase" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-cosmic-primary/10 via-background to-cosmic-secondary/10 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-2 h-2 bg-cosmic-accent rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-cosmic-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cosmic-trust rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cosmic-primary rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-cosmic-primary rounded-2xl flex items-center justify-center">
                <Icon name="Layers" size={40} className="text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground">
                  Live Project
                  <span className="block text-cosmic-accent">Showcase</span>
                </h1>
                <p className="text-cosmic-secondary font-semibold text-lg">Interactive Demonstrations & Case Studies</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Explore my most impactful work through interactive demonstrations, detailed case studies, 
              and measurable business results. Each project showcases the intersection of AI innovation, 
              technical excellence, and user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                className="cosmic-button"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
              >
                Start Interactive Tour
              </Button>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span>6 Featured Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-cosmic-accent" />
                  <span>Live Demonstrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-cosmic-secondary" />
                  <span>Measurable Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filter */}
              <div className="lg:col-span-1">
                <ProjectFilter
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                  projectCounts={projectCounts}
                />
              </div>

              {/* Projects Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">
                      {activeFilter === 'all' ? 'All Projects' : 
                       activeFilter === 'ai-enhanced' ? 'AI Enhanced Projects' :
                       activeFilter === 'webgl' ? 'WebGL/3D Projects' :
                       activeFilter === 'ecommerce' ? 'E-commerce Projects' :
                       activeFilter === 'data-viz'? 'Data Visualization' : 'TailorBytez Projects'}
                    </h2>
                    <p className="text-muted-foreground">
                      {filteredProjects?.length} project{filteredProjects?.length !== 1 ? 's' : ''} found
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Filter" size={16} />
                    <span>Filtered by: {activeFilter === 'all' ? 'All Categories' : activeFilter}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onViewDemo={handleViewDemo}
                      onViewCase={handleViewCase}
                    />
                  ))}
                </div>

                {filteredProjects?.length === 0 && (
                  <div className="text-center py-16">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      No projects found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your filter to see more projects.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setActiveFilter('all')}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* TailorBytez Section */}
        <TailorBytezSection />

        {/* WebGL Experiments */}
        <WebGLExperiments />

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-cosmic-primary via-cosmic-secondary to-cosmic-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-white">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-cosmic-text-secondary mb-8">
                Let's collaborate on your next AI-enhanced project. From concept to deployment, 
                I'll help you create experiences that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-cosmic-accent hover:bg-cosmic-accent/90 text-white"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start a Conversation
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Modal */}
        <LiveDemoModal
          project={selectedProject}
          isOpen={isDemoModalOpen}
          onClose={() => {
            setIsDemoModalOpen(false);
            setSelectedProject(null);
          }}
        />
      </div>
    </>
  );
};

export default LiveProjectShowcase;
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Modal */}
        <LiveDemoModal
          project={selectedProject}
          isOpen={isDemoModalOpen}
          onClose={() => {
            setIsDemoModalOpen(false);
            setSelectedProject(null);
          }}
        />
      </div>
    </>
  );
};

export default LiveProjectShowcase;