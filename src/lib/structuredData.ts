// Centralized Schema Markup utilities for SEO

export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://maxi-decoracoes.lovable.app/#organization",
  "legalName": "Maxi Decoracoes Ltda",
  "name": "Maxi Decorações",
  "alternateName": "MAXI Decorações",
  "url": "https://maxi-decoracoes.lovable.app/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://maxi-decoracoes.lovable.app/favicon.webp",
    "width": "512",
    "height": "512"
  },
  "image": "https://maxi-decoracoes.lovable.app/favicon.webp",
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
  ]
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
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

interface StoreData {
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: [number, number];
  highlight?: boolean;
  specialty?: string;
}

export const getLocalBusinessSchema = (store: StoreData) => {
  const [longitude, latitude] = store.coordinates;
  const addressParts = store.address.split(',');
  const streetAddress = addressParts[0]?.trim() || '';
  const cepMatch = store.address.match(/CEP\s*(\d{5}-\d{3})/);
  const postalCode = cepMatch ? cepMatch[1] : '';
  
  let city = "Niterói";
  if (store.address.includes("São Gonçalo")) city = "São Gonçalo";
  if (store.address.includes("Rio de Janeiro") || store.address.includes("Tijuca")) city = "Rio de Janeiro";

  return {
    "@type": "Store",
    "@id": `https://maxi-decoracoes.lovable.app/#store-${store.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": `Maxi Decorações - ${store.name}`,
    "parentOrganization": {
      "@id": "https://maxi-decoracoes.lovable.app/#organization"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": city,
      "addressRegion": "RJ",
      "postalCode": postalCode,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude.toString(),
      "longitude": longitude.toString()
    },
    "telephone": store.phone.split('|')[0].trim(),
    "openingHoursSpecification": parseOpeningHours(store.hours),
    ...(store.specialty && { "description": store.specialty })
  };
};

const parseOpeningHours = (hoursString: string) => {
  const specs = [];
  const parts = hoursString.split('|');
  
  parts.forEach(part => {
    const trimmed = part.trim();
    if (trimmed.startsWith('Seg-Sex:')) {
      const hours = trimmed.replace('Seg-Sex:', '').trim();
      const [open, close] = hours.split('-').map(h => h.trim());
      specs.push({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": open,
        "closes": close
      });
    } else if (trimmed.startsWith('Sáb:')) {
      const hours = trimmed.replace('Sáb:', '').trim();
      const [open, close] = hours.split('-').map(h => h.trim());
      specs.push({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": open,
        "closes": close
      });
    }
  });
  
  return specs;
};

export const getProductSchema = (product: {
  name: string;
  description: string;
  category: string;
  url: string;
  brands?: string[];
  materials?: string[];
}) => ({
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "category": product.category,
  "url": product.url,
  "brand": product.brands?.map(brand => ({
    "@type": "Brand",
    "name": brand
  })) || [],
  "material": product.materials?.join(", "),
  "offers": {
    "@type": "AggregateOffer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "BRL"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
});
