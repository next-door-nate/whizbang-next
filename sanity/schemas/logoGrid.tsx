import { defineType, defineField } from "sanity";

export default defineType({
  type: "object",
  name: "logo_grid",
  title: "Logo Grid",
  fields: [
    defineField({
      type: "lede",
      name: "lede",
      title: "Lede",
    }),
    defineField({
      type: "array",
      name: "logos",
      title: "Logos",
      of: [
        defineField({
          type: "object",
          name: "logo",
          title: "Logo",
          fields: [
            defineField({
              type: "string",
              name: "name",
              title: "Name",
            }),
            defineField({
              type: "image",
              name: "image",
              title: "Logo",
              fields: [
                defineField({
                  type: "string",
                  name: "alt",
                  title: "Alt text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "lede",
    },
    prepare({ title }) {
      return {
        title: "Logo Grid",
        subtitle: title.title,
      };
    },
  },
});
