import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "separator",
  title: "Separator",
  fields: [
    defineField({
      type: "string",
      name: "theme",
      title: "Theme",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
      initialValue: "light",
    }),
    defineField({
      type: "string",
      name: "style",
      title: "Style",
      options: {
        list: [
          { title: "Dashed", value: "dashed" },
          { title: "Fade", value: "fade" },
          { title: "Solid", value: "solid" },
        ],
      },
      initialValue: "fade",
    }),
  ],
  preview: {
    select: {
      theme: "theme",
      style: "style",
    },
    prepare({ theme, style }) {
      return {
        title: "Separator",
        subtitle:
          theme.charAt(0).toUpperCase() +
          theme.slice(1) +
          " | " +
          style.charAt(0).toUpperCase() +
          style.slice(1),
      };
    },
  },
});
