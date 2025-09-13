import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  MapPin,
  Shield,
  Key,
  Coffee,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Personalized Service',
      description:
        'Every guest receives our dedicated attention with 24/7 concierge support and customized recommendations for the perfect Miami Beach experience.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description:
        'Fully licensed and insured properties with professional cleaning, secure keyless entry, and verified guest screening for your peace of mind.',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description:
        "Handpicked beachfront and downtown properties within walking distance of Miami Beach's best restaurants, nightlife, and attractions.",
    },
    {
      icon: Award,
      title: 'Luxury Standards',
      description:
        'Premium furnishings, high-end amenities, and meticulous attention to detail ensure every stay exceeds your expectations.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Established', icon: Award },
    { value: '500+', label: 'Happy Guests', icon: Users },
    { value: '4.9/5', label: 'Guest Rating', icon: Star },
    { value: '6', label: 'Premium Properties', icon: Key },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Founder & Property Manager',
      image: 'IM',
      bio: 'Miami Beach native with 12+ years in luxury hospitality. Knows every hidden gem in the city.',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Guest Experience Director',
      image: 'CR',
      bio: 'Former Four Seasons concierge. Specializes in creating unforgettable Miami experiences.',
    },
    {
      name: 'Sofia Chen',
      role: 'Operations Manager',
      image: 'SC',
      bio: 'Hospitality MBA with expertise in luxury property management and guest services.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Maintenance Supervisor',
      image: 'MT',
      bio: '20+ years ensuring properties meet the highest standards of comfort and functionality.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Coastal Retreats
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Gateway to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Luxury
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're Miami Beach locals passionate about sharing our city's magic through carefully
            curated luxury accommodations and personalized concierge services that create
            unforgettable stays.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by Miami Beach native Isabella Martinez, Coastal Retreats was born
                from a simple belief: luxury travel should feel personal, not corporate.
              </p>
              <p>
                After years in high-end hospitality, Isabella noticed guests craving authentic local
                experiences beyond what large hotel chains could offer. She handpicked six
                exceptional properties and built a team of local experts dedicated to crafting
                perfect Miami Beach getaways.
              </p>
              <p>
                Today, we're proud to have hosted over 500 guests from around the world, each
                leaving with memories of not just beautiful accommodations, but genuine Miami Beach
                hospitality.
              </p>
            </div>
            <Button className="group">
              View Our Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves to experience Miami Beach like a local, with luxury that
                      feels like home."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that guide our commitment to exceptional hospitality and unforgettable
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Your Miami Beach Experts</h3>
            <p className="text-muted-foreground">
              Our dedicated team of local professionals ensuring every detail of your stay is
              perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Contact Our Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Coastal Retreats exceeded every expectation. The penthouse was stunning, but it was
                Isabella's personal recommendations that made our Miami Beach vacation truly
                magical. We'll never book anywhere else."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel & William Chen</div>
                  <div className="text-sm text-muted-foreground">
                    Anniversary Guests, San Francisco
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
