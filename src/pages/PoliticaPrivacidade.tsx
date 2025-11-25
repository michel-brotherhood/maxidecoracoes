import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";

const PoliticaPrivacidade = () => {
  return (
    <>
      <SEO
        title="Política de Privacidade - Maxi Decorações"
        description="Política de Privacidade e Proteção de Dados da Maxi Decorações conforme LGPD"
        canonicalUrl="https://maxidecoracoes.com.br/politica-privacidade"
      />
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Política de <span className="gradient-text">Privacidade</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
              <p>
                A Maxi Decorações coleta informações para fornecer melhores serviços aos nossos usuários. 
                Coletamos informações das seguintes formas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informações que você nos fornece, como nome, e-mail, telefone e mensagem no formulário de contato</li>
                <li>Informações coletadas automaticamente, como endereço IP, tipo de navegador e páginas visitadas</li>
                <li>Cookies e tecnologias similares para melhorar sua experiência de navegação</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder às suas solicitações e dúvidas</li>
                <li>Melhorar nossos serviços e produtos</li>
                <li>Enviar informações sobre produtos e promoções (apenas com seu consentimento)</li>
                <li>Analisar o uso do site para otimização</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais ou regulatórias</li>
                <li>Com prestadores de serviços que nos auxiliam na operação do site (sujeitos a acordos de confidencialidade)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo. Você pode configurar 
                seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL 
                para transmissão de dados sensíveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Eliminação dos dados tratados com seu consentimento</li>
                <li>Revogação do consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades 
                para as quais foram coletadas, incluindo requisitos legais, contábeis ou de relatórios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                quaisquer alterações significativas publicando a nova política nesta página e atualizando 
                a data de "última atualização".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, 
                entre em contato conosco:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li><strong>E-mail:</strong> contato@maxidecoracoes.com.br</li>
                <li><strong>Telefone:</strong> (21) 2622-0754</li>
                <li><strong>Endereço:</strong> Rua Miguel de Frias, 40, loja 101 - Icaraí, Niterói/RJ - CEP 24220-002</li>
              </ul>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
