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
  blurb,
  nav[]{
    _key,
    'link':{
      title,
      "_type": page->_type,
      "slug": page->slug,
      external_link,
      linklist[]{
        _key,
        title,
        external_link,
        "page": {
          "_type":page->_type,
          "slug": page->slug,
        },  
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

export const richTextQuery = `
  ...,
  asset->{
    ...,
    "_key": _id
  },
  markDefs[]{
    ...,
    _type == "link_main" => {
      "linkObj": {
        "_type": link->_type,
        "slug": link->slug,
        "external_link": external_link
      },
    },
  },
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

  _type == "banner_page" => {
    eyebrow,
    title,
    subtitle,
    center,
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
      answer[]{
        ${richTextQuery}
      },
    },
  },

  _type == "separator" => {
    theme,
    style,
  },

  _type == "rich_text_block" => {
    center,
    rich_text[]{
      ${richTextQuery}
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
