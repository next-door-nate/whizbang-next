import { client } from "./utils/sanity/client";
import { globalConfigQuery, pageQuery } from "./utils/queries";
import Layout from "./components/Layout";
import Blocks from "./components/Blocks";
import type { Metadata } from "next";

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
  let home = await client.fetch<Page>(`*[_type == "page" && slug.current == "home"][0]{
    "meta": {
      title,
      description,
      image,
    }
  }`);

  return {
    title: home.meta?.title,
    description: home.meta?.description,
    openGraph: {
      title: home.meta?.title,
      description: home.meta?.description,
    },
  };
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
