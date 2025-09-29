6 h-16 rounded-xl overflow-hidden bg-white p-3 shadow-lg border border-gray-200">
            <img 
              src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png" 
              alt="Wassel Logo" 
              className="w-full h-full object-contain filter contrast-125 brightness-110"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="font-headline font-bold text-3xl wassel-text-gradient">My Trips</h1>
              <span className="text-xl arabic font-arabic text-wassel-gray">رحلاتي</span>
            </div>
            <p className="text-muted-foreground">Manage your bookings and trip history</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-400">
          <TabsTrigger value="upcoming" className="text-foreground">
            Upcoming ({upcomingTrips.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="text-foreground">
            Past ({pastTrips.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingTrips.length > 0 ? (
            upcomingTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} showActions={true} />
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">No upcoming trips</h3>
                <p className="text-muted-foreground mb-4">
                  You don't have any upcoming trips. Start by finding a ride!
                </p>
                <Button className="wassel-button-primary">
                  Find a Ride
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastTrips.length > 0 ? (
            pastTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">No past trips</h3>
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
