import React from "react";
import styles from "../styles/LandingContent.module.css";
import Image from "next/image";

export const LandingContent = () => {
  return (
    <section id="Home" className={styles.landingContent}>
      <div className={styles.text}>
        <p>
          Hi! I am, <br />
          Aashish <span>Baisla</span>
        </p>
        <span><span>Full Stack</span> Developer</span>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="ashu2.JPEG"
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill={true}
          alt="Owner Photo"
          priority
        />
      </div>
    </section>
  );
};
