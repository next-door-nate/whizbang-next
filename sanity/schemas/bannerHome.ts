import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "banner_home",
  title: "Banner Home",
  fields: [
    defineField({
      type: "string",
      name: "eyebrow",
      title: "Eyebrow",
    }),
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "rich_text",
      name: "subtitle",
      title: "Subtitle",
    }),
    defineField({
      type: "array",
      name: "ctas",
      title: "CTAs",
      of: [{ type: "cta" }],
    }),
    defineField({
      type: "boolean",
      name: "center",
      title: "Center content?",
    }),
    defineField({
      type: "boolean",
      name: "show_dots",
      title: "Show Dots",
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Background Image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt text",
        },
      ],
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Banner Home",
        subtitle: title,
      };
    },
  },
});
