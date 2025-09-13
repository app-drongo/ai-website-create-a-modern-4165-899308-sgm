import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Bed, Bath, Wifi, Car, Star, Calendar } from 'lucide-react';

export default function PropertyGrid() {
  const properties = [
    {
      id: 1,
      name: 'Ocean Vista Penthouse',
      location: 'South Beach Oceanfront',
      pricePerNight: 450,
      originalPrice: 520,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 47,
      badge: 'Most Popular',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Ocean View', 'Private Balcony', 'WiFi', 'Parking'],
    },
    {
      id: 2,
      name: 'Sunset Penthouse Suite',
      location: 'Miami Beach Oceanfront',
      pricePerNight: 425,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 38,
      badge: 'Ocean View',
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['Sunset Views', 'Rooftop Access', 'WiFi', 'Concierge'],
    },
    {
      id: 3,
      name: 'Downtown Executive Loft',
      location: 'Brickell Financial District',
      pricePerNight: 285,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 62,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['City Views', 'Business Center', 'WiFi', 'Gym Access'],
    },
    {
      id: 4,
      name: 'Wynwood Arts District Loft',
      location: 'Wynwood Creative Quarter',
      pricePerNight: 225,
      originalPrice: 275,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 29,
      badge: 'Weekly Special',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['Art Gallery Views', 'Walkable', 'WiFi', 'Local Guide'],
    },
    {
      id: 5,
      name: 'Family Paradise Retreat',
      location: 'Mid-Beach Resort Area',
      pricePerNight: 320,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 84,
      badge: 'Family Favorite',
      guests: 8,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Pool Access', 'Beach Toys', 'WiFi', 'Kid-Friendly'],
    },
    {
      id: 6,
      name: 'Tropical Garden Apartment',
      location: 'Coconut Grove Waterfront',
      pricePerNight: 195,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 51,
      guests: 6,
      bedrooms: 2,
      bathrooms: 2,
      amenities: ['Garden Views', 'Pool Access', 'WiFi', 'Marina Walk'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Luxury Miami Beach Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our exclusive collection of premium beachfront penthouses, downtown lofts, and
            family-friendly retreats
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <MapPin className="size-4" />
              All Locations
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Property Type
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Price Range
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>6 Premium Properties Available</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Popularity
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] bg-muted">
                {property.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    {property.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Calendar className="size-4" />
                </Button>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="size-3" />
                  <span>{property.location}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{property.name}</h3>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="size-3" />
                    <span>{property.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="size-3" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-3" />
                    <span>{property.bathrooms}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {property.amenities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{property.amenities.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="ml-1 font-medium text-foreground">{property.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({property.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    ${property.pricePerNight}
                  </span>
                  <span className="text-sm text-muted-foreground">/night</span>
                  {property.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${property.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  <Calendar className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Check Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Properties */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View Property Details & Virtual Tours
          </Button>
        </div>
      </div>
    </section>
  );
}
