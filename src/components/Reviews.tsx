import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoIcon from "@/assets/logo-icon.webp";

const reviews = [
  {
    name: "Maria Silva",
    rating: 5,
    comment: "Excelente atendimento! Encontrei exatamente o que procurava. A equipe é muito atenciosa e os produtos são de ótima qualidade.",
    date: "Há 2 semanas",
    avatar: "MS"
  },
  {
    name: "João Santos",
    rating: 5,
    comment: "Melhor loja de decoração de Niterói! Variedade incrível de tecidos e cortinas. Recomendo muito!",
    date: "Há 1 mês",
    avatar: "JS"
  },
  {
    name: "Ana Paula",
    rating: 5,
    comment: "Atendimento personalizado e produtos de primeira linha. Já é a terceira vez que compro aqui e sempre saio satisfeita.",
    date: "Há 3 semanas",
    avatar: "AP"
  },
  {
    name: "Carlos Eduardo",
    rating: 5,
    comment: "Profissionais super capacitados! Me ajudaram a escolher os melhores tecidos para meu projeto. Entrega rápida e instalação perfeita.",
    date: "Há 1 semana",
    avatar: "CE"
  },
  {
    name: "Beatriz Costa",
    rating: 5,
    comment: "Ambiente agradável, produtos de excelente qualidade e preços justos. Voltarei com certeza!",
    date: "Há 2 meses",
    avatar: "BC"
  },
  {
    name: "Roberto Lima",
    rating: 5,
    comment: "Mais de 30 anos de tradição fazem toda a diferença. Conhecimento técnico e atendimento impecável.",
    date: "Há 1 mês",
    avatar: "RL"
  }
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary),0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos produtos e serviços
          </p>
        </div>

        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="animate-fade-in"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img 
                          src={logoIcon} 
                          alt="Maxi Decorações" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{review.name}</h3>
                        <div className="flex gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                      <p className="text-muted-foreground pl-6 relative">
                        {review.comment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Avaliações anteriores"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Ir para página ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Próximas avaliações"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <p className="text-3xl font-bold gradient-text mb-1">4.9/5.0</p>
                  <p className="text-sm text-muted-foreground">Média de avaliações</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-left">
                  <p className="text-3xl font-bold gradient-text mb-1">500+</p>
                  <p className="text-sm text-muted-foreground">Avaliações no Google</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
