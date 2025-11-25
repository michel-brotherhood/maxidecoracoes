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
import wallpaperImage from "@/assets/products-curtains.jpg";

const PapeisDeParede = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://maxidecoracoes.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Produtos",
            "item": "https://maxidecoracoes.com.br/produtos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Papéis de Parede",
            "item": "https://maxidecoracoes.com.br/produtos/papeis-de-parede"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://maxidecoracoes.com.br/produtos/papeis-de-parede#product",
        "name": "Papéis de Parede Decorativos",
        "description": "Transforme seus ambientes com nossa coleção premium de papéis de parede. Diversos estilos, texturas e padrões: 3D, geométricos, florais, infantis. Instalação profissional e consultoria de design.",
        "image": "https://maxi-decoracoes.lovable.app/papeis-parede-1.png",
        "brand": {
          "@type": "Brand",
          "name": "Maxi Decorações"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Maxi Decorações"
          }
        },
        "category": "Papéis de Parede",
        "pattern": ["3D", "Geométrico", "Floral", "Abstrato", "Infantil"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "98"
        }
      }
    ]
  };

  const images = [
    wallpaperImage,
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/YBg4lPQqvZhrZpja/persiana-horizontal-YNqrO0B2Ejh9npp3.webp"
  ];

  const features = [
    "Aplicação profissional",
    "Coleções exclusivas",
    "Diversos padrões e texturas",
    "Alta qualidade e durabilidade",
    "Papéis importados e nacionais",
    "Consultoria de design",
  ];

  const products = [
    "Papel Vinílico",
    "Papel Texturizado",
    "Papel 3D",
    "Papel Importado",
    "Papel Lavável",
    "Papel Autoadesivo",
  ];

  return (
    <>
      <SEO
        title="Papéis de Parede Modernos e Clássicos | Aplicação Profissional"
        description="Papéis de parede decorativos: vinílicos, texturizados, 3D, importados e autoadesivos. Aplicação profissional, coleções exclusivas. Consultoria de design no Rio de Janeiro."
        keywords="papel de parede, papel vinílico, papel 3D, papel texturizado, papel importado, aplicação papel parede, rio de janeiro"
        canonicalUrl="https://maxidecoracoes.com.br/produtos/papeis-de-parede"
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
                          alt={`Papéis de Parede ${index + 1}`}
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
                <Badge className="mb-4">Design e Personalidade</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Papéis de Parede
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Papéis de parede modernos, clássicos e texturizados. Aplicação profissional para resultado perfeito. Transforme seus ambientes com estilo e sofisticação.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Trabalhamos com <strong>coleções exclusivas</strong> de papéis importados e nacionais, oferecendo diversos padrões, texturas e estilos. Nossa equipe realiza a <strong>aplicação profissional</strong>, garantindo acabamento impecável e durabilidade. Ideal para renovar ambientes residenciais e comerciais com elegância e personalidade.
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

export default PapeisDeParede;
