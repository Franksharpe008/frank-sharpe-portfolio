import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveMetricsSection from './components/LiveMetricsSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import SocialProofSection from './components/SocialProofSection';
import CallToActionSection from './components/CallToActionSection';

const ImmersiveHomepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Frank Sharpe - AI Design Pioneer & Creative Technologist | OpenAI Ready Portfolio</title>
        <meta 
          name="description" 
          content="Frank Sharpe transforms complex AI into intuitive experiences. Austin-based creative technologist specializing in AI-enhanced UX, WebGL experiments, and human-centered design. Ready to join OpenAI's Design Studio." 
        />
        <meta name="keywords" content="AI design, creative technology, UX design, WebGL, Austin designer, OpenAI, machine learning UX, AI integration, design systems, TailorBytez" />
        <meta name="author" content="Frank Sharpe" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Frank Sharpe - AI Design Pioneer & Creative Technologist" />
        <meta property="og:description" content="Where AI amplifies human creativity. Explore interactive demos, AI experiments, and proven business impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://franksharpe.design" />
        <meta property="og:image" content="https://franksharpe.design/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frank Sharpe - AI Design Pioneer" />
        <meta name="twitter:description" content="Transforming complex AI into intuitive, beautiful experiences" />
        <meta name="twitter:image" content="https://franksharpe.design/twitter-image.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://franksharpe.design" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Frank Sharpe",
            "jobTitle": "Digital Visionary | Co-Founder, TailorBytez | Web & Automation Strategist",
            "description": "I'm Frank Sharpe — Co-Founder of TailorBytez, where we don't just build websites. We engineer movement. Clean, custom digital platforms, automation flows, and AI-enhanced systems — all tailored to mission, not market trend.",
            "url": "https://franksharpe.design",
            "sameAs": [
              "https://www.linkedin.com/in/therelentlessconnoisseur",
              "https://github.com/franksharpe"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "TailorBytez"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Cosmic Particle System */}
          <HeroSection />
          
          {/* Live Metrics from TailorBytez */}
          <LiveMetricsSection />
          
          {/* Featured Interactive Projects */}
          <FeaturedProjectsSection />
          
          {/* Client Testimonials & Industry Recognition */}
          <SocialProofSection />
          
          {/* Call to Action - Multiple Collaboration Paths */}
          <CallToActionSection />
        </main>

        {/* Footer */}
        <footer className="bg-cosmic-background text-cosmic-text-secondary py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">Frank Sharpe</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Creative Technologist pioneering the intersection of AI and human-centered design. 
                  Based in Austin, TX, ready to transform the future of digital experiences.
                </p>
                <div className="flex space-x-4">
                  <a href="mailto:frank@tailorbytez.com" className="text-cosmic-accent hover:text-cosmic-accent/80 transition-colors">
                    <span className="sr-only">Email</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/franksharpe" className="text-cosmic-trust hover:text-cosmic-trust/80 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/ai-design-philosophy" className="hover:text-cosmic-accent transition-colors">AI Design Philosophy</a></li>
                  <li><a href="/live-project-showcase" className="hover:text-cosmic-accent transition-colors">Project Showcase</a></li>
                  <li><a href="/about-frank-s-journey" className="hover:text-cosmic-accent transition-colors">About Frank</a></li>
                  <li><a href="/vision-future-impact" className="hover:text-cosmic-accent transition-colors">Future Vision</a></li>
                  <li><a href="/contact-connect" className="hover:text-cosmic-accent transition-colors">Connect</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
                <div className="space-y-2 text-sm">
                  <p>frank@tailorbytez.com</p>
                  <p>Austin, Texas</p>
                  <p>Available for collaboration</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
              <p>&copy; {new Date()?.getFullYear()} Frank Sharpe. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="/privacy" className="hover:text-cosmic-accent transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-cosmic-accent transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ImmersiveHomepage;