'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Headphones,
  Shield,
  Award,
  Star,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Reservation Hotline',
      description: 'Speak with our booking specialists',
      contact: '+1 (305) 555-BEACH',
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Concierge',
      description: 'Get personalized assistance',
      contact: 'concierge@coastalretreats.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Quick responses for urgent needs',
      contact: 'Available during your stay',
      action: 'Message Us',
    },
  ];

  const propertyOptions = [
    'Ocean View Penthouse - South Beach',
    'Sunset Penthouse - Collins Avenue',
    'Downtown Loft - Brickell District',
    'Art Deco Loft - Design District',
    'Family Suite - Mid Beach',
    'Poolside Retreat - North Beach',
    'General Inquiry',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <MapPin className="size-3 mr-2" />
            Miami Beach Concierge
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Plan Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Miami Beach Stay
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our local concierge team is here to help you book the perfect luxury retreat and plan
            unforgettable experiences in Miami Beach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Request Information
              </CardTitle>
              <CardDescription>
                Tell us about your Miami Beach getaway and we'll help you find the perfect property.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Martinez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Property Interest
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a property or inquiry type</option>
                    {propertyOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your stay *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Check-in/out dates, number of guests, special requests, or any questions about our Miami Beach properties..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Inquiry
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Reach Our Team
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Location */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Miami Beach Office
              </h3>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Coastal Retreats Headquarters</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        1455 Ocean Drive, Suite 200
                        <br />
                        Miami Beach, FL 33139
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary" className="text-xs">
                        EST (UTC-5)
                      </Badge>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">Heart of South Beach</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Concierge Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="text-primary">24/7 for guests</span>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <Shield className="size-4" />
                      Licensed & Insured Miami Beach Operator
                    </p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <Award className="size-4 text-accent" />
                      <span>5-Star Rated</span>
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
