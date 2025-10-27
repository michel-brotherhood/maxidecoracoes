import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
