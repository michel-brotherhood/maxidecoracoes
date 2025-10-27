import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoMaxi from "@/assets/logo-maxi.svg";

const products = [
  {
    title: "Tecidos & Estofados",
    href: "/produtos/tecidos",
    description: "Tecidos nobres para decoração e estofamento",
  },
  {
    title: "Cortinas & Persianas",
    href: "/produtos/cortinas",
    description: "Soluções elegantes em cortinas e persianas",
  },
  {
    title: "Pisos & Revestimentos",
    href: "/produtos/pisos",
    description: "Pisos vinílicos, laminados e porcelanatos",
  },
  {
    title: "Tapetes & Carpetes",
    href: "/produtos/tapetes",
    description: "Tapetes decorativos e carpetes de alta qualidade",
  },
  {
    title: "Papéis de Parede",
    href: "/produtos/papeis-de-parede",
    description: "Papéis de parede modernos e clássicos",
  },
  {
    title: "Cama Mesa & Banho",
    href: "/produtos/cama-mesa-banho",
    description: "Roupa de cama, toalhas e acessórios",
  },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg" 
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <img 
                src={logoMaxi} 
                alt="Maxi Decorações" 
                className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <a
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Início
            </a>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Produtos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={product.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{product.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {product.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="/sobre"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Sobre
            </a>

            <a
              href="/contato"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Contato
            </a>
          </div>

          {/* Desktop Contact Info & CTA - Right */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end gap-1">
              <a 
                href="mailto:contato@maxidecoracoes.com.br" 
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>contato@maxidecoracoes.com.br</span>
              </a>
              <a 
                href="tel:+552126220754" 
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>(21) 2622-0754</span>
              </a>
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=552126220754&text=Bem+vindos+%C3%A0+Maxi+Decora%C3%A7%C3%B5es&type=phone_number&app_absent=0", "_blank")}
            >
              SOLICITAR ORÇAMENTO
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-border animate-fade-in-up">
            <a
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Produtos</p>
              <div className="pl-4 space-y-2">
                {products.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/sobre"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>

            <a
              href="/contato"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>

            <div className="pt-2 space-y-2 border-t border-border">
              <a 
                href="mailto:contato@maxidecoracoes.com.br" 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>contato@maxidecoracoes.com.br</span>
              </a>
              <a 
                href="tel:+552126220754" 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>(21) 2622-0754</span>
              </a>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => {
                setIsMenuOpen(false);
                window.open("https://api.whatsapp.com/send/?phone=552126220754&text=Bem+vindos+%C3%A0+Maxi+Decora%C3%A7%C3%B5es&type=phone_number&app_absent=0", "_blank");
              }}
            >
              SOLICITAR ORÇAMENTO
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
