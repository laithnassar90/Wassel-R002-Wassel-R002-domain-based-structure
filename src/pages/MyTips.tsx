import { Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TripCard from "@/components/TripCard";

interface TripsPageProps {
  upcomingTrips: { id: string; [key: string]: any }[];
  pastTrips: { id: string; [key: string]: any }[];
}

export default function TripsPage({ upcomingTrips, pastTrips }: TripsPageProps) {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="h-16 w-16 rounded-xl overflow-hidden bg-white p-3 shadow-lg border border-gray-200">
          <img
            src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png"
            alt="Wassel Logo"
            className="w-full h-full object-contain filter contrast-125 brightness-110"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <h1 className="font-headline font-bold text-3xl wassel-text-gradient">
              My Trips
            </h1>
            <span className="text-xl arabic font-arabic text-wassel-gray">
              رحلاتي
            </span>
          </div>
          <p className="text-muted-foreground">
            Manage your bookings and trip history
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-96">
          <TabsTrigger value="upcoming" className="text-foreground">
            Upcoming ({upcomingTrips.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="text-foreground">
            Past ({pastTrips.length})
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Trips */}
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingTrips.length > 0 ? (
            upcomingTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} showActions />
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  No upcoming trips
                </h3>
                <p className="text-muted-foreground mb-4">
                  You don’t have any upcoming trips. Start by finding a ride!
                </p>
                <Button className="wassel-button-primary">Find a Ride</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Past Trips */}
        <TabsContent value="past" className="space-y-4">
          {pastTrips.length > 0 ? (
            pastTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  No past trips
                </h3>
                <p className="text-muted-foreground">
                  Your completed trips will appear here.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
