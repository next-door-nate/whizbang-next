import Container from "./Container";
import linkResolver from "../utils/linkResolver";
import Link from "next/link";

import styles from "./Footer.module.scss";

type FooterProps = {
  footer: {
    nav: Array<any>;
    social: Array<any>;
    copyright: string;
  };
};

export default function Footer({ footer }: FooterProps) {
  if (!footer) {
    return null;
  }

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer} data-noise="true">
      <Container type="normal">
        <div className={styles.wrap}>
          <Link href="/">
            <span className={styles.logo}>Whizbang!</span>
          </Link>

          {footer.nav && (
            <nav className={styles.links}>
              {footer.nav.map((item) => {
                return (
                  <div key={item._key}>
                    <Link
                      href={
                        item.link.external_link ? item.link.external_link : linkResolver(item.link)
                      }
                      title={item.link.title}
                    >
                      {item.link.title}
                    </Link>
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </Container>
      <Container type="normal">
        {footer.copyright && (
          <p className={styles.copyright}>
            &copy; {year} {footer.copyright}
          </p>
        )}
      </Container>
    </footer>
  );
}
