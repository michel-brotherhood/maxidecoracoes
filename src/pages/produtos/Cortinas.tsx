import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Reviews } from "@/components/Reviews";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, Phone } from "lucide-react";
import cortinas1 from "@/assets/cortinas-1.png";
import cortinas2 from "@/assets/cortinas-2.png";
import cortinas3 from "@/assets/cortinas-3.png";
import cortinas4 from "@/assets/cortinas-4.png";

const Cortinas = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cortinas e Persianas Sob Medida",
    "description": "Cortinas sob medida e persianas: ateliê próprio, medição e instalação gratuita. Blackout, rolô, horizontais e verticais",
    "brand": {
      "@type": "Brand",
      "name": "Maxi Decorações"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    }
  };

  const images = [
    cortinas1,
    cortinas2,
    cortinas3,
    cortinas4
  ];

  const brands = [
    "MAXI Ateliê Cortinas",
    "Gabriel Persianas",
    "MAXI Persianas",
    "Trilho Suisso"
  ];

  const features = [
    "Cortinas sob medida",
    "Ateliê próprio",
    "Medição gratuita",
    "Instalação profissional",
    "Persianas horizontais e verticais",
    "Automação disponível",
  ];

  const products = [
    "Cortinas Sob Medida",
    "Persianas Horizontais",
    "Persianas Verticais",
    "Persianas Rolô",
    "Trilho Suisso",
    "Cortinas Blackout",
  ];

  return (
    <>
      <SEO
        title="Cortinas Sob Medida e Persianas | Ateliê Próprio - Maxi RJ"
        description="Cortinas sob medida e persianas no RJ: ateliê próprio, medição gratuita, instalação profissional. Blackout, rolô, horizontais, verticais. Automação disponível. 30 anos de experiência."
        keywords="cortinas sob medida, persianas, blackout, persianas rolô, cortinas rio de janeiro, trilho suisso, automação cortinas"
        canonicalUrl="https://maxi-decoracoes.lovable.app/produtos/cortinas"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Column - Image Carousel */}
            <div className="space-y-6">
              <Carousel className="w-full" opts={{ loop: true }} plugins={[
                {
                  name: "autoplay",
                  options: { delay: 4000 },
                  init: (embla) => {
                    const autoplay = setInterval(() => {
                      if (embla.canScrollNext()) {
                        embla.scrollNext();
                      } else {
                        embla.scrollTo(0);
                      }
                    }, 4000);
                    embla.on("destroy", () => clearInterval(autoplay));
                  }
                } as any
              ]}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <img
                          src={image}
                          alt={`Cortinas & Persianas ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>

              {/* Brands */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-sm mb-4 text-muted-foreground">Trabalhamos com:</h3>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((brand, index) => (
                      <Badge key={index} variant="secondary">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Tudo sob Medida</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Cortinas & Persianas
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Oferecemos persianas e cortinas sob medida, além de cortinas prontas. Nosso ateliê próprio combina funcionalidade e design elegante, garantindo produtos de alta qualidade.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Com <strong>medição gratuita</strong> e <strong>instalação profissional</strong>, trabalhamos com as melhores marcas como MAXI Ateliê Cortinas, Gabriel Persianas e Trilho Suisso. Oferecemos opções de automação para maior comodidade. Cada projeto é único e recebe atenção especial da nossa equipe especializada.
                </p>
              </div>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Características</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Products */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Produtos Disponíveis</h3>
                  <div className="flex flex-wrap gap-2">
                    {products.map((product, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="space-y-3">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full rounded-full text-base"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=552126220754&text=Bem+vindos+%C3%A0+Maxi+Decora%C3%A7%C3%B5es&type=phone_number&app_absent=0', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Entre em contato para conhecer nossas opções e receber um atendimento personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Reviews />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Cortinas;
