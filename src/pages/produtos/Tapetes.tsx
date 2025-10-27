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
  ];

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
              <Carousel className="w-full">
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
                  <h3 className="font-semibold text-sm mb-4 text-muted-foreground">Qualidade garantida por:</h3>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    {brands.map((brand, index) => (
                      <div key={index} className="flex items-center justify-center p-2 bg-secondary/50 rounded-lg">
                        <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain" />
                      </div>
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Maxi Decorações oferece uma ampla variedade de tapetes para uso residencial e comercial, nacionais e importados. Fornecidos por renomadas marcas como Tapetes São Carlos, Edantex e Niazitex. Fabricados com métodos ecologicamente sustentáveis, nossos tapetes são perfeitos para qualquer ambiente, proporcionando conforto, estilo e durabilidade.
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

export default Tapetes;
