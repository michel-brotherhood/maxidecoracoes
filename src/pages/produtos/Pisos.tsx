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

const Pisos = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pisos Vinílicos e Laminados",
    "description": "Pisos vinílicos, laminados, hospitalares e para academias. Marcas Eucatex, Durafloor, Tarkett. Instalação profissional",
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
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/164964-1600-1600-YX4bePRjjETe6oO1.webp",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/piso-laminado-cred-istock_miljanzivkovic-A8542ODV2NH43jLV.jpg"
  ];

  const additionalBrands = ["Finottato"];

  const brands = [
    { name: "Eucatex", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=171,h=49,fit=crop/YBg4lPQqvZhrZpja/images-2-mk39qK8oJRHqQwn4.png" },
    { name: "Durafloor", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=218,h=48,fit=crop/YBg4lPQqvZhrZpja/images-3-dOq48glJOouQM6r7.png" },
    { name: "Tarkett", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=203,h=43,fit=crop/YBg4lPQqvZhrZpja/images-AR0bMg2XJQc7JvN5.png" },
  ];

  const features = [
    "Pisos vinílicos de alta qualidade",
    "Pisos laminados modernos",
    "Pisos hospitalares",
    "Pisos para academias e escolas",
    "Materiais sustentáveis",
    "Instalação profissional",
  ];

  const products = [
    "Piso Vinílico LVT",
    "Piso Laminado",
    "Piso Hospitalar",
    "Piso para Academia",
    "Rodapés",
    "Piso para Áreas Molhadas",
  ];

  return (
    <>
      <SEO
        title="Pisos Vinílicos e Laminados | Eucatex, Durafloor - Maxi RJ"
        description="Pisos vinílicos LVT, laminados, hospitalares e para academias. Marcas Eucatex, Durafloor, Tarkett. Materiais sustentáveis, instalação profissional no Rio de Janeiro."
        keywords="piso vinílico, piso laminado, piso hospitalar, eucatex, durafloor, tarkett, pisos rio de janeiro"
        canonicalUrl="https://maxi-decoracoes.lovable.app/produtos/pisos"
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
                          alt={`Pisos ${index + 1}`}
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
                <Badge className="mb-4">Diversidade e Qualidade</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Pisos
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Oferecemos uma variedade de pisos vinílicos, laminados, hospitalares, para academias e escolas. Todos fabricados com materiais sustentáveis por marcas como Finottato, Durafloor, Eucatex, Tarkett.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Nossos pisos são ideais para uso <strong>comercial e residencial</strong>, com <strong>instalação rápida e sem obras</strong>. São produtos duráveis, de fácil manutenção e disponíveis em diversas texturas e padrões. Nossa equipe oferece consultoria especializada para ajudar na escolha do piso ideal para cada ambiente.
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

              {/* Simulador */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Simulador de Pisos Durafloor</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visualize como o piso ficará no seu ambiente antes de comprar
                  </p>
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => window.open('https://www.durafloor.com.br/meupisoideal/', '_blank')}
                  >
                    Acessar Simulador
                  </Button>
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
                      onClick={() => window.open('https://assets.zyrosite.com/YBg4lPQqvZhrZpja/eucafloor-Aq2oBEzz6lCqlLVq.pdf', '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Eucatex - Pisos Laminados
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://assets.zyrosite.com/YBg4lPQqvZhrZpja/4882-catalogo-eucafloor-lvt-es-m7VKpl2N9EIXngBX.pdf', '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Eucatex - Pisos Vinílicos LVT
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

export default Pisos;
