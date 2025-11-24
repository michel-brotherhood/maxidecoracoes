import { Facebook, Instagram } from "lucide-react";
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
            <p className="text-background/70 text-sm mb-3">
              Há mais de 60 anos oferecendo soluções completas em decoração com qualidade e elegância.
            </p>
            <div className="text-background/70 text-xs space-y-1">
              <p className="font-semibold">Maxi Decoracoes Ltda</p>
              <p>CNPJ: 32.572.893/0001-36</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/produtos/pisos" className="hover:text-background transition-colors">Piso Laminado</a></li>
              <li><a href="/produtos/pisos" className="hover:text-background transition-colors">Piso Vinílico</a></li>
              <li><a href="/produtos/cortinas" className="hover:text-background transition-colors">Persianas Horizontais</a></li>
              <li><a href="/produtos/tecidos" className="hover:text-background transition-colors">Tecido Acquablock</a></li>
              <li><a href="/produtos/tecidos" className="hover:text-background transition-colors">Tecidos para Cortina</a></li>
              <li><a href="/produtos/cortinas" className="hover:text-background transition-colors">Cortinas Modernas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/" className="hover:text-background transition-colors">Início</a></li>
              <li><a href="/produtos" className="hover:text-background transition-colors">Produtos</a></li>
              <li><a href="/sobre" className="hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="/contato" className="hover:text-background transition-colors">Contato</a></li>
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
            </div>
            
            <div className="mt-6">
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="/politica-privacidade" className="hover:text-background transition-colors">Política de Privacidade</a></li>
                <li><a href="/termos-de-uso" className="hover:text-background transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-sm text-background/70 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Maxi Decorações. Todos os direitos reservados.</p>
          <p>
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
