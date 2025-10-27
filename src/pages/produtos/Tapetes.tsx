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
import { Check, Phone, FileText } from "lucide-react";

const Tapetes = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tapetes Decorativos e Carpetes",
    "description": "Tapetes residenciais e comerciais, nacionais e importados. Marcas São Carlos, Edantex, Niazitex. Métodos sustentáveis",
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
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/vitale-edan-home-aplic-AE04MqM06rCpvOpq.jpg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/coliseo-edan-home-aplic-m6LJQvXoz2ibrzBp.webp",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/andreiandreev__the_place_for_the_product_on_the_carpet_is_light_a8130300-00c8-4ad9-9a45-a9621de3b299-mp893ZDnZEUbkJKR.png"
  ];

  const additionalBrands = ["Beaulieu"];

  const brands = [
    { name: "Tapetes São Carlos", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=184,h=60,fit=crop/YBg4lPQqvZhrZpja/images-1-AoPGqKZobPuoja2r.png" },
    { name: "Edantex", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=184,h=60,fit=crop/YBg4lPQqvZhrZpja/logo-edan-postv-1024x334-mk39qK8ongiqQzbx.webp" },
    { name: "Niazitex", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=162,h=97,fit=crop/YBg4lPQqvZhrZpja/images-4-AwvkDKj3kwtJRloD.png" },
  ];

  const features = [
    "Tapetes residenciais e comerciais",
    "Nacionais e importados",
    "Métodos ecologicamente sustentáveis",
    "Alta durabilidade e conforto",
    "Diversos tamanhos e padrões",
    "Instalação profissional disponível",
  ];

  const products = [
    "Tapetes Decorativos",
    "Tapetes para Sala",
    "Tapetes para Quarto",
    "Tapetes Comerciais",
    "Passadeiras",
    "Capachos Personalizados",
  ];

  return (
    <>
      <SEO
        title="Tapetes Decorativos e Carpetes | São Carlos, Edantex - Maxi"
        description="Tapetes decorativos para sala, quarto e comerciais. Carpetes residenciais. Marcas São Carlos, Edantex, Niazitex. Produção sustentável, instalação profissional no RJ."
        keywords="tapetes decorativos, carpetes, tapetes sala, tapetes quarto, são carlos, edantex, tapetes rio de janeiro"
        canonicalUrl="https://maxi-decoracoes.lovable.app/produtos/tapetes"
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
                          alt={`Tapetes ${index + 1}`}
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
                  <h3 className="font-semibold text-sm mb-4 text-muted-foreground">Trabalhamos com as melhores marcas:</h3>
                  <div className="grid grid-cols-3 gap-4 items-center mb-4">
                    {brands.map((brand, index) => (
                      <div key={index} className="flex items-center justify-center p-2 bg-secondary/50 rounded-lg">
                        <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {additionalBrands.map((brand, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
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
                <Badge className="mb-4">Variedades e Qualidade</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Tapetes
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A Maxi Decorações oferece uma ampla variedade de tapetes para uso residencial e comercial, nacionais e importados. Fornecidos por renomadas marcas como Tapetes São Carlos, Edantex e Niazitex.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Fabricados com <strong>métodos ecologicamente sustentáveis</strong>, nossos tapetes são perfeitos para qualquer ambiente, proporcionando conforto, estilo e durabilidade. Oferecemos também <strong>carpetes para uso comercial e residencial</strong>, com colas e acessórios de qualidade. Carpetes finos ideais para cenários também disponíveis.
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

              {/* Catalogs */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Catálogos</h3>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://assets.zyrosite.com/YBg4lPQqvZhrZpja/tapetes-202024-tapetes-s-c3-a3o-carlos-m2WQ43Jv24I0galD.pdf', '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Catálogo São Carlos - Tapetes 2024
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://assets.zyrosite.com/YBg4lPQqvZhrZpja/1719867750826catalogo-20de-20carpetes-202024-20-20tapetes-20s-c3-a3o-20carlos-m7VKpO7raGFkaz1l.pdf', '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Catálogo São Carlos - Carpetes 2024
                    </Button>
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

export default Tapetes;
