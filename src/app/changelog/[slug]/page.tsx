import Image from "next/image";

import { client } from "@/app/utils/sanity/client";
import RichTextRenderer from "@/app/components/RichTextRenderer";
import OptimizedImage from "@/app/components/OptimizedImage";

type Changelog = {
  _id: string;
  title?: string;
  slug?: {
    current: string;
  };
  date: string;
  change_blurb: [any];
  image: {
    url: string;
    alt: string;
    blurHash: string;
  };
  change_items: [any];
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let change = await client.fetch<Changelog>(`
    *[_type == "changelog" && slug.current == "${slug}"][0]{
    _id,
        title,
        slug,
        date,
        "image": {
          "url": image.asset->url,
          "alt": image.alt,
          "blurHash": image.asset->metadata.blurHash,
        },
        change_blurb,
        change_items,
    }`);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(Date.parse(change.date)).toLocaleDateString(
    "en-CA",
    options
  );

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 max-w-500">
      <h1 className="text-l">{change.title}</h1>
      <RichTextRenderer blocks={change.change_blurb} />
      <h4>{formattedDate}</h4>
      <Image
        src={change.image.url}
        alt={change.image.alt}
        width={1600}
        height={900}
      />

      <div>
        {change.change_items.length > 0 &&
          change.change_items.map((item) => {
            return (
              <div key={item._id}>
                <span>{item.change_type}</span>
                <h4>{item.title}</h4>
                <RichTextRenderer blocks={item.change_content} />
              </div>
            );
          })}
      </div>
    </main>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const changes = await client.fetch<Changelog[]>(`*[_type == "changelog"]`);

  return changes.map((changelog) => ({
    slug: changelog.slug?.current,
  }));
}
