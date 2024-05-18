import { allDocumentTypes } from "../utils/referenceHelper";

export default {
  name: "globalConfig",
  _id: "globalConfig",
  title: "Global Config",
  icon: () => <span style={{ fontSize: "1rem" }}>🌐</span>,
  type: "document",
  groups: [
    { name: "themes", title: "Themes", default: true },
    { name: "seo", title: "SEO" },
    { name: "social", title: "Social" },
    { name: "blog", title: "Blog" },
  ],
  fields: [
    {
      name: "theme",
      title: "Production Theme",
      type: "reference",
      to: { type: "theme" },
      validation: (Rule: any) => Rule.required(),
      group: "themes",
    },
    {
      name: "stagingTheme",
      title: "Staging Theme",
      description:
        "This theme will deploy to any branch/deploy previews, easily view the whole theme while doing development",
      type: "reference",
      to: { type: "theme" },
      validation: (Rule: any) => Rule.required(),
      group: "themes",
    },
    {
      type: "meta",
      name: "meta",
      title: "Meta",
      group: "seo",
    },
    {
      name: "social",
      title: "Social",
      type: "array",
      group: "social",
      of: [
        {
          type: "object",
          name: "account",
          title: "Account",
          fields: [
            {
              type: "string",
              name: "platform",
              title: "Platform",
            },
            {
              type: "string",
              name: "url",
              title: "URL",
            },
          ],
        },
      ],
    },
    // {
    //   type: "object",
    //   name: "blog_settings",
    //   title: "Blog settings",
    //   group: "blog",
    //   fields: [
    //     {
    //       type: 'footer_banner',
    //       name: 'footer_banner',
    //       title: 'Footer Banner',
    //     },
    //   ],
    // },
  ],
  preview: {
    prepare: () => ({ title: "Global Config" }),
  },
};
