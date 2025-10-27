import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
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
import textilesImage from "@/assets/products-textiles.jpg";

const CamaMesaBanho = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cama Mesa & Banho",
    "description": "Roupa de cama, toalhas de banho e mesa, edredons, colchas. Enxovais completos de alta qualidade, marcas renomadas",
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
    textilesImage,
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/monsieuria_your_design_here_white_heart-shaped_cushion_mockup_o_9515bb1d-3922-4c03-9914-84e13dcff29a-1-Yg29LnR0znhrkP5d.png"
  ];

  const features = [
    "Tecidos de alta qualidade",
    "Diversas marcas renomadas",
    "Enxovais completos",
    "Presente ideal",
    "Variedade de cores e padrões",
    "Conforto e sofisticação",
  ];

  const products = [
    "Roupa de Cama",
    "Toalhas de Banho",
    "Toalhas de Mesa",
    "Acessórios de Banho",
    "Jogos Completos",
    "Edredons e Colchas",
  ];

  return (
    <>
      <SEO
        title="Cama Mesa & Banho | Enxovais e Toalhas de Alta Qualidade"
        description="Roupa de cama, toalhas de banho, toalhas de mesa, edredons e colchas. Enxovais completos, marcas renomadas. Presente ideal com conforto e sofisticação no RJ."
        keywords="roupa de cama, toalhas banho, toalhas mesa, enxoval, edredon, colcha, cama mesa banho, rio de janeiro"
        canonicalUrl="https://maxi-decoracoes.lovable.app/produtos/cama-mesa-banho"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                          alt={`Cama Mesa & Banho ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Conforto e Sofisticação</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Cama Mesa & Banho
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Roupa de cama, toalhas de banho, toalhas de mesa e acessórios de alta qualidade para seu conforto. Produtos cuidadosamente selecionados para proporcionar bem-estar e elegância ao seu lar.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Oferecemos produtos diferenciados e atualizados, incluindo <strong>lençóis de até 1000 fios</strong>, edredons e cobre-leitos de marcas renomadas. <strong>Enxovais completos</strong> disponíveis, perfeitos para presentes ou para renovar seu lar com sofisticação e conforto. Diversas cores, padrões e tamanhos para atender todas as necessidades.
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

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default CamaMesaBanho;
