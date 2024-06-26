import Link from "next/link";
import linkResolver from "./linkResolver";

export const serializers = {
  marks: {
    link: ({ children, mark }) => (
      <a href={mark.href} target={mark.new_tab ? "_blank" : "_self"}>
        {children}
      </a>
    ),
    link_main: ({ children, mark }) => (
      <Link
        href={linkResolver(mark.linkObj)}
        title={children}
        target={mark.new_tab ? "_blank" : "_self"}
      >
        {children}
      </Link>
    ),
    anchor: ({ children, mark }) => <span id={mark.anchor_name}>{children}</span>,
  },
};
