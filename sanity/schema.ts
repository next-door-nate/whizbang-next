import { type SchemaTypeDefinition } from "sanity";
import page from "./schemas/page";
import meta from "./schemas/meta";
import blocks from "./schemas/blocks";
import bannerHome from "./schemas/bannerHome";
import richText from "./schemas/richText";
import cta from "./schemas/cta";
import post from "./schemas/post";
import header from "./schemas/header";
import navItem from "./schemas/navItem";
import footer from "./schemas/footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //documents
    page,
    post,
    header,
    footer,

    //blocks
    blocks,
    bannerHome,

    //utilities
    meta,
    richText,
    cta,
    navItem,
  ],
};
