import Container from "./Container";
import styles from "./FaqBlock.module.scss";
import RichTextRenderer from "./RichTextRenderer";

type FaqBlockProps = {
  block: {
    title?: string;
    subtitle?: Array<any>;
    faqs: {
      question: string;
      answer: Array<any>;
    };
  };
};

export default function FaqBlock({ block }: FaqBlockProps) {
  return (
    <section className={styles.block} data-element="faq_block">
      <Container type="normal">
        {block.title && <h2>{block.title}</h2>}
        {block.subtitle && <RichTextRenderer blocks={block.subtitle} />}
      </Container>
    </section>
  );
}
