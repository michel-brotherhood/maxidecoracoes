import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Sparkles, Heart, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Trabalhamos apenas com produtos de alta qualidade das melhores marcas nacionais e internacionais.",
  },
  {
    icon: Users,
    title: "Atendimento Especializado",
    description: "Nossa equipe é treinada e capacitada para oferecer as melhores soluções para cada cliente.",
  },
  {
    icon: Sparkles,
    title: "Inovação Constante",
    description: "Sempre buscando as últimas tendências e inovações do mercado de decoração.",
  },
  {
    icon: Heart,
    title: "Compromisso e Paixão",
    description: "Fazemos o que amamos com dedicação e compromisso em cada projeto.",
  },
  {
    icon: Target,
    title: "Foco no Cliente",
    description: "Seu projeto é único e merece atenção especial em todos os detalhes.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Contínuo",
    description: "Expandindo e melhorando nossos serviços constantemente para melhor atendê-lo.",
  },
];

const Sobre = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "Sobre a Maxi Decorações",
        "description": "Conheça nossa história: 60 anos de tradição em decoração de interiores, 6 lojas e mais de 5000 clientes atendidos",
        "url": "https://maxidecoracoes.com.br/sobre",
        "mainEntity": {
          "@id": "https://maxi-decoracoes.lovable.app/#organization"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://maxidecoracoes.com.br/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Sobre",
              "item": "https://maxidecoracoes.com.br/sobre"
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://maxidecoracoes.com.br/#organization",
        "legalName": "Maxi Decoracoes Ltda",
        "name": "Maxi Decorações",
        "foundingDate": "1960",
        "vatID": "32.572.893/0001-36",
        "description": "Com mais de 60 anos de experiência, a Maxi Decorações é referência em decoração de interiores no Rio de Janeiro, oferecendo produtos de alta qualidade e atendimento especializado.",
        "slogan": "60 anos transformando ambientes com qualidade e tradição",
        "telephone": "+55-21-2622-0754",
        "email": "contato@maxidecoracoes.com.br",
        "url": "https://maxidecoracoes.com.br/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://maxidecoracoes.com.br/favicon.webp"
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "50+"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Miguel de Frias, 40, loja 101",
          "addressLocality": "Niterói",
          "addressRegion": "RJ",
          "postalCode": "24220-002",
          "addressCountry": "BR"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Niterói"
          },
          {
            "@type": "City",
            "name": "São Gonçalo"
          },
          {
            "@type": "City",
            "name": "Rio de Janeiro"
          }
        ],
        "knowsAbout": [
          "Decoração de Interiores",
          "Cortinas sob medida",
          "Tecidos decorativos",
          "Pisos vinílicos",
          "Tapetes e carpetes",
          "Papéis de parede",
          "Persianas"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Sobre a Maxi Decorações | 60 Anos em Decoração de Interiores"
        description="60 anos de experiência em decoração. 6 lojas no Rio de Janeiro, 5000+ clientes atendidos. Conheça nossa história, missão, visão e valores em decoração de interiores premium."
        keywords="sobre maxi decorações, história, empresa decoração, rio de janeiro, niterói, são gonçalo"
        canonicalUrl="https://maxidecoracoes.com.br/sobre"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sobre a <span className="gradient-text">Maxi Decorações</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Com mais de 60 anos de experiência, somos referência em decoração de interiores no Rio de Janeiro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Nossa História</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fundada em 1960, a Maxi Decorações nasceu com o propósito de oferecer produtos de alta qualidade e atendimento diferenciado para o mercado de decoração.
                  </p>
                  <p>
                    Ao longo dos anos, expandimos nossa atuação e hoje contamos com 6 lojas estrategicamente localizadas em Niterói, São Gonçalo e Rio de Janeiro, sempre mantendo nosso compromisso com a excelência.
                  </p>
                  <p>
                    Nossa equipe é formada por profissionais especializados que estão prontos para transformar seus projetos em realidade, oferecendo consultoria personalizada e produtos das melhores marcas do mercado.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Missão</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Proporcionar soluções completas em decoração de interiores, oferecendo produtos de qualidade superior e atendimento especializado que supere as expectativas de nossos clientes.
                  </p>
                  <p className="font-semibold text-foreground">Nossa Visão</p>
                  <p>
                    Ser reconhecida como a principal referência em decoração de interiores no Rio de Janeiro, expandindo nossa atuação e consolidando nossa marca como sinônimo de qualidade, inovação e excelência no atendimento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="text-5xl font-bold gradient-text mb-2">60+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="text-5xl font-bold gradient-text mb-2">6</div>
                <div className="text-muted-foreground">Lojas</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="text-5xl font-bold gradient-text mb-2">5000+</div>
                <div className="text-muted-foreground">Clientes Atendidos</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Sobre;
