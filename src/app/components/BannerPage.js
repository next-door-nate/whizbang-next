import RichTextRenderer from "./RichTextRenderer";
import styles from "./BannerPage.module.scss";
import Container from "./Container";
import Link from "next/link";
import linkResolver from "../utils/linkResolver";

export default function BannerPage({ banner }) {
  return (
    <section
      data-block={banner._type}
      className={styles.banner}
      data-center={banner.center == true ? true : false}
    >
      <Container type="normal">
        <div className={styles.content}>
          {banner.eyebrow && <span className="eyebrow">{banner.eyebrow}</span>}
          {banner.title && <h1>{banner.title}</h1>}
          {banner.subtitle && (
            <div className={styles.subtitle}>
              <RichTextRenderer blocks={banner.subtitle} />
            </div>
          )}
          {banner.ctas?.length > 0 && (
            <nav className={styles.ctas}>
              {banner.ctas.map((cta, i) => {
                return (
                  <Link
                    key={cta._key}
                    href={cta.external_link ? cta.external_link : linkResolver(cta.link)}
                    className="button"
                    data-button={i == 0 ? "primary" : "text"}
                  >
                    {cta.text}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </Container>
    </section>
  );
}
