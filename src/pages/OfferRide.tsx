import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

interface OfferRideForm {
  from: string;
  to: string;
  date: string;
  time: string;
  seats: string;
  price: string;
  notes: string;
}

export function OfferRide() {
  const [form, setForm] = useState<OfferRideForm>({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '1',
    price: '',
    notes: '',
  });

  const handleSubmit = () => {
    console.log('Offering ride:', form);
    // Here you would normally call an API to save the ride offer
  };

  return (
    <div className="p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground font-headline">Offer a Ride</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* From */}
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                placeholder="Departure city"
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* To */}
            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                placeholder="Destination city"
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* Seats */}
            <div className="space-y-2">
              <Label htmlFor="seats">Seats Available</Label>
              <Input
                id="seats"
                type="number"
                min="1"
                max="8"
                value={form.seats}
                onChange={(e) => setForm({ ...form, seats: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label htmlFor="price">Price per Passenger</Label>
              <Input
                id="price"
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* Notes */}
            <div className="space-y-2 lg:col-span-3">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional info for passengers"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="bg-background text-foreground border-border"
              />
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-3 flex justify-end">
              <Button onClick={handleSubmit} className="wassel-button-primary">
                Offer Ride
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
