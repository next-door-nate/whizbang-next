import Container from "./Container";
import RichTextRenderer from "./RichTextRenderer";
import styles from "./RichTextBlock.module.scss";

type RichTextBlockProps = {
  block: {
    center: boolean;
    rich_text: React.ReactNode;
  };
};

export default function RichTextBlock({ block }: RichTextBlockProps) {
  return (
    <section className={styles.block} data-block="rich_text_block" data-center={block.center}>
      <Container type="inset">
        <RichTextRenderer blocks={block.rich_text} />
      </Container>
    </section>
  );
}
