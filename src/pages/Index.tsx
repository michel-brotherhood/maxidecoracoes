import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Maxi Decorações - Início",
    "description": "Decoração de interiores premium: cortinas sob medida, tecidos nobres, pisos vinílicos, tapetes e papéis de parede no Rio de Janeiro",
    "url": "https://maxi-decoracoes.lovable.app/"
  };

  return (
    <>
      <SEO
        title="Maxi Decorações - Cortinas, Tecidos, Pisos e Tapetes no RJ"
        description="30 anos oferecendo tecidos nobres, cortinas sob medida, pisos vinílicos, tapetes e papéis de parede no Rio de Janeiro. 6 lojas em Niterói, São Gonçalo e RJ. Qualidade garantida."
        keywords="cortinas sob medida, tecidos decoração, pisos vinílicos, tapetes, papéis de parede, persianas, decoração interiores rio de janeiro"
        canonicalUrl="https://maxi-decoracoes.lovable.app/"
        structuredData={structuredData}
      />
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
    </>
  );
};

export default Index;
