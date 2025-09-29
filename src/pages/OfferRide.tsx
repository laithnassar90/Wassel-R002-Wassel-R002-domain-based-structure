import { useState } from 'react';
import { Plus, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function OfferRide() {
  const [rideForm, setRideForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '1',
    price: '',
    description: '',
  });

  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, this would submit the ride offer
    console.log('Offering ride:', rideForm);
    // Show success message and redirect
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-wassel-teal mx-auto" />
              <h3 className="font-headline font-semibold text-xl text-foreground">Route Details</h3>
              <p className="text-muted-foreground">Where are you traveling?</p>
              <p className="text-sm arabic font-arabic text-wassel-gray">إلى أين تسافر؟</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="from" className="text-foreground">From</Label>
                <Input
                  id="from"
                  placeholder="Departure city"
                  value={rideForm.from}
                  onChange={(e) => setRideForm({ ...rideForm, from: e.target.value })}
                  className="bg-background text-foreground border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to" className="text-foreground">To</Label>
                <Input
                  id="to"
                  placeholder="Destination city"
                  value={rideForm.to}
                  onChange={(e) => setRideForm({ ...rideForm, to: e.target.value })}
                  className="bg-background text-foreground border-border"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Clock className="h-12 w-12 text-wassel-teal mx-auto" />
              <h3 className="font-headline font-semibold text-xl text-foreground">Schedule & Capacity</h3>
              <p className="text-muted-foreground">When are you leaving and how many passengers?</p>
              <p className="text-sm arabic font-arabic text-wassel-gray">متى ستغادر وكم عدد الركاب؟</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={rideForm.date}
                    onChange={(e) => setRideForm({ ...rideForm, date: e.target.value })}
                    className="bg-background text-foreground border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={rideForm.time}
                    onChange={(e) => setRideForm({ ...rideForm, time: e.target.value })}
                    className="bg-background text-foreground border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="seats" className="text-foreground">Available Seats</Label>
                <Select value={rideForm.seats} onValueChange={(value) => setRideForm({ ...rideForm, seats: value })}>
                  <SelectTrigger className="bg-background text-foreground border-border">
                    <SelectValue placeholder="Select number of seats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 seat</SelectItem>
                    <SelectItem value="2">2 seats</SelectItem>
                    <SelectItem value="3">3 seats</SelectItem>
                    <SelectItem value="4">4 seats</SelectItem>
                    <SelectItem value="5">5 seats</SelectItem>
                    <SelectItem value="6">6 seats</SelectItem>
                    <SelectItem value="7">7 seats</SelectItem>
                    <SelectItem value="8">8 seats</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <DollarSign className="h-12 w-12 text-wassel-teal mx-auto" />
              <h3 className="font-headline font-semibold text-xl text-foreground">Pricing & Details</h3>
              <p className="text-muted-foreground">Set your price and add any additional information</p>
              <p className="text-sm arabic font-arabic text-wassel-gray">حدد السعر وأضف معلومات إضافية</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price" className="text-foreground">Price per person ($)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="0"
                  value={rideForm.price}
                  onChange={(e) => setRideForm({ ...rideForm, price: e.target.value })}
                  className="bg-background text-foreground border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">Additional Notes (Optional)</Label>
                <textarea
                  id="description"
                  placeholder="Any additional information about your trip..."
                  value={rideForm.description}
                  onChange={(e) => setRideForm({ ...rideForm, description: e.target.value })}
                  className="w-full min-h-24 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </div>

            {/* Review Summary */}
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Trip Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Route:</span>
                  <span className="text-foreground">{rideForm.from} → {rideForm.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="text-foreground">{rideForm.date} at {rideForm.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available Seats:</span>
                  <span className="text-foreground">{rideForm.seats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price per person:</span>
                  <span className="text-foreground font-semibold">${rideForm.price}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= stepNumber
                  ? 'bg-wassel-teal border-wassel-teal text-white'
                  : 'border-border text-muted-foreground'
              }`}
            >
              {stepNumber}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-wassel-teal h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Card */}
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
            <span>Offer a Ride</span>
            <span className="text-sm arabic font-arabic text-wassel-gray">اعرض رحلة</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderStep()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              Back
            </Button>
            
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && (!rideForm.from || !rideForm.to)) ||
                  (step === 2 && (!rideForm.date || !rideForm.time || !rideForm.seats))
                }
                className="wassel-button-primary"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!rideForm.price}
                className="wassel-button-primary"
              >
                Submit Ride
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}