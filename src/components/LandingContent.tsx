import React from "react";
import styles from "../styles/LandingContent.module.css";
import Image from "next/image";
import Link from "next/link";

export const LandingContent = () => {
  const data = ['react.svg', 'next.svg', 'nodejs.svg', 'git.svg', 'html-5.svg', 'css.svg', 'javascript.svg',
    'typescript.svg', 'express.svg', 'axios.svg', 'mongodb-2.svg', 'mysql.svg',
  ];

  return (
    <main id="Home" className={styles.landingContent}>

      <div className={styles.imgOverlay}>
        <Image src={`images/ashu-4.jpg`} fill={true} style={{ filter: 'blur(18px)' }} alt="Aashish Baisla" priority />
      </div>

      <section>
        <div className={styles.imgContainer}>
          <Image src={`images/ashu-4.jpg`} fill={true} style={{ objectFit: 'cover', objectPosition: 'top' }} alt="Aashish Baisla" priority />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span className={styles.name}>Aashish Baisla</span><br />
            <span className={styles.position}>Full Stack Developer</span>
          </div>
          <div className={styles.iconsContainer}>
            {data?.map((item, index) => {
              return (
                <Image key={index} src={`icons/${item}`} width={50} height={50} alt="User Icon" style={{ filter: ['next', 'socket'].includes(item) ? 'invert(1)' : 'none' }} />
              )
            })}
          </div>
          <div className={styles.buttonContainer}>
            <Link href={`#About`} className={styles.letsGo}>About Me</Link>
            <a className={styles.downloadCV} href='/Ashish-Resume.pdf' download="Ashish_Baisla_CV.pdf"><Image width={16} height={16} src={`icons/download-w.svg`} alt="Download" />Download CV</a>
          </div>
        </div>

      </section>



    </main>
  );
};
