import { type SchemaTypeDefinition } from "sanity";
import page from "./schemas/page";
import meta from "./schemas/meta";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //documents
    page,

    //blocks

    //utilities
    meta,
  ],
};
