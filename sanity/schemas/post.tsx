import type { Rule } from "@sanity/types";

export default {
  type: "document",
  name: "post",
  title: "Posts",
  icon: () => <span style={{ fontSize: "1rem" }}>📰</span>,
  groups: [
    { name: "main", title: "Main", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    //
    // === Main ===
    //

    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "main",
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: "blocks",
      name: "blocks",
      title: "Page Content",
      group: "main",
    },
    {
      type: "meta",
      name: "meta",
      group: "seo",
    },
  ],
};
