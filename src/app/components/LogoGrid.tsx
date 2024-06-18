import RichTextRenderer from "./RichTextRenderer";
import Image from "next/image";
import styles from "./LogoGrid.module.scss";
import Container from "./Container";
import { NextMiddleware } from "next/server";

type LogoGridProps = {
  block: any;
};

export default function LogoGrid({ block }: LogoGridProps) {
  return (
    <section className={styles.block} data-block="logo_grid">
      <Container type="normal">
        <div className={styles.lede}>
          {block.lede.eyebrow && <span className="eyebrow">{block.lede.eyebrow}</span>}
          <h2>{block.lede.title}</h2>
          <RichTextRenderer blocks={block.lede.subtitle} />
        </div>
        {block.logos && (
          <div className={styles.logos}>
            {block.logos.map((company: any, i: number) => {
              return (
                <div key={company._key} className={styles.logo}>
                  <img src={company.image.url} alt={company.image.alt} />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
