import RichTextRenderer from "./RichTextRenderer";
import styles from "./BannerHome.module.scss";
import Container from "./Container";
import Link from "next/link";
import linkResolver from "../utils/linkResolver";

export default function BannerHome({ banner }) {
  return (
    <section
      data-block={banner._type}
      data-center-content={banner.center == true ? true : false}
      className={styles.banner}
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
          {banner.ctas.length > 0 && (
            <nav className={styles.ctas}>
              {banner.ctas.map((cta, i) => {
                return (
                  <Link
                    key={cta._key}
                    href={
                      cta.external_link
                        ? cta.external_link
                        : linkResolver(cta.link)
                    }
                    title={cta.text}
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
      {banner.image && (
        <>
          <img
            className={styles.background}
            src={banner.image.url + `?w=800`}
            alt={banner.image.alt}
            aria-hidden
          />
          {banner.show_dots && <div className="dots"></div>}
        </>
      )}
    </section>
  );
}
