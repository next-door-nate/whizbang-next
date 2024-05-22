import Container from "./Container";
import linkResolver from "../utils/linkResolver";
import Link from "next/link";

import styles from "./Footer.module.scss";
import RichTextRenderer from "./RichTextRenderer";

type FooterProps = {
  footer: {
    nav: Array<any>;
    social: Array<any>;
    copyright: string;
    blurb: Array<any>;
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
          <div className={styles.info}>
            <Link href="/">
              <span className={styles.logo}>Whizbang!</span>
            </Link>

            {footer.blurb && (
              <div className={styles.blurb}>
                <RichTextRenderer blocks={footer.blurb} />
              </div>
            )}

            {footer.social && (
              <div className={styles.social}>
                <nav>
                  {footer.social.map((platform) => {
                    return (
                      <div key={platform._key}>
                        <Link
                          href={platform.link}
                          title={`Follow me on ` + platform.name}
                          target="_blank"
                        >
                          {platform.name}
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>
            )}
          </div>

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

      {footer.copyright && (
        <Container type="normal">
          <p className={styles.copyright}>
            &copy; {year} {footer.copyright}
          </p>
        </Container>
      )}
    </footer>
  );
}
