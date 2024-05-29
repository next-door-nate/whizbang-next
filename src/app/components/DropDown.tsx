import { useState } from "react";
import linkResolver from "../utils/linkResolver";
import styles from "./DropDown.module.scss";
import Link from "next/link";

type DropDownProps = {
  dropdown: {
    link: {
      title: string;
      _type: string;
      linklist: Array<any>;
      slug: {
        current: string;
      };
    };
  };
};

export default function DropDownMenu({ dropdown }: DropDownProps) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={styles.item}
      onMouseEnter={
        dropdown.link.linklist?.length > 0
          ? () => {
              setShowMenu(!showMenu);
            }
          : undefined
      }
      onMouseLeave={
        dropdown.link.linklist?.length > 0
          ? () => {
              setShowMenu(!showMenu);
            }
          : undefined
      }
      onClick={
        dropdown.link.linklist?.length > 0
          ? () => {
              setShowMenu(!showMenu);
            }
          : undefined
      }
    >
      <button title={dropdown.link.title} data-drop-active="">
        {dropdown.link.title}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L4 4L7 1" stroke="black" />
        </svg>
      </button>

      <nav className={styles.dropdown} data-show={showMenu}>
        {dropdown.link.linklist.map((sublink: any) => {
          return (
            <div key={sublink._key}>
              <Link
                href={
                  sublink.external_link
                    ? sublink.external_link
                    : linkResolver(sublink.link)
                }
                title={sublink.title}
              >
                {sublink.title}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
