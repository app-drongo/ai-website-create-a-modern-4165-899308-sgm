import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Bed,
  Bath,
  Square,
  MapPin,
  Wifi,
  Car,
  Waves,
  Users,
} from 'lucide-react';

export default function PropertyGallery() {
  const galleries = [
    {
      id: 1,
      title: 'Ocean Vista Penthouse',
      location: 'South Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 3, sqft: 2800 },
      price: '$850/night',
      amenities: ['Ocean View', 'Private Balcony', 'Premium WiFi', 'Parking'],
    },
    {
      id: 2,
      title: 'Sunset Penthouse Suite',
      location: 'Mid-Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 2200 },
      price: '$720/night',
      amenities: ['Beachfront', 'Rooftop Access', 'Premium WiFi', 'Concierge'],
    },
    {
      id: 3,
      title: 'Downtown Miami Loft',
      location: 'Brickell, Downtown Miami',
      mainImage:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1600 },
      price: '$420/night',
      amenities: ['City Views', 'Gym Access', 'Business Center', 'Valet Parking'],
    },
    {
      id: 4,
      title: 'Bayfront Executive Loft',
      location: 'Edgewater, Downtown Miami',
      mainImage:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 1200 },
      price: '$380/night',
      amenities: ['Bay Views', 'High-Speed WiFi', 'Fitness Center', 'Pool Deck'],
    },
    {
      id: 5,
      title: 'Family Paradise Apartment',
      location: 'North Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 2, sqft: 1800 },
      price: '$520/night',
      amenities: ['Pool Access', 'Kid-Friendly', 'Beach Gear', 'Family Concierge'],
    },
    {
      id: 6,
      title: 'Coastal Family Haven',
      location: 'Surfside, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1500 },
      price: '$480/night',
      amenities: ['Resort Pool', 'Beach Access', 'Playground', 'BBQ Area'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Our Miami Beach Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of luxury beachfront penthouses, modern downtown
            lofts, and family-friendly apartments across Miami Beach's most desirable neighborhoods
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/95 hover:bg-background text-foreground"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/95 hover:bg-background text-foreground"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm font-medium">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="size-4 text-primary" />
                    <span className="font-medium">{property.specs.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="size-4 text-primary" />
                    <span className="font-medium">{property.specs.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="size-4 text-primary" />
                    <span className="font-medium">{property.specs.sqft} sqft</span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.amenities.slice(0, 2).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {property.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${property.title} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  View Details & Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            Explore All Miami Beach Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
