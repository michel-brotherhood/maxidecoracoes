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
        "@id": "https://maxidecoracoes.com.br/#organization",
        "legalName": "Maxi Decoracoes Ltda",
        "name": "Maxi Decorações",
        "alternateName": "MAXI Decorações",
        "url": "https://maxidecoracoes.com.br/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://maxidecoracoes.com.br/favicon.webp",
          "width": "512",
          "height": "512"
        },
        "image": "https://maxidecoracoes.com.br/favicon.webp",
        "description": "Líder em decoração de interiores com mais de 60 anos de tradição (fundada em 1960). Especializada em cortinas sob medida com ateliê próprio, tecidos nobres para decoração e estofamento, pisos vinílicos e laminados, tapetes decorativos e carpetes, papéis de parede e cama mesa e banho. 6 lojas no Rio de Janeiro.",
        "foundingDate": "1960",
        "slogan": "60 anos transformando ambientes com qualidade e tradição",
        "telephone": "+55-21-2622-0754",
        "email": "contato@maxidecoracoes.com.br",
        "vatID": "32.572.893/0001-36",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Miguel de Frias, 40, loja 101",
          "addressLocality": "Niterói",
          "addressRegion": "RJ",
          "postalCode": "24220-002",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-22.9068",
          "longitude": "-43.1089"
        },
        "sameAs": [
          "https://www.instagram.com/maxidecoracoes",
          "https://www.facebook.com/maxidecoracoes"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Niterói"
          },
          {
            "@type": "City",
            "name": "São Gonçalo"
          },
          {
            "@type": "City",
            "name": "Rio de Janeiro"
          }
        ],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://maxidecoracoes.com.br/produtos?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://maxidecoracoes.com.br/#website",
        "url": "https://maxidecoracoes.com.br/",
        "name": "Maxi Decorações",
        "publisher": {
          "@id": "https://maxidecoracoes.com.br/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://maxidecoracoes.com.br/produtos?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://maxidecoracoes.com.br/#webpage",
        "url": "https://maxidecoracoes.com.br/",
        "name": "Maxi Decorações - Cortinas, Tecidos, Pisos e Tapetes no RJ",
        "isPartOf": {
          "@id": "https://maxidecoracoes.com.br/#website"
        },
        "about": {
          "@id": "https://maxidecoracoes.com.br/#organization"
        },
        "description": "60 anos oferecendo tecidos nobres, cortinas sob medida, pisos vinílicos, tapetes e papéis de parede no Rio de Janeiro. 6 lojas em Niterói, São Gonçalo e RJ."
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Tecidos para Decoração",
            "url": "https://maxidecoracoes.com.br/produtos/tecidos"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Cortinas Sob Medida",
            "url": "https://maxidecoracoes.com.br/produtos/cortinas"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Pisos Vinílicos",
            "url": "https://maxidecoracoes.com.br/produtos/pisos"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Tapetes",
            "url": "https://maxidecoracoes.com.br/produtos/tapetes"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Papéis de Parede",
            "url": "https://maxidecoracoes.com.br/produtos/papeis-de-parede"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "Cama Mesa e Banho",
            "url": "https://maxidecoracoes.com.br/produtos/cama-mesa-banho"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Maxi Decorações - Cortinas, Tecidos, Pisos e Tapetes no RJ | 60 Anos"
        description="Mais de 60 anos transformando ambientes com cortinas sob medida (ateliê próprio), tecidos nobres, pisos vinílicos, tapetes e papéis de parede. 6 lojas no Rio de Janeiro: Niterói, São Gonçalo e Tijuca. Instalação profissional."
        keywords="cortinas sob medida niterói, tecidos decoração rio de janeiro, pisos vinílicos rj, tapetes decorativos, persianas horizontais, persianas rolô, papéis de parede, cortinas blackout, persiana vertical, maxi decorações, ateliê cortinas niterói"
        canonicalUrl="https://maxidecoracoes.com.br/"
        ogImage="https://maxidecoracoes.com.br/favicon.webp"
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
