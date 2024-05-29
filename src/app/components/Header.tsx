"use client"

import Link from "next/link";
import Container from "./Container";

import styles from "./Header.module.scss";
import linkResolver from "../utils/linkResolver";
import { useState } from "react";

type HeaderProps = {
  header: {
    nav: Array<any>;
    logo: string;
    ctas: Array<any>;
  };
};

export default function Header({ header }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);


  function toggleMenu(){
    console.log('woooo')
  }

  return (
    <>
      <header className={styles.header} data-element="header">
        <Container type="normal">
          <div className={styles.wrap}>
            <div className={styles.left}>
              <Link href="/">
                <span className={styles.logo}>
                  <span>Whizbang!</span>
                </span>
              </Link>
              {header.nav && (
                <nav>
                  {header.nav.map((item: any, i: number) => {
                    return (
                      <div key={item._key} className={styles.item} onMouseEnter={item.link.linklist?.length > 0 ? () => {setShowMenu(!showMenu)}: null} onMouseLeave={item.link.linklist?.length > 0 ? () => {setShowMenu(!showMenu)}: null} onClick={item.link.linklist?.length > 0 ? () => {setShowMenu(!showMenu)}: null}>
                        {item.link.linklist?.length > 0 ? (
                          <>
                          <button title={item.link.title}>
                            {item.link.title}
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L4 4L7 1" stroke="black"/>
                            </svg>
                          </button>
                          <nav className={styles.dropdown} data-show={showMenu}>
                            {item.link.linklist.map((sublink: any) => {
                              return (
                                <div key={sublink._key}>
                                  <Link href={sublink.external_link ? sublink.external_link : linkResolver(sublink.link)} title={sublink.title}>{sublink.title}</Link>
                                  </div>
                              )
                            })}
                          </nav>
                          </>
                        )
                        :
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
                      }
                      </div>
                    );
                  })}
                </nav>
              )}
            </div>

            {header.ctas.length > 0 && 
            <nav className={styles.right}>
              {header.ctas.map((item, i) => {
                return(
                  <Link key={item._key} href={item.external_link ? item.external_link : linkResolver(item.link)} className="button" data-button={i == 0 ? "primary" : "text"} title={item.text}>{item.text}</Link>
                )
              })}
            </nav>
            }
          </div>
        </Container>
      </header>
    </>
  );
}
