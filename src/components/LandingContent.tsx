import React from "react";
import styles from "../styles/LandingContent.module.css";
import Image from "next/image";

export const LandingContent = () => {
  return (
    <section id="Home" className={styles.landingContent}>
      <div className={styles.backgroundColor}></div>
      <span className={styles.text}>
        <span>Full Stack Developer</span><br/>
        <span>Aashish Baisla</span>
        {/* <a href='/IT-file.pdf' download="your-cv.pdf">Download CV</a> */}
      </span>
      <div className={styles.imgContainer}>
        <Image
          src={`images/ashu-4.jpg`}
          style={{ objectFit: "cover", objectPosition: 'top' }}
          fill={true}
          alt="Owner Photo"
          priority
        />
      </div>

    </section>
  );
};
