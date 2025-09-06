import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PhilosophyHero from './components/PhilosophyHero';
import CorePrinciples from './components/CorePrinciples';
import DigitalAlchemy from './components/DigitalAlchemy';
import InteractiveExperiments from './components/InteractiveExperiments';
import EthicsSection from './components/EthicsSection';
import AustinInfluence from './components/AustinInfluence';
import ResourcesSection from './components/ResourcesSection';

const AIDesignPhilosophy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Design Philosophy - Frank Sharpe | Ethical AI & Human-Centered Design</title>
        <meta 
          name="description" 
          content="Explore Frank Sharpe's philosophy on ethical AI design, human-centered innovation, and the Digital Alchemy process that transforms complex AI into intuitive experiences." 
        />
        <meta name="keywords" content="AI design philosophy, ethical AI, human-centered design, digital alchemy, AI UX, responsible AI, Frank Sharpe" />
        <meta property="og:title" content="AI Design Philosophy - Frank Sharpe" />
        <meta property="og:description" content="AI amplifies human creativity, it doesn't replace it. Discover the philosophy behind ethical AI design and human-centered innovation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/ai-design-philosophy" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <PhilosophyHero />
          <CorePrinciples />
          <DigitalAlchemy />
          <InteractiveExperiments />
          <EthicsSection />
          <AustinInfluence />
          <ResourcesSection />
        </main>

        {/* Footer */}
        <footer className="bg-cosmic-background text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-cosmic-accent rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
                      <circle cx="12" cy="12" r="2" fill="var(--color-cosmic-accent)" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Frank Sharpe</h3>
                    <p className="text-cosmic-text-secondary text-sm">AI × DESIGN</p>
                  </div>
                </div>
                <p className="text-cosmic-text-secondary leading-relaxed mb-6 max-w-md">
                  Transforming complex AI capabilities into intuitive, ethical, and delightful human experiences through the Digital Alchemy process.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/therelentlessconnoisseur" className="text-cosmic-text-secondary hover:text-cosmic-accent transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://github.com/frank-sharpe" className="text-cosmic-text-secondary hover:text-cosmic-accent transition-colors duration-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold text-white mb-4">Philosophy</h4>
                <ul className="space-y-2 text-cosmic-text-secondary text-sm">
                  <li><a href="#core-principles" className="hover:text-cosmic-accent transition-colors duration-300">Core Principles</a></li>
                  <li><a href="#digital-alchemy" className="hover:text-cosmic-accent transition-colors duration-300">Digital Alchemy</a></li>
                  <li><a href="#ethics" className="hover:text-cosmic-accent transition-colors duration-300">Ethical AI</a></li>
                  <li><a href="#austin-influence" className="hover:text-cosmic-accent transition-colors duration-300">Austin Influence</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-cosmic-text-secondary text-sm">
                  <li><a href="#frameworks" className="hover:text-cosmic-accent transition-colors duration-300">AI Design Framework</a></li>
                  <li><a href="#toolkit" className="hover:text-cosmic-accent transition-colors duration-300">Accessibility Toolkit</a></li>
                  <li><a href="#experiments" className="hover:text-cosmic-accent transition-colors duration-300">Interactive Tools</a></li>
                  <li><a href="#contributions" className="hover:text-cosmic-accent transition-colors duration-300">Open Source</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-cosmic-text-secondary text-sm">
                © {new Date()?.getFullYear()} Frank Sharpe. All rights reserved.
              </p>
              <p className="text-cosmic-text-secondary text-sm mt-4 md:mt-0">
                Made with ❤️ in Austin, Texas
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AIDesignPhilosophy;