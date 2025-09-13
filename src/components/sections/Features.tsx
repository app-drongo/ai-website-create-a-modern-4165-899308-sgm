import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Waves, Wifi, Car, Coffee, Shield, Users, Calendar, Phone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Oceanfront Paradise',
      description:
        'Wake up to stunning Atlantic Ocean views from our premium beachfront penthouses with private balconies.',
      badge: 'Prime Location',
    },
    {
      icon: MapPin,
      title: 'Heart of South Beach',
      description:
        "Steps away from world-famous Ocean Drive, Art Deco District, and Miami's hottest restaurants and nightlife.",
      badge: 'Downtown Access',
    },
    {
      icon: Users,
      title: 'Family-Friendly Amenities',
      description:
        'Spacious layouts, pool access, and kid-safe environments perfect for memorable family vacations.',
      badge: 'Family Perfect',
    },
    {
      icon: Wifi,
      title: 'Business Ready',
      description:
        'High-speed fiber internet, dedicated workspaces, and quiet environments for extended business stays.',
      badge: 'Work Remote',
    },
    {
      icon: Car,
      title: 'Valet Parking Included',
      description:
        'Complimentary valet parking service at all properties - no more searching for Miami Beach parking.',
      badge: 'Convenience',
    },
    {
      icon: Coffee,
      title: 'Concierge Services',
      description:
        'Personal recommendations for dining, activities, and hidden local gems from our Miami Beach experts.',
      badge: 'Local Expertise',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description:
        'Fully licensed vacation rental operator with comprehensive insurance coverage for your peace of mind.',
      badge: 'Trust & Safety',
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      description:
        'Easy online reservations with flexible cancellation policies and seasonal rate transparency.',
      badge: 'Easy Booking',
    },
    {
      icon: Phone,
      title: '24/7 Guest Support',
      description:
        'Round-the-clock local support team available for any needs during your Miami Beach stay.',
      badge: 'Always Available',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Premium Amenities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything for Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Escape
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Luxury accommodations with personalized service and unbeatable locations. Experience
            Miami Beach like a local with our boutique vacation rentals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience luxury Miami Beach living?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
