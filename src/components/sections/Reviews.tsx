import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award } from 'lucide-react';

export default function PropertyReviews() {
  const reviews = [
    {
      id: 1,
      author: 'Isabella Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Ocean View Penthouse Suite',
      verified: true,
      helpful: 47,
      title: 'Breathtaking ocean views and impeccable service',
      content:
        'Our stay at the Ocean View Penthouse exceeded every expectation. Waking up to panoramic views of Miami Beach was magical. The penthouse is beautifully appointed with luxury finishes throughout. The concierge service arranged dinner reservations and beach activities seamlessly. This is luxury vacation rental at its finest.',
      pros: ['Stunning ocean views', 'Premium amenities', 'Exceptional concierge service'],
      stayDate: 'November 2024',
    },
    {
      id: 2,
      author: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 weeks ago',
      property: 'Downtown Executive Loft',
      verified: true,
      helpful: 32,
      title: 'Perfect for business travel with style',
      content:
        'Extended my Miami business trip to enjoy this incredible loft. The location puts you steps from the best restaurants and nightlife, while the space itself is a sanctuary of modern design. High-speed internet was perfect for video calls, and the kitchen allowed me to prepare healthy meals. Coastal Retreats truly understands luxury hospitality.',
      pros: ['Prime downtown location', 'Business-ready amenities', 'Sophisticated design'],
      stayDate: 'October 2024',
    },
    {
      id: 3,
      author: 'Jennifer & Mark Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Family Paradise Apartment',
      verified: true,
      helpful: 58,
      title: 'Unforgettable family vacation in Miami Beach',
      content:
        'Our family of four had the most wonderful week at this property. The kids loved having pool access, and we appreciated being so close to the beach. The apartment was spotless and had everything we needed, including beach gear and pool toys. The Coastal Retreats team went above and beyond to ensure our comfort throughout our stay.',
      pros: ['Family-friendly amenities', 'Pool and beach access', 'Thoughtful touches'],
      stayDate: 'October 2024',
    },
    {
      id: 4,
      author: 'Alexandra Chen',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Beachfront Penthouse Retreat',
      verified: true,
      helpful: 41,
      title: 'Romantic getaway perfection',
      content:
        "Celebrated our anniversary at this stunning beachfront penthouse. The private terrace with ocean views created the perfect romantic atmosphere. Every detail was thoughtfully curated, from the welcome champagne to the luxury linens. The personalized recommendations for romantic dining spots were spot-on. We're already planning our return visit.",
      pros: ['Romantic atmosphere', 'Private terrace', 'Personalized service'],
      stayDate: 'September 2024',
    },
  ];

  const stats = {
    average: 4.9,
    total: 287,
    distribution: [
      { stars: 5, count: 251 },
      { stars: 4, count: 28 },
      { stars: 3, count: 6 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Guest Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning travelers choose Coastal Retreats for their Miami Beach luxury
            stays
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average) ? 'fill-primary text-primary' : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map(item => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-accent" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-accent" />
                    <span>24/7 Concierge Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="size-4" />
                  All Properties
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Property Type
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Rating
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map(review => (
              <Card key={review.id} className="border-muted">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs gap-1">
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating ? 'fill-primary text-primary' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property Badge */}
                  <Badge variant="outline" className="mb-3 border-primary/20">
                    {review.property}
                  </Badge>

                  {/* Review Content */}
                  <h5 className="font-semibold text-foreground mb-2">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="gap-1 bg-accent/10 text-accent"
                        >
                          <Check className="size-3" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="size-4" />
                      Host Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Guest Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
