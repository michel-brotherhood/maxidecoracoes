import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Tapetes from "./pages/produtos/Tapetes";
import Tecidos from "./pages/produtos/Tecidos";
import Pisos from "./pages/produtos/Pisos";
import Cortinas from "./pages/produtos/Cortinas";
import PapeisDeParede from "./pages/produtos/PapeisDeParede";
import CamaMesaBanho from "./pages/produtos/CamaMesaBanho";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/tapetes" element={<Tapetes />} />
          <Route path="/produtos/tecidos" element={<Tecidos />} />
          <Route path="/produtos/pisos" element={<Pisos />} />
          <Route path="/produtos/cortinas" element={<Cortinas />} />
          <Route path="/produtos/papeis-de-parede" element={<PapeisDeParede />} />
          <Route path="/produtos/cama-mesa-banho" element={<CamaMesaBanho />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
