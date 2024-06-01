import linkResolver from "../utils/linkResolver";
import Container from "./Container";
import OptimizedImage from "./OptimizedImage";
import RichTextRenderer from "./RichTextRenderer";
import styles from "./TwoUp.module.scss";
import Image from "next/image";
import Link from "next/link";

type TwoUpProps = {
  block: {
    title: string;
    eyebrow: string;
    subtitle: Array<any>;
    ctas: Array<any>;
    image: any;
    blurhash: string;
  };
};

export default function TwoUp({ block }: TwoUpProps) {
  return (
    <section className={styles.block} data-block="two_up">
      <Container type="normal">
        <div className={styles["two-up"]}>
          <div className={styles.content}>
            {block.eyebrow && <span className="eyebrow">{block.eyebrow}</span>}
            <h2>{block.title}</h2>
            {block.subtitle && <RichTextRenderer blocks={block.subtitle} />}
            {block.ctas?.length > 0 && (
              <nav className={styles.ctas}>
                {block.ctas.map((cta) => {
                  return (
                    <div key={cta._key} className={styles.link}>
                      <Link
                        href={
                          cta.external_link
                            ? cta.external_link
                            : linkResolver(cta.link)
                        }
                        title={cta.text}
                      >
                        {cta.text}
                        <span className={styles.icon}>
                          <svg
                            width="5"
                            height="7"
                            viewBox="0 0 5 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1 0.5L4 3.5L1 6.5" stroke="#171D27" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </nav>
            )}
          </div>
          <div className={styles.image}>
            <Image
              src={block.image.url}
              alt={block.image.alt}
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
