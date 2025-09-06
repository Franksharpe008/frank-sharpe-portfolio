import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WebGLExperiments = () => {
  const [activeExperiment, setActiveExperiment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef(null);

  const experiments = [
    {
      id: 1,
      title: "Cosmic Particle System",
      description: "Real-time 3D particle simulation with AI-generated movement patterns",
      technology: "Three.js + WebGL Shaders",
      complexity: "Advanced",
      features: ["10,000+ particles", "GPU acceleration", "Real-time physics", "AI behavior patterns"],
      codeSnippet: `// Particle System with AI Behavior
const particleSystem = new THREE.Points(geometry, material);
const aiController = new AIParticleController({
  particles: 10000,
  behaviorModel: 'flocking-v2',
  interactionRadius: 50
});`,
      demoColor: "from-cosmic-primary to-cosmic-accent"
    },
    {
      id: 2,
      title: "Interactive Data Sculpture",
      description: "3D data visualization that morphs based on real-time analytics",
      technology: "D3.js + Three.js Integration",
      complexity: "Expert",
      features: ["Real-time data binding", "Morphing geometries", "Interactive controls", "Performance optimized"],
      codeSnippet: `// Data-Driven 3D Sculpture
const dataSculpture = new DataSculpture({
  data: analyticsStream,
  morphSpeed: 0.02,
  interactionMode: 'hover-transform'
});`,
      demoColor: "from-cosmic-secondary to-cosmic-trust"
    },
    {
      id: 3,
      title: "AI-Generated Landscapes",
      description: "Procedural terrain generation using machine learning algorithms",
      technology: "WebGL + TensorFlow.js",
      complexity: "Expert",
      features: ["ML terrain generation", "Infinite scrolling", "Weather simulation", "Biome transitions"],
      codeSnippet: `// AI Landscape Generator
const landscapeAI = new TerrainGenerator({
  model: 'landscape-gan-v3',
  resolution: 1024,
  biomeTransitions: true
});`,
      demoColor: "from-cosmic-trust to-cosmic-secondary"
    }
  ];

  // Mock WebGL animation
  useEffect(() => {
    if (!canvasRef?.current) return;

    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext('2d');
    let animationId;
    let time = 0;

    const animate = () => {
      if (!isPlaying) return;

      time += 0.02;
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);

      // Create animated background
      const gradient = ctx?.createRadialGradient(
        canvas?.width / 2, canvas?.height / 2, 0,
        canvas?.width / 2, canvas?.height / 2, Math.max(canvas?.width, canvas?.height) / 2
      );
      gradient?.addColorStop(0, `hsla(${(time * 50) % 360}, 70%, 60%, 0.8)`);
      gradient?.addColorStop(1, `hsla(${(time * 30 + 180) % 360}, 70%, 30%, 0.3)`);
      
      ctx.fillStyle = gradient;
      ctx?.fillRect(0, 0, canvas?.width, canvas?.height);

      // Animated particles
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time + i * 0.5) * 100) + canvas?.width / 2;
        const y = (Math.cos(time * 0.7 + i * 0.3) * 80) + canvas?.height / 2;
        const size = Math.sin(time * 2 + i) * 3 + 5;

        ctx?.beginPath();
        ctx?.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(time * 100 + i * 10) % 360}, 80%, 70%, 0.8)`;
        ctx?.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animate();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPlaying]);

  const currentExperiment = experiments?.[activeExperiment];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-cosmic-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cosmic-accent to-cosmic-secondary rounded-2xl flex items-center justify-center">
              <Icon name="Box" size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-heading font-bold text-foreground">WebGL Laboratory</h2>
              <p className="text-cosmic-accent font-semibold">Interactive 3D Experiments</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pushing the boundaries of web technology with real-time 3D graphics, 
            AI-powered animations, and interactive experiences that showcase technical mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experiment List */}
          <div className="space-y-4">
            {experiments?.map((experiment, index) => (
              <button
                key={experiment?.id}
                onClick={() => setActiveExperiment(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeExperiment === index
                    ? 'bg-cosmic-primary text-white shadow-cosmic'
                    : 'bg-card hover:bg-muted text-foreground'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-lg">{experiment?.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeExperiment === index
                      ? 'bg-cosmic-accent text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    {experiment?.complexity}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${
                  activeExperiment === index ? 'text-cosmic-text-secondary' : 'text-muted-foreground'
                }`}>
                  {experiment?.description}
                </p>
                <div className={`text-xs font-mono ${
                  activeExperiment === index ? 'text-cosmic-accent' : 'text-muted-foreground'
                }`}>
                  {experiment?.technology}
                </div>
              </button>
            ))}
          </div>

          {/* Main Demo Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Demo Canvas */}
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-layered">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentExperiment?.demoColor} opacity-20`}></div>
              <canvas
                ref={canvasRef}
                width={600}
                height={400}
                className="w-full h-80 relative z-10"
              />
              
              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Button
                  variant="default"
                  size="lg"
                  className={`cosmic-button transition-opacity duration-300 ${
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}
                  iconName={isPlaying ? "Pause" : "Play"}
                  iconSize={24}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? 'Pause Demo' : 'Start Demo'}
                </Button>
              </div>

              {/* Demo Info Overlay */}
              <div className="absolute top-4 left-4 right-4 z-20">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                  <h3 className="font-heading font-bold text-lg mb-2">{currentExperiment?.title}</h3>
                  <p className="text-sm opacity-90">{currentExperiment?.description}</p>
                </div>
              </div>
            </div>

            {/* Experiment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features */}
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="font-heading font-bold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Sparkles" size={20} className="text-cosmic-accent" />
                  <span>Key Features</span>
                </h4>
                <ul className="space-y-2">
                  {currentExperiment?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Preview */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-bold text-white flex items-center space-x-2">
                    <Icon name="Code" size={20} className="text-cosmic-accent" />
                    <span>Implementation</span>
                  </h4>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                  {currentExperiment?.codeSnippet}
                </pre>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h4 className="font-heading font-bold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="Activity" size={20} className="text-cosmic-primary" />
                <span>Performance Metrics</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success mb-1">60 FPS</div>
                  <div className="text-xs text-muted-foreground">Frame Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cosmic-accent mb-1">&lt; 50ms</div>
                  <div className="text-xs text-muted-foreground">Render Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cosmic-secondary mb-1">GPU</div>
                  <div className="text-xs text-muted-foreground">Accelerated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cosmic-primary mb-1">WebGL 2.0</div>
                  <div className="text-xs text-muted-foreground">Technology</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="cosmic-button flex-1"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Full Experiment
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                iconName="Github"
                iconPosition="right"
              >
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebGLExperiments;