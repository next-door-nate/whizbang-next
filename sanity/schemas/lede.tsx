import { defineType, defineField } from "sanity";

export default defineType({
  type: "object",
  name: "lede",
  title: "Lede",
  description: "The title, subtitle, and overtitle (eyebrow) for most content blocks",
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
  ],
});
