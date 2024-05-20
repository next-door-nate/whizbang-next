export const headerQuery = `
  nav[]{
    _key,
    'link':{
      title,
      "_type": page->_type,
      "slug": page->slug,
      external_link,
      linklist[]{
        _key,
        "link": {
          'title': subLink.title,
        }
      }
    },
  },
`;

export const footerQuery = `
  nav[]{
    _key,
    'link':{
      title,
      "_type": page->_type,
      "slug": page->slug,
      external_link,
      linklist[]{
        _key,
        "link": {
          'title': subLink.title,
        }
      }
    },
  },
  social[]{
    _key,
    name,
    link,
    'icon': icon.asset->url,
  },
  copyright,
`;

export const metaQuery = `
  title,
  description,
  image,
`;

export const blocksQuery = `
  _type,
  _key,

  _type == "banner_home" => {
    eyebrow,
    title,
    subtitle,
    ctas[]{
      _key,
      text,
      link{
        "_type": @->_type,
        "slug": @->slug,
      },
      external_link,
      tracking{
        analytics_id,
        utm_params,
      },
    },
    image,
  },

  _type == "faq_block" => {
    title,
    subtitle,
    faqs[]{
      _key,
      question,
      answer,
    },
  },
`;

export const pageQuery = `
  _type,
  _id,
  title,
  slug,
  meta{
    ${metaQuery}
  },
  blocks[]{
    ${blocksQuery}
  },
`;

export const globalConfigQuery = `
*[_type == "globalConfig"][0]{
  
  'header': theme->header_menu-> {
    ${headerQuery}
  },
  'footer': theme->footer_menu-> {
    ${footerQuery}
  },
  theme->{
    ...,
  },
}
`;
