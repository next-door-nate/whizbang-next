import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "faq_block",
  title: "FAQ Block",
  fields: [
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
      name: "faqs",
      title: "FAQs",
      of: [
        {
          type: "object",
          name: "faq",
          title: "FAQ",
          fields: [
            {
              type: "string",
              name: "question",
              title: "Question",
            },
            {
              type: "rich_text",
              name: "answer",
              title: "Answer",
            },
          ],
        },
      ],
    }),
    defineField({
      type: "boolean",
      name: "is_dark",
      title: "Dark background?",
      description: "Show the block with a dark background.",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `FAQ Block`,
        subtitle: title,
      };
    },
  },
});
