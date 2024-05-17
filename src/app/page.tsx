import Image from "next/image";

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
    }
  }`);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <h1 className="text-3xl font-bold">{home.title}</h1>
      <h2>{home.meta?.title}</h2>
    </main>
  );
}
