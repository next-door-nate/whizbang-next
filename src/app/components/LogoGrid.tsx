import RichTextRenderer from "./RichTextRenderer";
import styles from "./LogoGrid.module.scss";
import Container from "./Container";
import { LogoGridBlock } from "@/types/content";

type LogoGridProps = {
  block: LogoGridBlock;
};

export default function LogoGrid({ block }: LogoGridProps) {
  return (
    <section className={styles.block} data-block="logo_grid">
      <Container type="normal">
        <div className={styles.lede}>
          {block.lede.eyebrow && (
            <span className="eyebrow">{block.lede.eyebrow}</span>
          )}
          <h2>{block.lede.title}</h2>
          <RichTextRenderer blocks={block.lede.subtitle} />
        </div>
        {block.logos && (
          <div className={styles.logos}>
            {block.logos.map((company) => {
              return (
                <div key={company._key} className={styles.logo}>
                  <img
                    src={company.image.url}
                    alt={company.image.alt}
                    width={company.image.width}
                    height={company.image.height}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
