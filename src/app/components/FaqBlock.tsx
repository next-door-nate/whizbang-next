import Container from "./Container";
import styles from "./FaqBlock.module.scss";
import RichTextRenderer from "./RichTextRenderer";

type FaqBlockProps = {
  block: {
    title?: string;
    subtitle?: Array<any>;
    faqs: Array<{
      _key: string;
      question: string;
      answer: Array<any>;
    }>;
  };
};

export default function FaqBlock({ block }: FaqBlockProps) {
  return (
    <section className={styles.block} data-element="faq_block">
      <Container type="normal">
        <div className={styles.copy}>
          {block.title && <h2 className={styles.title}>{block.title}</h2>}
          {block.subtitle && (
            <div className={styles.subtitle}>
              <RichTextRenderer blocks={block.subtitle} />
            </div>
          )}
        </div>

        {block.faqs.length > 0 && (
          <div className={styles.faqs}>
            {block.faqs.map((faq, i) => {
              return (
                // <details key={faq._key} open={i == 0 ? true : false}>
                //   {faq.question && <summary>{faq.question}</summary>}
                //   {faq.answer && <RichTextRenderer blocks={faq.answer} />}
                // </details>
                <details className="group" key={faq._key}>
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 py-2 hover:text-gray-500 transition duration-300">
                    <span className="text-3xl">{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </summary>
                  {faq.answer && <RichTextRenderer blocks={faq.answer} />}
                </details>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
