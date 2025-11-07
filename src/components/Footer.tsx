import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.webp";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoIcon} 
                alt="Maxi Decorações" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">maxi</span>
                <span className="text-xs uppercase tracking-[0.3em] text-background/70">DECORAÇÕES</span>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Sua referência em decoração de alta qualidade desde 1990.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/produtos" className="hover:text-background transition-colors">Tecidos</a></li>
              <li><a href="/produtos" className="hover:text-background transition-colors">Cortinas</a></li>
              <li><a href="/produtos" className="hover:text-background transition-colors">Pisos</a></li>
              <li><a href="/produtos" className="hover:text-background transition-colors">Tapetes</a></li>
              <li><a href="/produtos" className="hover:text-background transition-colors">Papéis de Parede</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/sobre" className="hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="/contato" className="hover:text-background transition-colors">Contato</a></li>
              <li><a href="/politica-privacidade" className="hover:text-background transition-colors">Política de Privacidade</a></li>
              <li className="pt-2">
                <a href="mailto:contato@maxidecoracoes.com.br" className="hover:text-background transition-colors">
                  contato@maxidecoracoes.com.br
                </a>
              </li>
              <li>
                <a href="tel:+552126220754" className="hover:text-background transition-colors">
                  (21) 2622-0754
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Maxi Decorações. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por{" "}
            <a 
              href="https://idlab.art.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
            >
              ID_Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
