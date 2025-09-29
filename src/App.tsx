// src/App.tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load pages for performance (code-splitting)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const MyTrips = lazy(() => import("./pages/MyTrips"));
const OfferRide = lazy(() => import("./pages/OfferRide"));
const Payments = lazy(() => import("./pages/Payments"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const Findride = lazy(() => import("./pages/Findride"));
const Messages = lazy(() => import("./pages/Messages"));

// Layout components
import TopHeader from "./layout/TopHeader";
import Footer from "./layout/Footer"; // optional footer

// Redux hooks
import { useAppSelector, useAppDispatch } from "./hooks/useRedux";

// Fallback component while pages load
const Loading = () => <div className="loading">Loading...</div>;

const App: React.FC = () => {
  const trips = useAppSelector((state) => state.trips);
  const dispatch = useAppDispatch();

  return (
    <div className="app-container">
      {/* Top navigation/header */}
      <TopHeader />

      {/* Suspense for lazy-loaded routes */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/offer-ride" element={<OfferRide />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/find-ride" element={<Findride />} />
          <Route path="/messages" element={<Messages />} />

          {/* Fallback 404 */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>

      {/* Optional footer */}
      <Footer />

      {/* Debug: trips length */}
      <div className="trips-count" style={{ display: "none" }}>
        Total trips in store: {trips.length}
      </div>
    </div>
  );
};

export default App;
