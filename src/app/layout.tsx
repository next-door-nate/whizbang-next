import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/theme.scss";
import "./styles/globals.scss";
import "./styles/typography.scss";
import { client } from "./utils/sanity/client";
import OptimizedImage from "./components/OptimizedImage";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  let meta = await client.fetch<Metadata>(`*[_type == "globalConfig"][0]{
    meta{
      title,
      description,
      image,
    }
  }`);

  return {
    title: meta?.title,
    description: meta?.description,
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      images: [
        {
          url: "/og-image.png",
          width: "1200",
          height: "630",
        },
      ],
      url: "https://nextjs.org",
      siteName: "Next.js",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
