import Image from "next/image";

import { client } from "../utils/sanity/client";

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

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let page = await client.fetch<Page>(`
    *[_type == "page" && slug.current == "${slug}"][0]{
      _id,
      slug,
      title,
      meta{
        title,
        description,
        image,
      }
    }`);

  console.log(page, slug);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <h1>{params.slug}</h1>
      <h3>{page?.meta?.title}</h3>
    </main>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await client.fetch<Page[]>(`*[_type == "page"]`);

  return pages.map((page: any) => ({
    slug: page.slug.current,
  }));
}
