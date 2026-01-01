import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import CarsPage from "./pages/CarsPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import AlertsPage from "./pages/AlertsPage";
import NotificationsPage from "./pages/NotificationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing page without AppLayout */}
          <Route path="/" element={<LandingPage />} />
          
          {/* App routes with AppLayout */}
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/cars" element={<AppLayout><CarsPage /></AppLayout>} />
          <Route path="/cars/:id" element={<AppLayout><CarDetailsPage /></AppLayout>} />
          <Route path="/alerts" element={<AppLayout><AlertsPage /></AppLayout>} />
          <Route path="/notifications" element={<AppLayout><NotificationsPage /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
