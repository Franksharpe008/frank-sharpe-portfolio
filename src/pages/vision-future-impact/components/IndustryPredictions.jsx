import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';

const IndustryPredictions = () => {
  const [activeChart, setActiveChart] = useState('adoption');

  const adoptionData = [
    { year: '2024', aiDesignTools: 25, traditionalTools: 75, aiIntegration: 15 },
    { year: '2025', aiDesignTools: 40, traditionalTools: 60, aiIntegration: 30 },
    { year: '2026', aiDesignTools: 55, traditionalTools: 45, aiIntegration: 50 },
    { year: '2027', aiDesignTools: 70, traditionalTools: 30, aiIntegration: 65 },
    { year: '2028', aiDesignTools: 80, traditionalTools: 20, aiIntegration: 78 },
    { year: '2029', aiDesignTools: 88, traditionalTools: 12, aiIntegration: 85 },
    { year: '2030', aiDesignTools: 92, traditionalTools: 8, aiIntegration: 90 }
  ];

  const skillsData = [
    { skill: 'AI Prompt Engineering', current: 15, future: 85, growth: 467 },
    { skill: 'Human-AI Collaboration', current: 20, future: 90, growth: 350 },
    { skill: 'Ethical AI Design', current: 10, future: 75, growth: 650 },
    { skill: 'Data-Driven Design', current: 35, future: 80, growth: 129 },
    { skill: 'Accessibility AI', current: 12, future: 70, growth: 483 },
    { skill: 'Traditional Design', current: 90, future: 40, growth: -56 }
  ];

  const impactData = [
    { sector: 'UX/UI Design', efficiency: 250, creativity: 180, jobs: 120 },
    { sector: 'Product Design', efficiency: 300, creativity: 200, jobs: 140 },
    { sector: 'Brand Design', efficiency: 180, creativity: 220, jobs: 110 },
    { sector: 'Web Design', efficiency: 400, creativity: 160, jobs: 90 },
    { sector: 'App Design', efficiency: 350, creativity: 190, jobs: 130 }
  ];

  const predictions = [
    {
      id: 1,
      timeline: "2025-2026",
      title: "AI Design Assistant Ubiquity",
      description: "Every major design tool will have integrated AI assistants capable of generating, critiquing, and refining design work in real-time.",
      probability: 95,
      impact: "High",
      implications: [
        "Dramatic reduction in routine design tasks",
        "Shift toward strategic and conceptual thinking",
        "New role: AI Design Orchestrator"
      ]
    },
    {
      id: 2,
      timeline: "2026-2027",
      title: "Personalized Design Automation",
      description: "AI systems will automatically generate personalized user interfaces based on individual user behavior, preferences, and accessibility needs.",
      probability: 85,
      impact: "Revolutionary",
      implications: [
        "End of one-size-fits-all interfaces",
        "Privacy and data ethics become critical",
        "New specialization: Personalization Architects"
      ]
    },
    {
      id: 3,
      timeline: "2027-2028",
      title: "Cross-Modal Design Intelligence",
      description: "AI will seamlessly translate design concepts across different mediums—from voice interfaces to visual designs to haptic experiences.",
      probability: 75,
      impact: "High",
      implications: [
        "Unified design languages across all mediums",
        "Accessibility becomes inherently multi-modal",
        "Emergence of Sensory Experience Designers"
      ]
    },
    {
      id: 4,
      timeline: "2028-2030",
      title: "Ethical AI Design Standards",
      description: "Industry-wide adoption of mandatory ethical AI design frameworks, with automated compliance checking and transparency requirements.",
      probability: 90,
      impact: "Foundational",
      implications: [
        "Ethics becomes a core design competency",
        "Regulatory compliance automation",
        "Trust becomes the primary design metric"
      ]
    }
  ];

  const chartConfigs = {
    adoption: {
      title: "AI Tool Adoption in Design",
      subtitle: "Projected market penetration",
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={adoptionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="aiDesignTools" 
              stackId="1" 
              stroke="#FF6B35" 
              fill="#FF6B35" 
              fillOpacity={0.6}
              name="AI Design Tools (%)"
            />
            <Area 
              type="monotone" 
              dataKey="traditionalTools" 
              stackId="1" 
              stroke="#4ECDC4" 
              fill="#4ECDC4" 
              fillOpacity={0.6}
              name="Traditional Tools (%)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )
    },
    skills: {
      title: "Skill Demand Evolution",
      subtitle: "Current vs. Future skill requirements",
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={skillsData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis dataKey="skill" type="category" stroke="#9CA3AF" width={120} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }} 
            />
            <Bar dataKey="current" fill="#6B7280" name="Current Demand (%)" />
            <Bar dataKey="future" fill="#FF6B35" name="Future Demand (%)" />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    impact: {
      title: "Sector Impact Analysis",
      subtitle: "Efficiency gains and job market changes",
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="sector" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="efficiency" 
              stroke="#FF6B35" 
              strokeWidth={3}
              name="Efficiency Gain (%)"
            />
            <Line 
              type="monotone" 
              dataKey="creativity" 
              stroke="#4ECDC4" 
              strokeWidth={3}
              name="Creativity Boost (%)"
            />
            <Line 
              type="monotone" 
              dataKey="jobs" 
              stroke="#00D9FF" 
              strokeWidth={3}
              name="Job Growth (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      )
    }
  };

  return (
    <section className="py-20 bg-cosmic-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-cosmic-accent/20 rounded-full flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-cosmic-accent" />
            </div>
            <span className="text-cosmic-accent font-mono text-sm tracking-wider uppercase">
              Industry Analysis
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cosmic-text-primary mb-6">
            The Future of
            <span className="block text-cosmic-accent">Creative Technology</span>
          </h2>
          <p className="text-xl text-cosmic-text-secondary max-w-3xl mx-auto leading-relaxed">
            Data-driven predictions and strategic insights into how AI will reshape the design industry over the next decade.
          </p>
        </motion.div>

        {/* Interactive Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Chart Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(chartConfigs)?.map(([key, config]) => (
              <button
                key={key}
                onClick={() => setActiveChart(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeChart === key
                    ? 'bg-cosmic-accent text-white shadow-cosmic'
                    : 'bg-cosmic-primary/20 text-cosmic-text-secondary hover:bg-cosmic-primary/30'
                }`}
              >
                {config?.title}
              </button>
            ))}
          </div>

          {/* Chart Display */}
          <motion.div
            key={activeChart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-cosmic-primary/10 rounded-2xl p-8 border border-cosmic-accent/20"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-cosmic-text-primary mb-2">
                {chartConfigs?.[activeChart]?.title}
              </h3>
              <p className="text-cosmic-text-secondary">
                {chartConfigs?.[activeChart]?.subtitle}
              </p>
            </div>
            {chartConfigs?.[activeChart]?.component}
          </motion.div>
        </motion.div>

        {/* Predictions Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-cosmic-text-primary mb-4">
              Strategic Predictions
            </h3>
            <p className="text-cosmic-text-secondary max-w-2xl mx-auto">
              Key industry shifts I'm tracking and preparing for, based on current trends and emerging technologies.
            </p>
          </div>

          <div className="space-y-8">
            {predictions?.map((prediction, index) => (
              <motion.div
                key={prediction?.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cosmic-primary/10 rounded-2xl p-8 border border-cosmic-accent/20"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Timeline & Probability */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-cosmic-accent/20 rounded-full flex items-center justify-center">
                        <Icon name="Clock" size={20} className="text-cosmic-accent" />
                      </div>
                      <div>
                        <div className="text-cosmic-accent font-mono text-sm font-medium">
                          {prediction?.timeline}
                        </div>
                        <div className="text-cosmic-text-secondary text-sm">
                          Timeline
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-cosmic-text-secondary text-sm">Probability</span>
                        <span className="text-cosmic-accent font-bold">{prediction?.probability}%</span>
                      </div>
                      <div className="w-full bg-cosmic-primary/20 rounded-full h-2">
                        <div 
                          className="bg-cosmic-accent h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${prediction?.probability}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      prediction?.impact === 'Revolutionary' ? 'bg-cosmic-accent/20 text-cosmic-accent' :
                      prediction?.impact === 'High'? 'bg-cosmic-trust/20 text-cosmic-trust' : 'bg-cosmic-secondary/20 text-cosmic-secondary'
                    }`}>
                      {prediction?.impact} Impact
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-heading font-bold text-cosmic-text-primary mb-3">
                        {prediction?.title}
                      </h4>
                      <p className="text-cosmic-text-secondary leading-relaxed">
                        {prediction?.description}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-cosmic-accent font-semibold mb-3">Key Implications:</h5>
                      <div className="space-y-2">
                        {prediction?.implications?.map((implication, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-cosmic-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-cosmic-text-secondary text-sm">{implication}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-cosmic-accent/10 rounded-2xl p-8 border border-cosmic-accent/20">
            <Icon name="Target" size={48} className="text-cosmic-accent mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-cosmic-text-primary mb-4">
              Strategic Market Positioning
            </h3>
            <p className="text-cosmic-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
              These predictions inform my skill development, project focus, and strategic partnerships. I'm not just adapting to the future—I'm actively shaping it through thoughtful design and ethical AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cosmic-button px-6 py-3 rounded-lg font-medium flex items-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>Discuss Strategy</span>
              </button>
              <button className="border border-cosmic-accent text-cosmic-accent hover:bg-cosmic-accent/10 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300">
                <Icon name="Download" size={18} />
                <span>Download Analysis</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryPredictions;