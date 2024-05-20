import Image from "next/image";

import { client } from "../utils/sanity/client";
import { pageQuery, globalConfigQuery } from "../utils/queries";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks";

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
  blocks: Array<any>;
};

export default async function Home({ params }: { params: { slug: string } }) {
  let globalConfig = await client.fetch(globalConfigQuery);
  const { slug } = params;
  let page = await client.fetch<Page>(`
    *[_type == "page" && slug.current == "${slug}"][0]{
      ${pageQuery}
    }`);

  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <Blocks blocks={page.blocks} />
    </Layout>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  let pages = await client.fetch<Page[]>(`*[_type == "page"]`);

  return pages.map((page: any) => ({
    slug: page.slug.current,
  }));
}
