// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./components/layout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load public pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Participate = lazy(() => import("./pages/Participate"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load admin pages
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Subscribers = lazy(() => import("./pages/admin/Subscribers"));
const Applications = lazy(() => import("./pages/admin/Applications"));

const queryClient = new QueryClient();

const AVLoader = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center z-50 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
    <div className="relative z-10 text-center">
      <h2 className="text-4xl font-bold mb-4 bg-white bg-clip-text text-transparent">
        AV Financial
      </h2>
      <div className="flex items-center justify-center gap-2">
        <span className="text-white text-lg">Loading</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<AVLoader />}>
          <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/participate" element={<Participate />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
            </Route>

            {/* Admin Login (public) */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/subscribers" element={<Subscribers />} />
                <Route path="/admin/applications" element={<Applications />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;