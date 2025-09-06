import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AustinConnection = () => {
  const austinSpots = [
    {
      name: 'Capital Factory',
      type: 'Co-working Space',
      address: '701 Brazos St, Austin, TX 78701',
      description: 'Austin\'s premier startup hub where I regularly work and network with fellow entrepreneurs.',
      amenities: ['High-speed WiFi', 'Conference Rooms', 'Coffee Bar', 'Networking Events'],
      availability: 'Mon-Fri, 9AM-6PM'
    },
    {
      name: 'Radio Coffee & Beer',
      type: 'Casual Meeting Spot',
      address: '4204 Menchaca Rd, Austin, TX 78704',
      description: 'Perfect for informal coffee meetings and creative brainstorming sessions.',
      amenities: ['Great Coffee', 'Outdoor Seating', 'Relaxed Atmosphere', 'Local Vibe'],
      availability: 'Daily, 7AM-10PM'
    },
    {
      name: 'Austin Central Library',
      type: 'Professional Meeting',
      address: '710 W César Chávez St, Austin, TX 78701',
      description: 'Quiet, professional environment ideal for focused project discussions.',
      amenities: ['Private Study Rooms', 'Presentation Equipment', 'Free Parking', 'Downtown Location'],
      availability: 'Mon-Thu 10AM-9PM, Fri-Sat 10AM-5PM'
    }
  ];

  const localEvents = [
    {
      title: 'Austin Design Week',
      date: 'March 15-22, 2025',
      description: 'Annual celebration of Austin\'s creative community. I\'ll be speaking about AI in design.',
      type: 'Speaking Engagement'
    },
    {
      title: 'Tech Breakfast Austin',
      date: 'First Friday Monthly',
      description: 'Monthly networking breakfast for Austin tech professionals.',
      type: 'Networking Event'
    },
    {
      title: 'AI Austin Meetup',
      date: 'Third Thursday Monthly',
      description: 'Local AI enthusiasts gathering to discuss latest trends and applications.',
      type: 'Community Meetup'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cosmic-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="MapPin" size={16} className="text-cosmic-secondary" />
            <span className="text-sm font-medium text-cosmic-secondary">Austin, Texas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Let's Meet in Austin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based in the heart of Texas tech scene, I'm always excited to connect with local companies, 
            visiting teams, and fellow creatives in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Meeting Locations */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="Coffee" size={24} className="text-cosmic-accent mr-3" />
              Preferred Meeting Spots
            </h3>
            
            <div className="space-y-6">
              {austinSpots?.map((spot, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{spot?.name}</h4>
                      <p className="text-sm text-cosmic-accent font-medium">{spot?.type}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ExternalLink"
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(spot?.address)}`, '_blank')}
                    >
                      Directions
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{spot?.description}</p>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Icon name="MapPin" size={12} className="mr-1" />
                    {spot?.address}
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {spot?.availability}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {spot?.amenities?.map((amenity, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Meeting Request */}
            <div className="mt-8 bg-gradient-to-r from-cosmic-primary/5 to-cosmic-accent/5 rounded-xl p-6 border border-cosmic-primary/20">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <Icon name="Calendar" size={16} className="text-cosmic-accent mr-2" />
                Quick Austin Meeting
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                In Austin for business? Let's grab coffee and discuss your AI design needs in person.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => window.location.href = 'sms:+15125550147?body=Hi Frank! I\'d like to meet in Austin to discuss...'}
                >
                  Text to Schedule
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+15125550147'}
                >
                  Call Direct
                </Button>
              </div>
            </div>
          </div>

          {/* Local Events & Community */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 flex items-center">
              <Icon name="Users" size={24} className="text-cosmic-trust mr-3" />
              Community & Events
            </h3>
            
            <div className="space-y-6 mb-8">
              {localEvents?.map((event, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{event?.title}</h4>
                    <span className="text-xs bg-cosmic-accent/10 text-cosmic-accent px-2 py-1 rounded-md">
                      {event?.type}
                    </span>
                  </div>
                  <p className="text-sm text-cosmic-secondary font-medium mb-2">{event?.date}</p>
                  <p className="text-sm text-muted-foreground">{event?.description}</p>
                </div>
              ))}
            </div>

            {/* Austin Map */}
            <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border">
              <div className="p-4 bg-muted/50 border-b border-border">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="Map" size={16} className="text-cosmic-accent mr-2" />
                  Austin Location
                </h4>
              </div>
              <div className="h-64">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Austin, Texas Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=30.2672,-97.7431&z=12&output=embed"
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Local Tech Scene */}
            <div className="mt-8 bg-gradient-to-r from-cosmic-trust/5 to-cosmic-secondary/5 rounded-xl p-6 border border-cosmic-trust/20">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <Icon name="Zap" size={16} className="text-cosmic-trust mr-2" />
                Austin Tech Scene
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Active in Austin's vibrant tech community through meetups, conferences, and collaborative projects. 
                Always excited to connect with fellow innovators and share insights about AI design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white px-2 py-1 rounded-md text-muted-foreground">SXSW Participant</span>
                <span className="text-xs bg-white px-2 py-1 rounded-md text-muted-foreground">Austin Design Week</span>
                <span className="text-xs bg-white px-2 py-1 rounded-md text-muted-foreground">Tech Breakfast Austin</span>
                <span className="text-xs bg-white px-2 py-1 rounded-md text-muted-foreground">AI Austin Meetup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustinConnection;