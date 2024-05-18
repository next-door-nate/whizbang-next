import Image from "next/image";
import Blocks from "./components/Blocks";

import { client } from "./utils/sanity/client";

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
    _id,
    slug,
    title,
    meta{
      title,
      description,
      image,
    },
    blocks[],
  }`);

  console.log(home);
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <Blocks blocks={home.blocks} />
    </main>
  );
}
