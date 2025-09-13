import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Waves,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Properties',
      links: [
        { name: 'Beachfront Penthouses', href: '/properties/penthouses' },
        { name: 'Downtown Lofts', href: '/properties/lofts' },
        { name: 'Family Apartments', href: '/properties/family' },
        { name: 'All Properties', href: '/properties' },
        { name: 'Availability Calendar', href: '/availability' },
        { name: 'Seasonal Rates', href: '/pricing' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Concierge Services', href: '/concierge' },
        { name: 'Airport Transfers', href: '/transfers' },
        { name: 'Local Experiences', href: '/experiences' },
        { name: 'Extended Stays', href: '/extended-stays' },
        { name: 'Corporate Bookings', href: '/corporate' },
        { name: 'Special Occasions', href: '/special-events' },
      ],
    },
    {
      title: 'Miami Beach',
      links: [
        { name: 'Area Guide', href: '/miami-beach-guide' },
        { name: 'Best Restaurants', href: '/dining' },
        { name: 'Beach Activities', href: '/activities' },
        { name: 'Nightlife Guide', href: '/nightlife' },
        { name: 'Shopping Districts', href: '/shopping' },
        { name: 'Transportation', href: '/getting-around' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Booking Help', href: '/booking-help' },
        { name: 'Check-in Process', href: '/check-in' },
        { name: 'Guest Reviews', href: '/reviews' },
        { name: 'Cancellation Policy', href: '/cancellation' },
        { name: 'Property Policies', href: '/policies' },
        { name: 'Emergency Contact', href: '/emergency' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/coastalretreatsmb' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/coastalretreats' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/coastalretreatsmb' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/coastal-retreats' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Waves className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Coastal Retreats</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Premium beachfront vacation rentals in Miami Beach. Experience luxury accommodations
                with personalized service and unmatched ocean views. Your perfect coastal getaway
                awaits.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">reservations@coastalretreatsmb.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (305) 892-7463</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Miami Beach, Florida 33139</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Offers</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Receive special rates and Miami Beach insider tips. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Coastal Retreats Miami Beach. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Licensed & Insured <Heart className="size-3 text-red-500 fill-current" /> FL STR
                License #24-7891
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/property-management"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Property Management
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/guest-support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              24/7 Guest Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
