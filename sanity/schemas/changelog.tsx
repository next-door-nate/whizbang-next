import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "changelog",
  title: "Changelog",
  icon: () => <span style={{ fontSize: "1rem" }}>✨</span>,
  groups: [
    { name: "main", title: "Main", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      group: "main",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "main",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "date",
      name: "date",
      title: "Date",
      group: "main",
      options: {
        dateFormat: "MMM Do, YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      group: "main",
      fields: [
        defineField({
          type: "string",
          name: "alt",
          title: "Alt text",
        }),
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: "rich_text",
      name: "change_blurb",
      title: "Change Blurb",
      group: "main",
    }),

    defineField({
      type: "array",
      name: "change_items",
      title: "Change Items",
      group: "main",
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          type: "object",
          name: "change",
          title: "Change",
          fields: [
            defineField({
              type: "string",
              name: "title",
              title: "Title",
            }),
            defineField({
              type: "string",
              name: "change_type",
              title: "Change type",
              options: {
                list: [
                  { title: "New Feature", value: "New Feature" },
                  { title: "Update", value: "Update" },
                  { title: "Fix", value: "Fix" },
                  { title: "Integration", value: "Integration" },
                ],
              },
            }),
            defineField({
              type: "rich_text",
              name: "change_content",
              title: "Change Content",
            }),
          ],
          preview: {
            select: {
              title: "title",
              type: "change_type",
            },
            prepare({ title, type }) {
              return {
                title: type,
                subtitle: title,
              };
            },
          },
        }),
      ],
    }),
  ],
});
