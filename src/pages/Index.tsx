import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/components/SEO";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://maxi-decoracoes.lovable.app/#organization",
        "name": "Maxi Decorações",
        "url": "https://maxi-decoracoes.lovable.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://maxi-decoracoes.lovable.app/logo-maxi.svg"
        },
        "description": "Líder em decoração de interiores com 30 anos de experiência. Especializada em cortinas sob medida, tecidos nobres, pisos vinílicos, tapetes e papéis de parede.",
        "telephone": "+55-21-2622-0754",
        "email": "contato@maxidecoracoes.com.br",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "sameAs": [
          "https://www.instagram.com/maxidecoracoes",
          "https://www.facebook.com/maxidecoracoes"
        ],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://maxi-decoracoes.lovable.app/produtos?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://maxi-decoracoes.lovable.app/#website",
        "url": "https://maxi-decoracoes.lovable.app/",
        "name": "Maxi Decorações",
        "publisher": {
          "@id": "https://maxi-decoracoes.lovable.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://maxi-decoracoes.lovable.app/produtos?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://maxi-decoracoes.lovable.app/#webpage",
        "url": "https://maxi-decoracoes.lovable.app/",
        "name": "Maxi Decorações - Cortinas, Tecidos, Pisos e Tapetes no RJ",
        "isPartOf": {
          "@id": "https://maxi-decoracoes.lovable.app/#website"
        },
        "about": {
          "@id": "https://maxi-decoracoes.lovable.app/#organization"
        },
        "description": "30 anos oferecendo tecidos nobres, cortinas sob medida, pisos vinílicos, tapetes e papéis de parede no Rio de Janeiro. 6 lojas em Niterói, São Gonçalo e RJ."
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Tecidos para Decoração",
            "url": "https://maxi-decoracoes.lovable.app/produtos/tecidos"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Cortinas Sob Medida",
            "url": "https://maxi-decoracoes.lovable.app/produtos/cortinas"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Pisos Vinílicos",
            "url": "https://maxi-decoracoes.lovable.app/produtos/pisos"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Tapetes",
            "url": "https://maxi-decoracoes.lovable.app/produtos/tapetes"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Papéis de Parede",
            "url": "https://maxi-decoracoes.lovable.app/produtos/papeis-de-parede"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "Cama Mesa e Banho",
            "url": "https://maxi-decoracoes.lovable.app/produtos/cama-mesa-banho"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Maxi Decorações - Cortinas, Tecidos, Pisos e Tapetes no RJ"
        description="30 anos oferecendo tecidos nobres, cortinas sob medida, pisos vinílicos, tapetes e papéis de parede no Rio de Janeiro. 6 lojas em Niterói, São Gonçalo e RJ. Qualidade garantida."
        keywords="cortinas sob medida, tecidos decoração, pisos vinílicos, tapetes, papéis de parede, persianas, decoração interiores rio de janeiro"
        canonicalUrl="https://maxi-decoracoes.lovable.app/"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Products />
        <About />
        <FAQ />
        <Reviews />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </>
  );
};

export default Index;
