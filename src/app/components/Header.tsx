import Link from "next/link";
import Container from "./Container";

import styles from "./Header.module.scss";
import linkResolver from "../utils/linkResolver";

type HeaderProps = {
  header: {
    nav: Array<any>;
    logo: string;
    ctas: Array<any>;
  };
};

export default function Header({ header }: HeaderProps) {
  return (
    <>
      <header className={styles.header} data-element="header">
        <Container type="normal">
          <div className={styles.wrap}>
            <div className={styles.left}>
              <Link href="/">
                <span className={styles.logo}>
                  <span>Whizbang!</span>
                </span>
              </Link>
              {header.nav && (
                <nav>
                  {header.nav.map((item: any) => {
                    return (
                      <div key={item._key}>
                        <Link
                          href={
                            item.link.external_link
                              ? item.link.external_link
                              : linkResolver(item.link)
                          }
                        >
                          {item.link.title}
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              )}
            </div>

            <div className={styles.right}>
              <button>Contact</button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
