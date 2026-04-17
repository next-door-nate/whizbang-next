export type Slug = {
  current: string;
};

export type InternalLink = {
  _type: string;
  slug: Slug;
};

export type NavSubLink = {
  _key: string;
  title: string;
  external_link?: string;
  link: InternalLink;
};

export type NavLink = {
  title: string;
  _type?: string;
  slug?: Slug;
  external_link?: string;
  linklist?: NavSubLink[];
};

export type NavItem = {
  _key: string;
  link: NavLink;
};

export type CtaLink = {
  _key: string;
  text: string;
  link: InternalLink;
  external_link?: string;
};

export type HeaderContent = {
  nav: NavItem[];
  logo?: string;
  ctas: CtaLink[];
};

export type FooterSocialLink = {
  _key: string;
  name: string;
  link: string;
  icon?: string;
};

export type FooterContent = {
  nav: NavItem[];
  social: FooterSocialLink[];
  copyright?: string;
  blurb?: unknown[];
};

export type MetaData = {
  title?: string;
  description?: string;
  image?: string;
};

export type LogoGridBlock = {
  _type: "logo_grid";
  _key: string;
  lede: {
    eyebrow?: string;
    title: string;
    subtitle: unknown[];
  };
  logos?: Array<{
    _key: string;
    name?: string;
    image: {
      url: string;
      alt?: string;
      blurHash?: string;
      width?: number;
      height?: number;
    };
  }>;
};

export type ContentBlock =
  | LogoGridBlock
  | {
      _type: string;
      _key: string;
      [key: string]: unknown;
    };

export type PageContent = {
  _id: string;
  _type?: string;
  title?: string;
  meta?: MetaData;
  slug?: Slug;
  blocks?: ContentBlock[];
};

export type GlobalConfigContent = {
  header: HeaderContent;
  footer: FooterContent;
};
