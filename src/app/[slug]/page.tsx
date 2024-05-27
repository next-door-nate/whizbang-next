import Image from "next/image";

import { client } from "../utils/sanity/client";
import { pageQuery, globalConfigQuery, metaQuery } from "../utils/queries";
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

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  let defaultMeta = await client.fetch(`*[_type == "globalConfig"][0]{
    meta{
      ${metaQuery}
    }
  }`);

  let page = await client.fetch<Page>(`*[_type == "page" && slug.current == "${params.slug}"][0]{
    "meta": meta{
      ${metaQuery}
    },
    slug,
    _type,
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
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
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