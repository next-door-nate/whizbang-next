import BannerHome from "./BannerHome";
import BannerPage from "./BannerPage";
import FaqBlock from "./FaqBlock";
import LogoGrid from "./LogoGrid";
import RichTextBlock from "./RichTextBlock";
import Separator from "./Separator";
import TwoUp from "./TwoUp";

type BaseBlock = {
  _key: string;
  _type: string;
};

type BannerHomeBlock = BaseBlock & { _type: "banner_home" };
type BannerPageBlock = BaseBlock & { _type: "banner_page" };
type FaqBlockType = BaseBlock & { _type: "faq_block" };
type SeparatorBlock = BaseBlock & { _type: "separator" };
type RichTextBlockType = BaseBlock & { _type: "rich_text_block" };
type TwoUpBlock = BaseBlock & { _type: "two_up" };
type LogoGridBlock = BaseBlock & { _type: "logo_grid" };

type KnownBlock =
  | BannerHomeBlock
  | BannerPageBlock
  | FaqBlockType
  | SeparatorBlock
  | RichTextBlockType
  | TwoUpBlock
  | LogoGridBlock;

type UnknownBlock = BaseBlock & {
  _type: Exclude<string, KnownBlock["_type"]>;
};

export type PageBlock = KnownBlock | UnknownBlock;

type BlockRendererMap = {
  [K in KnownBlock["_type"]]: (props: { block: Extract<KnownBlock, { _type: K }> }) => JSX.Element;
};

const BLOCK_COMPONENTS: BlockRendererMap = {
  banner_home: ({ block }) => <BannerHome banner={block} />,
  banner_page: ({ block }) => <BannerPage banner={block} />,
  faq_block: ({ block }) => <FaqBlock block={block} />,
  separator: ({ block }) => <Separator separator={block} />,
  rich_text_block: ({ block }) => <RichTextBlock block={block} />,
  two_up: ({ block }) => <TwoUp block={block} />,
  logo_grid: ({ block }) => <LogoGrid block={block} />,
};

type BlocksProps = {
  blocks?: PageBlock[];
};

function UnknownBlockFallback({ block }: { block: BaseBlock }) {
  console.warn(`[Blocks] Unknown block type: ${block._type}`, block);
  return <p>{block._type}</p>;
}

function isKnownBlock(block: PageBlock): block is KnownBlock {
  return block._type in BLOCK_COMPONENTS;
}

export default function Blocks({ blocks }: BlocksProps) {
  if (!blocks?.length) {
    return null;
  }

  return (
    <>
      {blocks.map((block) => {
        if (!isKnownBlock(block)) {
          return <UnknownBlockFallback key={block._key} block={block} />;
        }

        const BlockComponent = BLOCK_COMPONENTS[block._type];
        return <BlockComponent key={block._key} block={block} />;
      })}
    </>
  );
}
