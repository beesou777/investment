export interface blogType {
  name: string;
  details: string;
  imgUrl: string;
}

export interface ImportMeta {
  env: {
    BASE_URL: string;
  };
}

export interface Service {
  title: string;
  desc: string;
  imgLink?: string;
  icons?: string;
}

export interface Feature {
  title: string;
  desc: string;
  image: string;
}

export interface MileStone {
  title: string;
  data: number;
}

export interface Services {
  name: string;
  icon: string;
  link: string;
}

export interface ContactHeader {
  title: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
  icons: string;
}

export interface Faq {
  Q: string;
  A: string;
}

export interface SchemaQuestion {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface SchemaFAQ {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: SchemaQuestion[];
}
