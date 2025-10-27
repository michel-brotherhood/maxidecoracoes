import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import textilesImage from "@/assets/products-textiles.jpg";
import flooringImage from "@/assets/products-flooring.jpg";
import curtainsImage from "@/assets/products-curtains.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Tecidos & Cortinas",
    description: "Tecidos nobres, cortinas elegantes e persianas modernas para transformar seus ambientes.",
    image: textilesImage,
    badge: "Mais Procurado",
    items: ["Tecidos Decorativos", "Cortinas", "Persianas"],
    link: "/produtos/tecidos",
  },
  {
    title: "Pisos & Carpetes",
    description: "Revestimentos de alta qualidade, tapetes exclusivos e carpetes sofisticados.",
    image: flooringImage,
    badge: "Novidades",
    items: ["Pisos Vinílicos", "Laminados", "Carpetes"],
    link: "/produtos/pisos",
  },
  {
    title: "Papéis de Parede",
    description: "Soluções criativas em papéis de parede com design e funcionalidade.",
    image: curtainsImage,
    badge: "Premium",
    items: ["Modernos", "Clássicos", "Texturizados"],
    link: "/produtos/papeis-de-parede",
  },
];

export const Products = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary),0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Produtos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Qualidade e Elegância em{" "}
            <span className="gradient-text">Cada Detalhe</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de produtos para decoração de interiores
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card 
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 h-full"
                onClick={() => navigate(product.link)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-lg">
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <img
                    src={product.image}
                    alt={`${product.title} - ${product.description} - Maxi Decorações`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-primary/10 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(product.link);
                    }}
                  >
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="gradient"
            size="lg" 
            className="rounded-full text-base px-6 py-5 h-auto shadow-lg"
            onClick={() => window.location.href = '/produtos'}
          >
            Ver Catálogo Completo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
