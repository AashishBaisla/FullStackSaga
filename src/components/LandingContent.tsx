import React from "react";
import styles from "../styles/LandingContent.module.css";
import Image from "next/image";
import Link from "next/link";

export const LandingContent = () => {
  const data = ['react.svg', 'next.svg', 'nodejs.svg', 'git.svg', 'html-5.svg', 'css.svg', 'javascript.svg',
    'typescript.svg', 'express.svg', 'axios.svg', 'mongodb-2.svg', 'mysql.svg',
  ];

  return (
    <section id="Home" className={styles.landingContent}>

      <div className={styles.imgOverlay}>
        <Image src={`images/ashu-4.jpg`} style={{ filter: 'blur(18px)' }}
          fill={true} alt="Aashish Baisla" priority />
      </div>



      <div className={styles.imgContainer}>
        <Image src={`images/ashu-4.jpg`} fill={true} alt="Aashish Baisla" priority />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <span className={styles.position}>Full Stack Developer</span><br />
          <span className={styles.name}>Aashish Baisla</span>
        </div>

        <div className={styles.iconsContainer}>
          {data?.map((item, index) => {
            return (
              <Image key={index} src={`icons/${item}`} width={50} height={50} alt="User Icon" style={{ filter: ['next', 'socket'].includes(item) ? 'invert(1)' : 'none' }} />
            )
          })}
        </div>

        <Link href={`#About`} className={styles.letsGo}>About Me</Link>
        {/* <a href='/IT-file.pdf' download="your-cv.pdf">Download CV</a> */}
      </div>



    </section>
  );
};
