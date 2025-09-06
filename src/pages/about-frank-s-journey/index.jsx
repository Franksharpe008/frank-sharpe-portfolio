import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import ValuesSection from './components/ValuesSection';
import AustinSection from './components/AustinSection';
import AchievementsSection from './components/AchievementsSection';
import PersonalSection from './components/PersonalSection';

const AboutFranksJourney = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Frank's Journey - AI Design Technologist | Frank Sharpe Portfolio</title>
        <meta 
          name="description" 
          content="Discover Frank Sharpe's evolution from traditional designer to AI-enhanced creative technologist. Austin roots, ethical AI philosophy, and 8+ years of innovation in human-centered design." 
        />
        <meta name="keywords" content="Frank Sharpe, AI designer, Austin tech, design philosophy, creative technologist, TailorBytez, OpenAI design" />
        <meta property="og:title" content="About Frank's Journey - AI Design Technologist" />
        <meta property="og:description" content="From Austin's creative streets to the frontier of AI-enhanced design, discover how technology amplifies human creativity." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-frank-s-journey" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          <SkillsSection />
          <ValuesSection />
          <AustinSection />
          <AchievementsSection />
          <PersonalSection />
        </main>
      </div>
    </>
  );
};

export default AboutFranksJourney;