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
import tapetes1 from "@/assets/tapetes-1.png";
import tapetes2 from "@/assets/tapetes-2.png";
import tapetes3 from "@/assets/tapetes-3.png";
import tapetes4 from "@/assets/tapetes-4.png";
import beaulieuLogo from "@/assets/brands/beaulieu.gif";
import edantexTapetesLogo from "@/assets/brands/edantex-tapetes.jpg";
import niazitexLogo from "@/assets/brands/niazitex.jpg";
import tapetesSaoCarlosLogo from "@/assets/brands/tapetes-sao-carlos.jpg";

const Tapetes = () => {
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
            "name": "Tapetes",
            "item": "https://maxidecoracoes.com.br/produtos/tapetes"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://maxidecoracoes.com.br/produtos/tapetes#product",
        "name": "Tapetes e Carpetes Decorativos",
        "description": "Ampla variedade de tapetes e carpetes para todos os ambientes. Materiais sustentáveis, designs exclusivos e tecnologia de alta durabilidade. Marcas São Carlos, Edantex e Niazitex.",
        "image": "https://maxi-decoracoes.lovable.app/tapetes-1.png",
        "brand": [
          {
            "@type": "Brand",
            "name": "São Carlos"
          },
          {
            "@type": "Brand",
            "name": "Edantex"
          },
          {
            "@type": "Brand",
            "name": "Niazitex"
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
        "category": "Tapetes e Carpetes",
        "material": ["Sustentável", "Antialérgico", "Durável"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "156"
        }
      }
    ]
  };

  const images = [
    tapetes1,
    tapetes2,
    tapetes3,
    tapetes4
  ];

  const brands = [
    { name: "Beaulieu", logo: beaulieuLogo },
    { name: "Edantex", logo: edantexTapetesLogo },
    { name: "Niazitex", logo: niazitexLogo },
    { name: "Tapetes São Carlos", logo: tapetesSaoCarlosLogo },
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
        canonicalUrl="https://maxidecoracoes.com.br/produtos/tapetes"
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
                <Badge className="mb-4">Variedades e Qualidade</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Tapetes
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A Maxi Decorações oferece uma ampla variedade de tapetes para uso residencial e comercial, nacionais e importados. Fornecidos por renomadas marcas como Beaulieu, Edantex, Niazitex e Tapetes São Carlos.
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

        <Reviews />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Tapetes;
