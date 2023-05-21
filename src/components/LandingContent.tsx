import React from 'react';
import styles from '../styles/LandingContent.module.css';
import Image from 'next/image';

export const LandingContent = () => {
  return (
    <section id="Home" className={styles.landingContent}>
        <div className={styles.leftSide}>
          <p>Hi There, <br /> I'm Aashish <span>Baisla</span></p>
          <p>I am into <span>Full Stack Development</span></p>
          <button>About Me</button>
          <div className={styles.socialMediaHandlers}>
            <Image src="/github.png" width={35} height={35} alt="GitHub Icon"/>
            <Image src="/youtube.png" width={35} height={35} alt="Youtube Icon"/>
            <Image src="/facebook.png" width={35} height={35} alt="Facebook Icon"/>
            <Image src="/linkedin.png" width={35} height={35} alt="LinkedIn Icon"/>
            <Image src="/telegram.png" width={35} height={35} alt="Telegram Icon"/>
            <Image src="/twitter.png" width={35} height={35} alt="Twitter Icon"/>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imgContainer}>
          <Image src="/ashu2.JPEG" style={{objectFit: "cover", objectPosition: "center"}} fill={true} alt="Owner Photo"/>
          </div>
        </div>
    </section>
  )
}
