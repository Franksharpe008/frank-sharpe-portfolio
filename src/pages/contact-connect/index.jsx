import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import AustinConnection from './components/AustinConnection';
import SocialPresence from './components/SocialPresence';
import DownloadableAssets from './components/DownloadableAssets';
import ResponseCommitment from './components/ResponseCommitment';

const ContactConnect = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Connect - Frank Sharpe | AI Design Collaboration</title>
        <meta 
          name="description" 
          content="Connect with Frank Sharpe for AI design collaboration, speaking engagements, and professional opportunities. Multiple contact methods, Austin meetups, and quick response commitment." 
        />
        <meta name="keywords" content="Frank Sharpe contact, AI design collaboration, Austin tech networking, design consultation, speaking engagements" />
        <meta property="og:title" content="Contact & Connect - Frank Sharpe | AI Design Collaboration" />
        <meta property="og:description" content="Ready to transform your AI vision into reality? Multiple pathways to connect, collaborate, and create the future of digital experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://franksharpe.design/contact-connect" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Methods */}
        <ContactMethods />

        {/* Contact Form */}
        <ContactForm />

        {/* Austin Connection */}
        <AustinConnection />

        {/* Social Presence */}
        <SocialPresence />

        {/* Downloadable Assets */}
        <DownloadableAssets />

        {/* Response Commitment */}
        <ResponseCommitment />
      </div>
    </>
  );
};

export default ContactConnect;