import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages (lazy loaded from the new domain structure for better performance)
// Pages are now located under src/domains/{feature}/pages
const HomePage = lazy(() => import("./domains/home/pages/HomePage"));
const RidesPage = lazy(() => import("./domains/rides/pages/RidesPage"));
const SessionsPage = lazy(() => import("./domains/sessions/pages/SessionsPage"));
const NotificationsPage = lazy(() => import("./domains/notifications/pages/NotificationsPage"));
const CarsPage = lazy(() => import("./domains/cars/pages/CarsPage"));
const NotFoundPage = lazy(() => import("./domains/shared/pages/NotFoundPage")); // Assuming a 'shared' domain for generic pages

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
