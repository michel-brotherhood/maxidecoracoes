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
import { Check, Phone, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import finottatoLogo from "@/assets/finottato-logo.webp";
import pisos1 from "@/assets/pisos-1.png";
import pisos2 from "@/assets/pisos-2.png";
import pisos3 from "@/assets/pisos-3.png";
import pisos4 from "@/assets/pisos-4.png";
import durafloorLogo from "@/assets/brands/durafloor.png";
import eucatexLogo from "@/assets/brands/eucatex.png";
import tarkettLogo from "@/assets/brands/tarkett.png";

const Pisos = () => {
  const [brandsVisible, setBrandsVisible] = useState(false);
  const brandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBrandsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (brandsRef.current) {
      observer.observe(brandsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
            "name": "Pisos",
            "item": "https://maxidecoracoes.com.br/produtos/pisos"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://maxidecoracoes.com.br/produtos/pisos#product",
        "name": "Pisos Vinílicos e Laminados",
        "description": "Pisos vinílicos e laminados de alta qualidade com fácil instalação e manutenção. Marcas premium Durafloor e Eucatex. Resistentes, duráveis e com variedade de texturas que imitam madeira e pedra.",
        "image": "https://maxi-decoracoes.lovable.app/pisos-1.png",
        "brand": [
          {
            "@type": "Brand",
            "name": "Durafloor"
          },
          {
            "@type": "Brand",
            "name": "Eucatex"
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Maxi Decorações"
          }
        },
        "category": "Pisos e Revestimentos",
        "material": ["Vinílico", "Laminado"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "89"
        }
      }
    ]
  };

  const images = [
    pisos1,
    pisos2,
    pisos3,
    pisos4
  ];

  const brands = [
    { name: "Eucatex", logo: eucatexLogo },
    { name: "Durafloor", logo: durafloorLogo },
    { name: "Tarkett", logo: tarkettLogo },
    { name: "Finottato", logo: finottatoLogo },
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
        canonicalUrl="https://maxidecoracoes.com.br/produtos/pisos"
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
              <Card ref={brandsRef} className="bg-gradient-to-br from-secondary/20 to-background border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-base mb-5 text-foreground text-center">Trabalhamos com as melhores marcas</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
                    {brands.map((brand, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center justify-center p-5 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-105 min-h-[100px] ${
                          brandsVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{
                          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <img 
                          src={brand.logo} 
                          alt={`Logo ${brand.name}`} 
                          className="max-h-14 max-w-full w-auto h-auto object-contain"
                        />
                      </div>
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

        <Reviews />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Pisos;
