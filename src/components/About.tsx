import { Award, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Produtos de alta qualidade com garantia e durabilidade",
    color: "text-orange-500",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe especializada para auxiliar em seu projeto",
    color: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Tendências e Inovação",
    description: "Sempre atualizados com as últimas tendências de decoração",
    color: "text-purple-500",
  },
  {
    icon: Heart,
    title: "Paixão pelo Detalhe",
    description: "Cuidado especial em cada etapa do seu projeto",
    color: "text-red-500",
  },
];

export const About = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleFeatures.includes(index)) {
              setVisibleFeatures((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent),0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a{" "}
            <span className="gradient-text">Maxi Decorações</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Com anos de experiência no mercado de decoração, a Maxi Decorações se consolidou como referência em qualidade e excelência. Oferecemos soluções completas para transformar ambientes residenciais e comerciais em espaços únicos e sofisticados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`text-center group transition-all duration-700 ${
                  visibleFeatures.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-accent mb-2">5000+</div>
            <div className="text-muted-foreground">Projetos Realizados</div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfação Garantida</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="gradient" 
            size="lg" 
            className="rounded-full"
            onClick={() => window.location.href = '/sobre'}
          >
            Conheça Nossa História Completa
          </Button>
        </div>
      </div>
    </section>
  );
};
