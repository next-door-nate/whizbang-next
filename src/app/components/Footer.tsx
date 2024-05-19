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
        <Link href="/">
          <span className={styles.logo}>Whizbang!</span>
        </Link>
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
