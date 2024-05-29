import { defineType, defineField } from "sanity";

export default defineType({
  type: "object",
  name: "two_up",
  title: "Two Up",
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
      type: "image",
      name: "image",
      title: "Image",
      fields: [
        defineField({
          type: "string",
          name: "alt",
          title: "Alt text",
        }),
      ],
    }),
    defineField({
      type: "boolean",
      name: "reverse_layout",
      title: "Reverse Layout?",
      description: "Turn this on if you want to flip the image and text around",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `Two Up`,
        subtitle: title,
      };
    },
  },
});
