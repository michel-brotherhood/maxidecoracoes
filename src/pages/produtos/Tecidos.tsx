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
import tecidos1 from "@/assets/tecidos-1.png";
import tecidos2 from "@/assets/tecidos-2.png";
import tecidos3 from "@/assets/tecidos-3.png";
import tecidos4 from "@/assets/tecidos-4.png";
import branylLogo from "@/assets/brands/branyl.png";
import corttexLogo from "@/assets/brands/corttex.png";
import dajuLogo from "@/assets/brands/daju.jpg";
import dohlerLogo from "@/assets/brands/dohler.gif";
import edantexLogo from "@/assets/brands/edantex.jpg";
import fiamaLogo from "@/assets/brands/fiama.png";
import karstenLogo from "@/assets/brands/karsten.png";
import nazarethLogo from "@/assets/brands/nazareth.png";

const Tecidos = () => {
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
            "item": "https://maxi-decoracoes.lovable.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Produtos",
            "item": "https://maxi-decoracoes.lovable.app/produtos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tecidos",
            "item": "https://maxi-decoracoes.lovable.app/produtos/tecidos"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://maxi-decoracoes.lovable.app/produtos/tecidos#product",
        "name": "Tecidos para Decoração e Estofamento",
        "description": "Ampla variedade de tecidos nobres: decorativos, estofados, veludos, linhos, blackout. Marcas Karsten, Döhler, Edantex. Tecidos especializados AquaBlock, WaterBlock e AquaTec para proteção contra água e manchas.",
        "image": "https://maxi-decoracoes.lovable.app/tecidos-1.png",
        "brand": [
          {
            "@type": "Brand",
            "name": "Karsten"
          },
          {
            "@type": "Brand",
            "name": "Döhler"
          },
          {
            "@type": "Brand",
            "name": "Edantex"
          },
          {
            "@type": "Brand",
            "name": "Nazareth"
          },
          {
            "@type": "Brand",
            "name": "Fiama"
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
        "category": "Tecidos para Decoração",
        "material": ["Veludo", "Linho", "Blackout", "Voil", "Impermeável"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        }
      }
    ]
  };

  const images = [
    tecidos1,
    tecidos2,
    tecidos3,
    tecidos4
  ];

  const brands = [
    { name: "Branyl", logo: branylLogo },
    { name: "Corttex", logo: corttexLogo },
    { name: "Daju", logo: dajuLogo },
    { name: "Döhler", logo: dohlerLogo },
    { name: "Edantex", logo: edantexLogo },
    { name: "Fiama", logo: fiamaLogo },
    { name: "Karsten", logo: karstenLogo },
    { name: "Nazareth", logo: nazarethLogo },
  ];

  const features = [
    "Ampla variedade de tecidos",
    "Tecidos para paredes e estofados",
    "Cortinas, linhos e voil",
    "Marcas renomadas",
    "Tecidos especializados (AquaBlock, WaterBlock, AquaTec)",
    "Consultoria especializada",
  ];

  const products = [
    "Tecidos Decorativos",
    "Tecidos para Estofamento",
    "Veludos e Linhos",
    "Tecidos Blackout",
    "Voil e Tules",
    "Tecidos Impermeáveis",
  ];

  return (
    <>
      <SEO
        title="Tecidos para Decoração e Estofamento | Karsten, Döhler - Maxi"
        description="Ampla variedade de tecidos nobres para decoração e estofamento: veludos, linhos, blackout, tecidos impermeáveis. Marcas Karsten, Döhler, Edantex. Consultoria especializada no RJ."
        keywords="tecidos decoração, tecidos estofamento, veludo, linho, blackout, karsten, döhler, tecidos rio de janeiro"
        canonicalUrl="https://maxi-decoracoes.lovable.app/produtos/tecidos"
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
                          alt={`Tecidos ${index + 1}`}
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
              <Card className="bg-gradient-to-br from-secondary/20 to-background border-2">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-6 text-foreground text-center">Trabalhamos com as melhores marcas</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {brands.map((brand, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 aspect-square"
                      >
                        <img 
                          src={brand.logo} 
                          alt={`Logo ${brand.name}`} 
                          className="max-h-16 max-w-full w-auto h-auto object-contain"
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
                <Badge className="mb-4">Variedades</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Tecidos
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Nosso catálogo de tecidos oferece uma ampla gama de opções para paredes, estofados, cortinas, linhos e voil, com marcas renomadas como Karsten, Nazareth, Fiama, Corttex, Daruj e Döhler, Edantex, Branyl, conhecidas por sua qualidade e durabilidade.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Oferecemos tecidos especializados como <strong>AquaBlock</strong>, <strong>WaterBlock</strong> e <strong>AquaTec</strong>, ideais para ambientes que necessitam de proteção contra água e manchas. Nossa equipe especializada está pronta para auxiliar na escolha do tecido perfeito para cada projeto, seja para decoração, estofamento de móveis ou confecção de cortinas.
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
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://assets.zyrosite.com/YBg4lPQqvZhrZpja/ecotec-24-A1aJKZ9y6KtpL1jg.pdf', '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Catálogo EcoTec - Fiama Tecidos 2024
                  </Button>
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

export default Tecidos;
