import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import textilesImage from "@/assets/products-textiles.jpg";
import flooringImage from "@/assets/products-flooring.jpg";
import curtainsImage from "@/assets/products-curtains.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const productCategories = [
  {
    title: "Tecidos & Estofados",
    subtitle: "Variedade e Qualidade",
    description: "Ampla variedade de tecidos nobres para decoração, estofamento e projetos especiais. Tecidos importados e nacionais das melhores marcas.",
    image: textilesImage,
    products: ["Tecidos Decorativos", "Tecidos para Estofamento", "Veludos e Linhos", "Tecidos Blackout"],
    features: [
      "Tecidos importados e nacionais",
      "Marcas renomadas",
      "Consultoria especializada",
      "Amostras disponíveis"
    ],
    link: "/produtos/tecidos"
  },
  {
    title: "Cortinas & Persianas",
    subtitle: "Tudo sob Medida",
    description: "Oferecemos persianas e cortinas sob medida, além de cortinas prontas. Nosso ateliê próprio combina funcionalidade e design elegante, garantindo produtos de alta qualidade.",
    image: curtainsImage,
    products: ["Cortinas Sob Medida", "Persianas Horizontais", "Persianas Verticais", "Persianas Rolô", "Trilho Suisso"],
    features: [
      "Ateliê próprio",
      "Medição gratuita",
      "Instalação profissional",
      "Automação disponível"
    ],
    brands: ["MAXI Ateliê Cortinas", "Gabriel Persianas", "MAXI Persianas", "Trilho Suisso"],
    link: "/produtos/cortinas"
  },
  {
    title: "Pisos & Revestimentos",
    subtitle: "Beleza e Durabilidade",
    description: "Pisos vinílicos, laminados e porcelanatos de alta qualidade. Instalação especializada e garantia.",
    image: flooringImage,
    products: ["Piso Vinílico", "Laminado", "Porcelanato", "Rodapés"],
    features: [
      "Instalação especializada",
      "Garantia de qualidade",
      "Diversas texturas",
      "Manutenção fácil"
    ],
    link: "/produtos/pisos"
  },
  {
    title: "Tapetes & Carpetes",
    subtitle: "Conforto e Estilo",
    description: "Tapetes decorativos e carpetes para todos os ambientes. Diversos tamanhos, cores e texturas para cada necessidade.",
    image: textilesImage,
    products: ["Tapetes Decorativos", "Carpetes Residenciais", "Carpetes Comerciais", "Passadeiras"],
    features: [
      "Sob medida disponível",
      "Alta durabilidade",
      "Fácil manutenção",
      "Várias cores e padrões"
    ],
    link: "/produtos/tapetes"
  },
  {
    title: "Papéis de Parede",
    subtitle: "Design e Personalidade",
    description: "Papéis de parede modernos, clássicos e texturizados. Aplicação profissional para resultado perfeito.",
    image: curtainsImage,
    products: ["Papel Vinílico", "Papel Texturizado", "Papel 3D", "Papel Importado"],
    features: [
      "Aplicação profissional",
      "Coleções exclusivas",
      "Diversos padrões",
      "Alta qualidade"
    ],
    link: "/produtos/papeis-de-parede"
  },
  {
    title: "Cama Mesa & Banho",
    subtitle: "Conforto e Sofisticação",
    description: "Roupa de cama, toalhas de banho, toalhas de mesa e acessórios de alta qualidade para seu conforto.",
    image: textilesImage,
    products: ["Roupa de Cama", "Toalhas de Banho", "Toalhas de Mesa", "Acessórios"],
    features: [
      "Tecidos de qualidade",
      "Diversas marcas",
      "Enxovais completos",
      "Presente ideal"
    ],
    link: "/produtos/cama-mesa-banho"
  },
];

const Produtos = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Produtos de Decoração - Maxi Decorações",
    "description": "Catálogo completo: tecidos, cortinas, persianas, pisos, tapetes, papéis de parede e cama mesa banho",
    "url": "https://maxi-decoracoes.lovable.app/produtos"
  };
  
  return (
    <>
      <SEO
        title="Produtos para Decoração | Cortinas, Tecidos e Pisos - Maxi"
        description="Catálogo completo de produtos para decoração: tecidos nobres, cortinas sob medida, persianas, pisos vinílicos, tapetes, papéis de parede e cama mesa banho. Qualidade premium."
        keywords="catálogo decoração, produtos decoração, tecidos, cortinas, pisos, tapetes, papéis de parede"
        canonicalUrl="https://maxi-decoracoes.lovable.app/produtos"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navigation />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="gradient-text">Produtos</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nossa linha completa de produtos para decoração de interiores. Qualidade premium e atendimento especializado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productCategories.map((category, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 cursor-pointer"
                onClick={() => navigate(category.link)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.title} - ${category.description.substring(0, 80)} - Maxi Decorações`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-3 bg-primary/90 backdrop-blur-sm">
                      {category.subtitle}
                    </Badge>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-foreground">Produtos Disponíveis</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map((product, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-xs text-foreground">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {category.features && (
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Diferenciais</h4>
                      <div className="space-y-2">
                        {category.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {category.brands && (
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-xs mb-2 text-muted-foreground">Qualidade garantida por:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.brands.map((brand, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    variant="gradient" 
                    className="w-full rounded-full group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(category.link);
                    }}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Precisa de ajuda para escolher?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe especializada está pronta para auxiliar você na escolha dos produtos ideais para seu projeto.
                </p>
                <Button variant="gradient" size="lg" className="rounded-full">
                  Fale com um Especialista
                </Button>
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

export default Produtos;
