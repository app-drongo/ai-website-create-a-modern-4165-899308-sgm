import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, MapPin, Users, Wifi, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const plans = [
    {
      name: 'Ocean Breeze Studio',
      description: 'Intimate beachfront studio perfect for romantic getaways',
      price: '$189',
      period: '/night',
      badge: null,
      features: [
        'Direct beach access',
        'Ocean view balcony',
        'King-size bed',
        'Kitchenette with essentials',
        'High-speed WiFi',
        'Beach chairs & umbrellas',
        '24/7 concierge support',
      ],
      cta: 'Book Now',
      popular: false,
      guests: '2 guests',
      location: 'Beachfront',
    },
    {
      name: 'Sunset Penthouse Suite',
      description: 'Luxury penthouse with panoramic ocean views and premium amenities',
      price: '$349',
      period: '/night',
      badge: 'Most Popular',
      features: [
        'Panoramic ocean views',
        'Private rooftop terrace',
        '2 bedrooms, 2 bathrooms',
        'Gourmet kitchen',
        'Premium furnishings',
        'Complimentary parking',
        'Daily housekeeping',
        'Welcome champagne',
        'Priority restaurant reservations',
      ],
      cta: 'Book Now',
      popular: true,
      guests: '6 guests',
      location: 'Penthouse Level',
    },
    {
      name: 'Family Paradise Villa',
      description: 'Spacious family retreat with pool access and kid-friendly amenities',
      price: '$279',
      period: '/night',
      badge: 'Family Favorite',
      features: [
        '3 bedrooms, 2 bathrooms',
        'Private pool access',
        'Full kitchen & dining',
        "Kids' play area",
        'Beach equipment included',
        'Laundry facilities',
        'Family concierge services',
        'Crib & high chair available',
      ],
      cta: 'Book Now',
      popular: false,
      guests: '8 guests',
      location: 'Pool Level',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Premium Accommodations
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Miami Beach
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Vacation Rentals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Experience the finest beachfront accommodations in Miami Beach. Each property features
            premium amenities and personalized concierge services.
          </p>

          {/* Season Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Peak Season
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Off Season
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">{plan.description}</CardDescription>

                {/* Property Details */}
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{plan.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="size-4" />
                    <span>{plan.location}</span>
                  </div>
                </div>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>

                {plan.name === 'Sunset Penthouse Suite' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Minimum 3-night stay • Complimentary airport transfer
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Planning an extended stay?</h3>
          <p className="text-muted-foreground mb-6">
            Enjoy special rates for weekly and monthly bookings. Our concierge team will customize
            your Miami Beach experience with local recommendations and exclusive perks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
            <Button size="lg">Check Availability</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
