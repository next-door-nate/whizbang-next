import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  header: any;
  footer: any;
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
