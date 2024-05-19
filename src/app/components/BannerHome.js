import RichTextRenderer from "./RichTextRenderer";
import styles from "./BannerHome.module.scss";
import Container from "./Container";

export default function BannerHome({ banner }) {
  return (
    <section data-block={banner._type} className={styles.banner}>
      <Container type="normal">
        {banner.title && <h1>{banner.title}</h1>}
        {banner.subtitle && <RichTextRenderer blocks={banner.subtitle} />}
        {banner.ctas.length > 0 &&
          banner.ctas.map((cta) => {
            return <div key={cta._key}>{cta.text}</div>;
          })}
      </Container>
    </section>
  );
}
