import { Camera, Edit, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const mockProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+971 50 123 4567',
  avatar: 'https://placehold.co/120x120',
  rating: 4.8,
  totalTrips: 47,
  memberSince: 'January 2023',
  location: 'Dubai, UAE',
  bio: 'Friendly traveler who enjoys meeting new people and sharing rides. Always punctual and respectful of others\' time.',
  verified: {
    email: true,
    phone: true,
    identity: true,
  },
  preferences: {
    music: 'Pop, Jazz',
    smoking: 'No smoking',
    pets: 'Pet-friendly',
    conversation: 'Enjoys chatting',
  },
};

export function Profile() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-3 shadow-lg border border-gray-200">
            <img 
              src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png" 
              alt="Wassel Logo" 
              className="w-full h-full object-contain filter contrast-125 brightness-110"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="font-headline font-bold text-3xl wassel-text-gradient">Profile</h1>
              <span className="text-xl arabic font-arabic text-wassel-gray">الملف الشخصي</span>
            </div>
            <p className="text-muted-foreground">Manage your profile information and preferences</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6 text-center space-y-4">
            <div className="relative inline-block">
              <Avatar className="h-24 w-24">
                <AvatarImage src={mockProfile.avatar} alt={mockProfile.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {mockProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-wassel-teal text-white hover:bg-wassel-teal/90"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <h2 className="font-headline font-semibold text-xl text-foreground">{mockProfile.name}</h2>
              <p className="text-muted-foreground">{mockProfile.location}</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-semibold text-foreground">{mockProfile.rating}</span>
              <span className="text-muted-foreground">({mockProfile.totalTrips} trips)</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {mockProfile.verified.email && (
                <Badge className="bg-success text-success-foreground">Email Verified</Badge>
              )}
              {mockProfile.verified.phone && (
                <Badge className="bg-success text-success-foreground">Phone Verified</Badge>
              )}
              {mockProfile.verified.identity && (
                <Badge className="bg-success text-success-foreground">ID Verified</Badge>
              )}
            </div>

            <Button className="w-full wassel-button-primary">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-foreground">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <Mail className="h-5 w-5 text-wassel-teal" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{mockProfile.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <Phone className="h-5 w-5 text-wassel-teal" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{mockProfile.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">About Me</h3>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-foreground">{mockProfile.bio}</p>
              </div>
            </div>

            {/* Member Since */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Membership</h3>
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                <Calendar className="h-5 w-5 text-wassel-teal" />
                <div>
                  <p className="text-sm text-muted-foreground">Member since</p>
                  <p className="font-medium text-foreground">{mockProfile.memberSince}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Travel Preferences */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-foreground">Travel Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Music</h4>
                <p className="text-muted-foreground">{mockProfile.preferences.music}</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Smoking</h4>
                <p className="text-muted-foreground">{mockProfile.preferences.smoking}</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Pets</h4>
                <p className="text-muted-foreground">{mockProfile.preferences.pets}</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Conversation</h4>
                <p className="text-muted-foreground">{mockProfile.preferences.conversation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
