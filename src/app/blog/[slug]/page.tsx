import Image from "next/image";

import { client } from "../../utils/sanity/client";

type Post = {
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
  let post = await client.fetch<Post>(`
    *[_type == "post" && slug.current == "${slug}"][0]{
      _id,
      slug,
      title,
      meta{
        title,
        description,
        image,
      }
    }`);

  console.log(post, slug);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <h1 className="text-l">{post.title}</h1>
      <h3>{post?.meta?.title}</h3>
    </main>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`);

  return posts.map((post) => ({
    slug: post.slug?.current,
  }));
}
