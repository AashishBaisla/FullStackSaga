'use client';
import React, { useState } from 'react';
import styles from '../styles/MainHeader.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const MainHeader = () => {
  const [activeButton, setActiveButton] = useState<string>('Home');
  const [toggleMenuBar, settoggleMenuBar] = useState(true);

  function scrollToSection(sectionId: string) {
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

  return (
    <main className={styles.mainHeader}>
      <h1>Welcome</h1>
      <button className={styles.forMobile} onClick={() => settoggleMenuBar(!toggleMenuBar)}>&#9776; Menu</button>
      {toggleMenuBar && <nav>
          <button onClick={() => scrollToSection('Home')} className={activeButton === 'Home' ? styles.activeButton : ''}>Home</button>
          <button onClick={() => scrollToSection('About')} className={activeButton === 'About' ? styles.activeButton : ''}>About</button>
          <button onClick={() => scrollToSection('Skills')} className={activeButton === 'Skills' ? styles.activeButton : ''}>Skills</button>
          <button onClick={() => scrollToSection('Education')} className={activeButton === 'Education' ? styles.activeButton : ''}>Education</button>
          <button onClick={() => scrollToSection('Work')} className={activeButton === 'Work' ? styles.activeButton : ''}>Work</button>
          <button onClick={() => scrollToSection('Experience')} className={activeButton === 'Experience' ? styles.activeButton : ''}>Experience</button>
          <button onClick={() => scrollToSection('Contact')} className={activeButton === 'Contact' ? styles.activeButton : ''}>Contact</button>
      </nav>}
    </main>
  )
}
