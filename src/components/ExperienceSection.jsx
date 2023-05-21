import React from 'react';
import styles from '../styles/ExperienceSection.module.css';
import Image from 'next/image';

export const ExperienceSection = () => {
  return (
    <section id="Experience" className={styles.sectionExperience}>
      <h2>
      <Image src="/briefcase.svg" width={40} height={40} alt="User Icon" />
        EXPERIENCE
      </h2>

        <div className={styles.verticalLine}></div>
        <div className={styles.cardContainerLeft}>
          <div className={styles.experienceCardLeft}>
            <h3>The Indian Express</h3>
            <p>April 2023 - Present</p>
            <p>Position: Full Stack Developer</p>
          </div>
          <Image src="/goal.svg" width={40} height={40} style={{zIndex: "1"}} alt="User Icon" />
        </div>
        <div className={styles.cardContainerRight}>
          <Image src="/goal.svg" width={40} height={40} style={{zIndex: "1"}} alt="User Icon" />
        <div className={styles.experienceCardRight}>
          <h3>NCSI Technologies</h3>
          <p>March 2022 - March 2023</p>
          <p>Position: Full Stack Developer</p>
        </div>
        </div>
    </section>
  )
}
