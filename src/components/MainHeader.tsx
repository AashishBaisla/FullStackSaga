'use client';
import React, { useEffect, useState } from 'react';
import styles from '../styles/MainHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const MainHeader = () => {
  const [active, setActive] = useState<string>('Home');
  const [toggleMenuBar, settoggleMenuBar] = useState(false);

  useEffect(() => {
    const updateSidebarState = () => {
      if (window.innerWidth > 850) {
        settoggleMenuBar(true);
      }
    };
    updateSidebarState();

    window.addEventListener('resize', updateSidebarState);

    return () => {
      window.removeEventListener('resize', updateSidebarState);
    };
  }, []);

  const handleClick = (tab: string) => {
    setActive(tab);
    if (window.innerWidth < 850) {
      settoggleMenuBar(false);
    }
  }

  const tabs = ['Home', 'About', 'Skills', 'Work', 'Experience', 'Contact'];

  return (
    <main className={styles.mainHeader}>
      <Link href={'/'} className={styles.welcome}>Welcome</Link>
      <Image src={`icons/menu.svg`} className={styles.forMobile} onClick={() => settoggleMenuBar(!toggleMenuBar)} width={26} height={26} style={{ cursor: 'pointer' }} alt='Menu' />
      {toggleMenuBar &&
        <nav>
          {tabs?.map((tab) => {
            return (
              <Link href={`/#${tab}`} key={tab}
                className={active === tab ? styles.active : ''}
                onClick={() => handleClick(tab)}>
                {tab}
              </Link>
            );
          })}
        </nav>}
    </main>
  )
}
