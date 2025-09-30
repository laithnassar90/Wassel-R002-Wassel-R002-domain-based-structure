import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Clock, Users, Star } from 'lucide-react';

interface Driver {
  name: string;
  avatar: string;
  rating: number;
  trips: number;
}

interface Ride {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  driver: Driver;
  seatsAvailable: number;
  price: number;
  duration: string;
}

const mockRides: Ride[] = [
  {
    id: '1',
    from: 'Dubai Marina',
    to: 'Sharjah City',
    date: '2024-01-10',
    time: '09:00',
    driver: { name: 'Ahmed Al Mazrouei', avatar: 'https://placehold.co/40x40', rating: 4.8, trips: 120 },
    seatsAvailable: 2,
    price: 25,
    duration: '45m',
  },
  {
    id: '2',
    from: 'Jumeirah Beach',
    to: 'Al Ain',
    date: '2024-01-12',
    time: '12:30',
    driver: { name: 'Fatima Hassan', avatar: 'https://placehold.co/40x40', rating: 4.9, trips: 89 },
    seatsAvailable: 3,
    price: 40,
    duration: '1h 45m',
  },
  {
    id: '3',
    from: 'Dubai Mall',
    to: 'Abu Dhabi Airport',
    date: '2024-01-15',
    time: '14:00',
    driver: { name: 'Omar Khalil', avatar: 'https://placehold.co/40x40', rating: 4.7, trips: 203 },
    seatsAvailable: 1,
    price: 50,
    duration: '1h 20m',
  },
];

export function FindRide() {
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
  });

  const handleSearch = () => console.log('Searching for rides:', searchForm);
  const handleJoinRide = (rideId: string) => console.log('Joining ride:', rideId);

  return (
    <div className="p-6 space-y-8">
      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-2 shadow-sm border border-gray-100">
              <img
                src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png"
                alt="Wassel Logo"
                className="w-full h-full object-contain filter contrast-125"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <span>Find Your Perfect Ride</span>
            <span className="text-sm arabic font-arabic text-wassel-gray">ابحث عن رحلتك المثالية</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {['from', 'to', 'date', 'passengers'].map((field) => {
              const labelMap: Record<string, string> = { from: 'From', to: 'To', date: 'Date', passengers: 'Passengers' };
              const typeMap: Record<string, string> = { date: 'date', passengers: 'number' };
              return (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field} className="text-foreground">{labelMap[field]}</Label>
                  <Input
                    id={field}
                    type={typeMap[field] || 'text'}
                    min={field === 'passengers' ? 1 : undefined}
                    max={field === 'passengers' ? 8 : undefined}
                    placeholder={labelMap[field] + ' city'}
                    value={searchForm[field as keyof typeof searchForm]}
                    onChange={(e) => setSearchForm({ ...searchForm, [field]: e.target.value })}
                    className="bg-background text-foreground border-border"
                  />
                </div>
              );
            })}
            <div className="flex items-end">
              <Button onClick={handleSearch} className="w-full wassel-button-primary">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <h2 className="font-headline font-semibold text-xl text-foreground">Available Rides</h2>
        <div className="space-y-4">
          {mockRides.map((ride) => (
            <Card key={ride.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Driver Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={ride.driver.avatar} alt={ride.driver.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {ride.driver.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{ride.driver.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span>{ride.driver.rating}</span> • <span>{ride.driver.trips} trips</span>
                      </div>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-wassel-teal" />
                      <span className="font-medium text-foreground">{ride.from}</span>
                      <span className="text-wassel-gray">→</span>
                      <span className="font-medium text-foreground">{ride.to}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{ride.date} at {ride.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{ride.seatsAvailable} seats left</span>
                      </div>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">{ride.duration}</Badge>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">${ride.price}</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                    <Button onClick={() => handleJoinRide(ride.id)} className="wassel-button-primary">Join Ride</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
