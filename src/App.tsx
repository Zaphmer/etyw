import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Projects from "./pages/Projects";
import Collaborators from "./pages/Collaborators";
import Production from "./pages/Production";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Custom cursor
import CustomCursor from "@/components/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global UI */}
      <Toaster />
      <Sonner />
      
      {/* Custom cinematic cursor */}
      <CustomCursor />

      <BrowserRouter basename="/etyw">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/collaborators" element={<Collaborators />} />
            <Route path="/production" element={<Production />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
