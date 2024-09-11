"use client";

import Link from "next/link";
import Container from "./Container";

import styles from "./Header.module.scss";
import linkResolver from "../utils/linkResolver";
import { useState } from "react";
import DropDownMenu from "./DropDown";

type HeaderProps = {
  header: {
    nav: Array<any>;
    logo: string;
    ctas: Array<any>;
  };
};

export default function Header({ header }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className={styles.header} data-element="header">
        <Container type="normal">
          <div className={styles.wrap}>
            <div className={styles.left}>
              <Link href="/" title="Home">
                <span className={styles.logo}>
                  <span>Whizbang!</span>
                </span>
              </Link>
              {header.nav && (
                <nav>
                  {header.nav.map((item: any, i: number) => {
                    return (
                      <div key={item._key}>
                        {item.link.linklist?.length > 0 ? (
                          <DropDownMenu dropdown={item} key={item._key} />
                        ) : (
                          <Link
                            href={
                              item.link.external_link
                                ? item.link.external_link
                                : linkResolver(item.link)
                            }
                            title={item.link.title}
                          >
                            {item.link.title}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
              )}
            </div>

            {header.ctas.length > 0 && (
              <nav className={styles.right}>
                {header.ctas.map((item, i) => {
                  return (
                    <Link
                      key={item._key}
                      href={
                        item.external_link
                          ? item.external_link
                          : linkResolver(item.link)
                      }
                      className="button"
                      data-button={i == 0 ? "primary" : "text"}
                      title={item.text}
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </nav>
            )}
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              title="Toggle mobile menu"
              className={styles.hamburger}
              data-active={showMenu}
            >
              <div className={styles.patty} data-patty="top"></div>
              <div className={styles.patty} data-patty="middle"></div>
              <div className={styles.patty} data-patty="bottom"></div>
            </button>
          </div>
        </Container>
      </header>

      <div className={styles.menu} data-show-menu={showMenu}>
        <nav className={styles.mobile}>
          <Link href="/" title="Home">
            <span className={styles.logo}>
              <span>Whizbang!</span>
            </span>
          </Link>
          {header.nav && (
            <nav>
              {header.nav.map((item: any, i: number) => {
                return (
                  <div key={item._key}>
                    {item.link.linklist?.length > 0 ? (
                      <DropDownMenu dropdown={item} key={item._key} />
                    ) : (
                      <Link
                        href={
                          item.link.external_link
                            ? item.link.external_link
                            : linkResolver(item.link)
                        }
                        title={item.link.title}
                      >
                        {item.link.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          )}
        </nav>
        <div
          className={styles.backdrop}
          onClick={() => {
            setShowMenu(false);
          }}
        ></div>
      </div>
    </>
  );
}
