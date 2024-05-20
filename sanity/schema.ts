import { type SchemaTypeDefinition } from "sanity";
import page from "./schemas/page";
import meta from "./schemas/meta";
import blocks from "./schemas/blocks";
import bannerHome from "./schemas/bannerHome";
import bannerPage from "./schemas/bannerPage";
import richText from "./schemas/richText";
import cta from "./schemas/cta";
import post from "./schemas/post";
import header from "./schemas/header";
import navItem from "./schemas/navItem";
import footer from "./schemas/footer";
import theme from "./schemas/theme";
import globalConfig from "./schemas/globalConfig";
import faqBlock from "./schemas/faqBlock";
import separator from "./schemas/separator";
import richTextBlock from "./schemas/richTextBlock";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //documents
    page,
    post,
    header,
    footer,
    theme,
    globalConfig,

    //blocks
    blocks,
    bannerHome,
    bannerPage,
    faqBlock,
    separator,
    richTextBlock,

    //utilities
    meta,
    richText,
    cta,
    navItem,
  ],
};
