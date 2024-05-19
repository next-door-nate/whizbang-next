import Image from "next/image";
import Blocks from "./components/Blocks";

import { client } from "./utils/sanity/client";
import { blocksQuery, globalConfigQuery, pageQuery } from "./utils/queries";
import Layout from "./components/Layout";

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
