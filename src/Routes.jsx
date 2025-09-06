import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AboutFranksJourney from './pages/about-frank-s-journey';
import ContactConnect from './pages/contact-connect';
import LiveProjectShowcase from './pages/live-project-showcase';
import AIDesignPhilosophy from './pages/ai-design-philosophy';
import VisionFutureImpact from './pages/vision-future-impact';
import ImmersiveHomepage from './pages/immersive-homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutFranksJourney />} />
        <Route path="/about-frank-s-journey" element={<AboutFranksJourney />} />
        <Route path="/contact-connect" element={<ContactConnect />} />
        <Route path="/live-project-showcase" element={<LiveProjectShowcase />} />
        <Route path="/ai-design-philosophy" element={<AIDesignPhilosophy />} />
        <Route path="/vision-future-impact" element={<VisionFutureImpact />} />
        <Route path="/immersive-homepage" element={<ImmersiveHomepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
