import { client } from "../utils/sanity/client";
import { pageQuery, globalConfigQuery, metaQuery } from "../utils/queries";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks";
import { GlobalConfigContent, MetaData, PageContent } from "@/types/content";

type PageMetaResult = {
  meta?: MetaData;
  slug?: {
    current: string;
  };
  _type?: string;
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

  let page = await client.fetch<PageMetaResult>(`*[_type == "page" && slug.current == "${params.slug}"][0]{
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
  let globalConfig = await client.fetch<GlobalConfigContent>(globalConfigQuery);
  const { slug } = params;
  let page = await client.fetch<PageContent>(`
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
  let pages = await client.fetch<PageContent[]>(`*[_type == "page"]`);

  return pages
    .filter((page) => page.slug?.current)
    .map((page) => ({
      slug: page.slug!.current,
    }));
}
