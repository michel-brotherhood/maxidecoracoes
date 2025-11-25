import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Há quanto tempo a Maxi Decorações está no mercado?",
      answer: "A Maxi Decorações atua há mais de 60 anos no mercado de decoração, oferecendo produtos de alta qualidade e atendimento personalizado para nossos clientes."
    },
    {
      question: "Quais produtos vocês trabalham?",
      answer: "Oferecemos uma ampla variedade de produtos incluindo cortinas e persianas sob medida, tecidos para decoração e estofamento, pisos vinílicos e laminados, tapetes e carpetes, papéis de parede, e produtos de cama, mesa e banho."
    },
    {
      question: "Vocês fazem instalação dos produtos?",
      answer: "Sim! Temos equipe especializada para instalação profissional de todos os nossos produtos, garantindo o melhor acabamento e durabilidade. A instalação é feita por profissionais experientes."
    },
    {
      question: "Onde estão localizadas as lojas?",
      answer: "Temos 6 lojas estrategicamente localizadas no Rio de Janeiro: em Niterói, São Gonçalo e outras regiões do RJ. Entre em contato conosco para encontrar a loja mais próxima de você."
    },
    {
      question: "Vocês trabalham com quais marcas?",
      answer: "Trabalhamos com as melhores marcas do mercado como Persiana Suprema, Persianas Gabriel, cortinas trilho Suisso, persianas Maxi, Eucatex, Durafloor, Tarkett, Finottato, Tapetes São Carlos, Edantex, Niazitex, Karsten, Döhler, entre outras marcas renomadas."
    },
    {
      question: "Como faço para solicitar um orçamento?",
      answer: "Você pode solicitar um orçamento através do nosso WhatsApp, pelo formulário de contato no site, ou visitando uma de nossas lojas. Nossa equipe está pronta para atendê-lo e apresentar as melhores soluções para o seu projeto."
    },
    {
      question: "Vocês atendem projetos comerciais?",
      answer: "Sim! Atendemos tanto projetos residenciais quanto comerciais, oferecendo soluções completas em decoração para escritórios, hotéis, restaurantes e diversos tipos de estabelecimentos."
    },
    {
      question: "Há garantia nos produtos?",
      answer: "Sim, todos os nossos produtos possuem garantia do fabricante e garantimos a qualidade dos serviços de instalação realizados pela nossa equipe."
    }
  ];

  // Add FAQPage Schema for rich snippets
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });

    // Remove existing schema if present
    const existing = document.getElementById('faq-schema');
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const schemaElement = document.getElementById('faq-schema');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};