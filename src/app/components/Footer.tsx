import Container from "./Container";
import linkResolver from "../utils/linkResolver";
import Link from "next/link";

import styles from "./Footer.module.scss";
import RichTextRenderer from "./RichTextRenderer";
import SocialIcon from "./SocialIcon";

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
            <Link href="/" title={`Home`}>
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
                      <Link
                        href={platform.link}
                        title={platform.name}
                        target="_blank"
                        key={platform._key}
                      >
                        <SocialIcon url={platform.link} />
                      </Link>
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
                  <div className={styles.column} key={item._key}>
                    <Link
                      href={
                        item.link.external_link
                          ? item.link.external_link
                          : linkResolver(item.link)
                      }
                      title={item.link.title}
                    >
                      {item.link.title}
                    </Link>

                    {item.link.linklist?.length > 0 && (
                      <nav className={styles.sublinks}>
                        {item.link.linklist.map((sublink: any) => {
                          return (
                            <Link
                              key={sublink._key}
                              href={
                                sublink.external_link
                                  ? sublink.external_link
                                  : linkResolver(sublink.link)
                              }
                              title={sublink.title}
                            >
                              {sublink.title}
                            </Link>
                          );
                        })}
                      </nav>
                    )}
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
