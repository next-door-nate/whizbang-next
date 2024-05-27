import { client } from "./utils/sanity/client";
import { globalConfigQuery, metaQuery, pageQuery } from "./utils/queries";
import Layout from "./components/Layout";
import Blocks from "./components/Blocks";
import { Metadata, ResolvingMetadata } from "next";

type Page = {
  _id: string;
  title?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: any;
  };
  slug?: {
    current: string;
  };
  blocks?: any;
};

export async function generateMetadata() {

  let defaultMeta = await client.fetch(`*[_type == "globalConfig"][0]{
    meta{
      ${metaQuery}
    }
  }`);

  let page = await client.fetch<Page>(`*[_type == "page" && slug.current == "home"][0]{
    "meta": meta{
      ${metaQuery}
    }
  }`);

  return {
    title: page?.meta?.title ? page.meta.title : defaultMeta.meta.title,
    description: page?.meta?.description ? page.meta.description : defaultMeta.meta.description,
    openGraph: {
      title: page?.meta?.title ? page.meta.title : defaultMeta.meta.title,
      description: page?.meta?.description ? page.meta.description : defaultMeta.meta.description,
      images: [
        {
          url: page.meta?.image ? `${page.meta.image}?w=1200` : `${defaultMeta.meta.image}?w=1200`,
          width: "1200",
          height: "630",
        },
      ],
      url: "https://whizbang.pages.dev",
      siteName: "Whizbang!",
    },
  }
}

export default async function Home() {
  let home = await client.fetch<Page>(`*[_type == "page" && slug.current == "home"][0]{
    ${pageQuery}
  }`);

  let globalConfig = await client.fetch(globalConfigQuery);

  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <Blocks blocks={home.blocks} />
    </Layout>
  );
}