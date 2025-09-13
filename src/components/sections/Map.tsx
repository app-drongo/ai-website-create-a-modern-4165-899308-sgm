import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Home,
  Coffee,
  ShoppingBag,
  Train,
  Utensils,
  Trees,
  Waves,
  Camera,
  Star,
} from 'lucide-react';

export default function PropertyMap() {
  const properties = [
    {
      id: 1,
      name: 'Azure Penthouse',
      price: '$1,850/night',
      type: 'Beachfront Penthouse',
      lat: 25.7617,
      lng: -80.1918,
      status: 'Available',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Coral Sky Suite',
      price: '$1,650/night',
      type: 'Beachfront Penthouse',
      lat: 25.7717,
      lng: -80.1818,
      status: 'Available',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Urban Oasis Loft',
      price: '$950/night',
      type: 'Downtown Loft',
      lat: 25.7517,
      lng: -80.1918,
      status: 'Booked',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Skyline Modern Loft',
      price: '$1,100/night',
      type: 'Downtown Loft',
      lat: 25.7417,
      lng: -80.1818,
      status: 'Available',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Seaside Family Haven',
      price: '$750/night',
      type: 'Family Apartment',
      lat: 25.7617,
      lng: -80.1718,
      status: 'Available',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Tropical Pool Retreat',
      price: '$850/night',
      type: 'Family Apartment',
      lat: 25.7517,
      lng: -80.1618,
      status: 'Available',
      rating: 4.6,
    },
  ];

  const amenities = [
    { icon: Waves, name: 'Beach Access', count: 8 },
    { icon: Utensils, name: 'Fine Dining', count: 24 },
    { icon: Coffee, name: 'Cafés & Bars', count: 18 },
    { icon: ShoppingBag, name: 'Boutiques', count: 12 },
    { icon: Camera, name: 'Art Galleries', count: 6 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Discover Miami Beach Luxury
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exclusive collection of beachfront penthouses, downtown lofts, and family
            retreats in prime Miami Beach locations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Miami Beach Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=750&fit=crop"
                    alt="Miami Beach aerial view"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Property Markers */}
                <div className="absolute inset-0">
                  {/* Beachfront Penthouses */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-3 whitespace-nowrap shadow-xl">
                          <p className="text-sm font-semibold">Azure Penthouse</p>
                          <p className="text-xs text-muted-foreground">Beachfront • Ocean Views</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="size-3 fill-primary text-primary" />
                            <span className="text-xs">4.9</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 left-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>

                  {/* Downtown Lofts */}
                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-secondary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-secondary hover:bg-secondary/90 shadow-lg"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/2 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-muted-foreground/30 rounded-full" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-muted-foreground hover:bg-muted-foreground/90 shadow-lg"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Family Apartments */}
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-accent/40 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-accent hover:bg-accent/90 shadow-lg"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 right-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-accent/40 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-accent hover:bg-accent/90 shadow-lg"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg backdrop-blur-sm">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-primary rounded-full" />
                      <span>Beachfront Penthouses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-secondary rounded-full" />
                      <span>Downtown Lofts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-accent rounded-full" />
                      <span>Family Apartments</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Our Miami Beach Properties
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {properties.map(property => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{property.name}</p>
                        <p className="text-xs text-muted-foreground">{property.type}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="size-3 fill-primary text-primary" />
                          <span className="text-xs">{property.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{property.price}</p>
                        <Badge
                          variant={property.status === 'Available' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {property.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Miami Beach Attractions</h3>
                <div className="space-y-3">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                          <amenity.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </div>
                      <Badge variant="outline">{amenity.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                View All Properties
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
