import React from "react";
import styles from "../styles/ExperienceSection.module.css";
import Image from "next/image";

export const ExperienceSection = () => {
  return (
    <section id="Experience" className={styles.sectionExperience}>
      <h2>
        <Image src="briefcase.svg" width={40} height={40} alt="User Icon" />
        EXPERIENCE
      </h2>

      <div className={styles.card}>
        <div>
          <h3>The Indian Express</h3>
          <p>April 2023 - Present</p>
          <p>Position: Full Stack Developer</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="indian-express.jpg" fill={true} alt="Indian Express" />
        </div>
      </div>

      <div className={styles.card}>
        <div>
          <h3>NCSI Technologies</h3>
          <p>March 2022 - March 2023</p>
          <p>Position: Full Stack Developer</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="ncs.jpg" fill={true} alt="NCS Group"/>
        </div>
      </div>
    </section>
  );
};
