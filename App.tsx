import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages (lazy loaded for better performance)
const HomePage = lazy(() => import("./pages/HomePage"));
const RidesPage = lazy(() => import("./rides/RidesPage"));
const SessionsPage = lazy(() => import("./sessions/SessionsPage"));
const NotificationsPage = lazy(() => import("./notifications/NotificationsPage"));
const CarsPage = lazy(() => import("./cars/CarsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        {/* Suspense fallback while lazy pages load */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rides" element={<RidesPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
