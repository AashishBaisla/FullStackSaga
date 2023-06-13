'use client';
import React, { useEffect, useState } from 'react';
import styles from '../styles/MainHeader.module.css';
import Image from 'next/image';

export const MainHeader = () => {
  const [activeButton, setActiveButton] = useState<string>('Home');
  const [toggleMenuBar, settoggleMenuBar] = useState(false);

  function scrollToSection(sectionId: string) {
    if (window.innerWidth < 850) {
      settoggleMenuBar(false);
    }
    setActiveButton(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    const updateSidebarState = () => {
      if (window.innerWidth > 850) {
        settoggleMenuBar(true);
      }
    };

    updateSidebarState();

    const handleResize = () => {
      updateSidebarState();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={styles.mainHeader}>
      <h1>Welcome</h1>
      <Image src={`/menu.svg`} className={styles.forMobile} onClick={() => settoggleMenuBar(!toggleMenuBar)} width={26} height={26} style={{cursor: 'pointer'}} alt='Menu'/>
      {toggleMenuBar && <nav>
          <button onClick={() => scrollToSection('Home')} className={activeButton === 'Home' ? styles.activeButton : ''}>Home</button>
          <button onClick={() => scrollToSection('About')} className={activeButton === 'About' ? styles.activeButton : ''}>About</button>
          <button onClick={() => scrollToSection('Skills')} className={activeButton === 'Skills' ? styles.activeButton : ''}>Skills</button>
          <button onClick={() => scrollToSection('Education')} className={activeButton === 'Education' ? styles.activeButton : ''}>Education</button>
          <button onClick={() => scrollToSection('Work')} className={activeButton === 'Work' ? styles.activeButton : ''}>Work</button>
          <button onClick={() => scrollToSection('Experience')} className={activeButton === 'Experience' ? styles.activeButton : ''}>Experience</button>
      </nav>}
    </main>
  )
}
