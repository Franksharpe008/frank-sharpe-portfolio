import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import VisionHero from './components/VisionHero';
import ManifestoSection from './components/ManifestoSection';
import FutureConceptsShowcase from './components/FutureConceptsShowcase';
import IndustryPredictions from './components/IndustryPredictions';

import CommunityImpact from './components/CommunityImpact';

const VisionFutureImpact = () => {
  return (
    <>
      <Helmet>
        <title>Vision & Future Impact | Frank Sharpe - AI Design Visionary</title>
        <meta 
          name="description" 
          content="Explore Frank Sharpe's vision for the future of AI-driven design, industry predictions, and alignment with OpenAI's mission to benefit humanity through responsible AI development." 
        />
        <meta name="keywords" content="AI design vision, future of design, OpenAI alignment, ethical AI, design predictions, AI innovation, human-centered AI" />
        <meta property="og:title" content="Vision & Future Impact | Frank Sharpe" />
        <meta property="og:description" content="Shaping the future of AI-driven design through ethical innovation and human-centered principles." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/vision-future-impact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <VisionHero />
          <ManifestoSection />
          <FutureConceptsShowcase />
          <IndustryPredictions />
          <OpenAIAlignment />
          <CommunityImpact />
        </main>
      </div>
    </>
  );
};

export default VisionFutureImpact;;
};

export default VisionFutureImpact;