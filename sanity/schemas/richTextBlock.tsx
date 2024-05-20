import { defineType, defineField } from "sanity";
export default defineType({
  type: "object",
  name: "rich_text_block",
  title: "Rich Text Block",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "rich_text",
      name: "rich_text",
      title: "Rich Text",
    }),
    defineField({
      type: "boolean",
      name: "center",
      title: "Center content?",
      description: "Activate this if you wish to center the content",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      text: "rich_text",
    },
    prepare({ text }) {
      return {
        title: "Rich Text Block",
        subtitle: text ? text[0].children[0].text : "No text entered",
      };
    },
  },
});
