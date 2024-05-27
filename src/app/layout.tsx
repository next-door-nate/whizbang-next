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
    icons: {
      icon: "/favicon.png",
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