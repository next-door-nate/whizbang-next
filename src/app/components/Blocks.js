import BannerHome from "./BannerHome";
import FaqBlock from "./FaqBlock";

export default function Blocks({ blocks }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block._type) {
            case "banner_home":
              return <BannerHome banner={block} key={block._key} />;
            case "faq_block":
              return <FaqBlock block={block} key={block._key} />;
          }

          return <p key={`noblockfound-` + i}>{block._type}</p>;
        })}
    </>
  );
}
