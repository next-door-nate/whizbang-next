import Container from "./Container";
import styles from "./Separator.module.scss";

type separatorProps = {
  separator: {
    theme: string;
    style: string;
  };
};

export default function Separator({ separator }: separatorProps) {
  return (
    <section className={styles.separator} data-block="separator" aria-hidden="true">
      <Container type="normal">
        <div
          className={styles.line}
          data-theme={separator.theme}
          data-style={separator.style}
        ></div>
      </Container>
    </section>
  );
}
