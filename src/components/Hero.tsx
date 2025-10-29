import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, Award, Zap, Package, Handshake } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 sm:pt-20 lg:pt-24">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-primary/20 rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 bg-primary/15 rounded-tl-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-primary uppercase tracking-wide">
                <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-primary" />
                Decoração de Excelência
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Transformamos
              <br />
              <span className="gradient-text">Seu Ambiente</span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Há 30 anos oferecendo soluções completas em decoração. Tecidos nobres, cortinas sob medida, 
              pisos e revestimentos que trazem elegância e conforto para o seu lar.
            </p>
            
            {/* Quality Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 pt-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <span className="text-xs lg:text-sm font-semibold text-foreground text-center lg:text-left">Garantia</span>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <span className="text-xs lg:text-sm font-semibold text-foreground text-center lg:text-left">Rapidez</span>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <span className="text-xs lg:text-sm font-semibold text-foreground text-center lg:text-left">Estoque Próprio</span>
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <span className="text-xs lg:text-sm font-semibold text-foreground text-center lg:text-left">Confiança</span>
              </div>
            </div>
          </div>
          
          {/* Right Video */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] animate-fade-in order-1 lg:order-2 overflow-hidden rounded-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-sm z-10 pointer-events-none" />
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full h-full object-cover"
              aria-label="Vídeo mostrando produtos elegantes da Maxi Decorações: cortinas sob medida, tecidos nobres e decoração de interiores"
            />
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-16 max-w-4xl mx-auto lg:mx-0">
          <div className="bg-primary hover:bg-primary/95 text-primary-foreground p-6 lg:p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            onClick={() => {
              window.open("https://api.whatsapp.com/send/?phone=552126220754&text=Bem+vindos+%C3%A0+Maxi+Decora%C3%A7%C3%B5es&type=phone_number&app_absent=0", "_blank");
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-foreground/10 rounded-full group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8" />
              </div>
              <div>
                <p className="text-sm lg:text-base text-primary-foreground/80 mb-1">Precisa de Ajuda?</p>
                <p className="text-lg lg:text-xl font-bold">Fale com um Representante</p>
              </div>
            </div>
          </div>

          <div className="bg-card hover:bg-accent/5 border-2 border-primary/20 p-6 lg:p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            onClick={() => window.location.href = "/produtos"}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                <ShoppingBag className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm lg:text-base text-muted-foreground mb-1">Explore Nosso Catálogo</p>
                <p className="text-lg lg:text-xl font-bold text-foreground">Conheça Nossos Produtos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
