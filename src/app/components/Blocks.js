import BannerHome from "./BannerHome";
import BannerPage from "./BannerPage";
import FaqBlock from "./FaqBlock";
import RichTextBlock from "./RichTextBlock";
import Separator from "./Separator";
import TwoUp from "./TwoUp";
import LogoGrid from "./LogoGrid";

export default function Blocks({ blocks }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block._type) {
            case "banner_home":
              return <BannerHome banner={block} key={block._key} />;
            case "banner_page":
              return <BannerPage banner={block} key={block._key} />;
            case "faq_block":
              return <FaqBlock block={block} key={block._key} />;
            case "separator":
              return <Separator separator={block} key={block._key} />;
            case "rich_text_block":
              return <RichTextBlock block={block} key={block._key} />;
            case "two_up":
              return <TwoUp block={block} key={block._key} />;
            case "logo_grid":
              return <LogoGrid block={block} key={block._key} />;
          }

          return <p key={`noblockfound-` + i}>{block._type}</p>;
        })}
    </>
  );
}
