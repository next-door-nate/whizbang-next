import { defineType, defineField } from "sanity";

export default defineType({
  type: "object",
  name: "logo_grid",
  title: "Logo Grid",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
  ],
});
