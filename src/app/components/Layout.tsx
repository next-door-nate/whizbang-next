import Header from "./Header";
import Footer from "./Footer";
import { FooterContent, HeaderContent } from "@/types/content";

type LayoutProps = {
  children: React.ReactNode;
  header: HeaderContent;
  footer: FooterContent;
};

export default function Layout({ children, header, footer }: LayoutProps) {
  return (
    <main>
      <Header header={header} />
      <main>{children}</main>
      <Footer footer={footer} />
    </main>
  );
}
