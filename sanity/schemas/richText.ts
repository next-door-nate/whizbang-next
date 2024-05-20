import { LinkIcon, StarIcon } from "@sanity/icons";
import { allDocumentTypes } from "../utils/referenceHelper";
export default {
  name: "rich_text",
  type: "array",
  title: "Rich text",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "Link",
            name: "link_main",
            type: "object",
            icon: LinkIcon,
            fields: [
              {
                type: "reference",
                name: "link",
                title: "Link",
                to: allDocumentTypes,
              },
              {
                title: "External Link",
                name: "external_link",
                type: "url",
                validation: (Rule: any) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                type: "boolean",
                title: "Open in new tab?",
                name: "new_tab",
                initialValue: false,
              },
            ],
            options: {
              modal: {
                type: "popover",
                width: "large", // the default is "small"
              },
            },
          },
          {
            title: "Custom HTML",
            name: "custom_html",
            type: "object",
            icon: StarIcon,
            fields: [
              {
                title: "html",
                name: "html",
                type: "text",
              },
            ],
          },
        ],
      },
    },
  ],
};
