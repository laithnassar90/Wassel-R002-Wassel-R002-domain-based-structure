import React from "react";
import { Calendar } from "lucide-react"; // ✅ make sure lucide-react is installed
import { Card, CardContent } from "@/components/ui/card"; // ✅ adjust import if your Card is elsewhere

// Example trips data – replace with your store / API
const trips = [
  { id: 1, from: "Amman", to: "Irbid", date: "2025-09-28", time: "10:00 AM", price: 5, status: "upcoming" },
  { id: 2, from: "Amman", to: "Zarqa", date: "2025-09-29", time: "1:00 PM", price: 3, status: "completed" },
  { id: 3, from: "Amman", to: "Jerash", date: "2025-09-30", time: "5:00 PM", price: 4, status: "canceled" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Recent Trips</h2>
          <div className="space-y-4">
            {trips.slice(0, 3).map((trip) => (
              <div
                key={trip.id}
                className="flex items-center space-x-4 p-4 rounded-lg bg-wassel-light"
              >
                <div className="w-10 h-10 rounded-full bg-wassel-teal flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {trip.from} → {trip.to}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {trip.date} at {trip.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    ${trip.price}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {trip.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
