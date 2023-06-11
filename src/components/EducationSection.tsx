import React from "react";
import styles from '../styles/EducationSection.module.css';
import Image from "next/image";

export const EducationSection = () => {
  return (
    <section id="Education" className={styles.sectionEducation}>
      <h2>
        <Image src="education.svg" width={40} height={40} alt="User Icon" />
        EDUCATION
      </h2>
      <div className={styles.educationCard}>
        <div>
          <Image src="gl-bajaj-college.jpg" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
        </div>
        <div>
          <p>Bachelor of Engineering in Mechanical Engineering</p>
          <span className={styles.collegeName}>GL Bajaj Institute of Technology & Management</span>
          <span className={styles.location}><Image src="location.svg" width={20} height={20} alt="User Icon" />Greater Noida</span>
          <span className={styles.year}>2017 - 2021</span>
        </div>
      </div>
      <div className={styles.educationCard}>
        <div>
          <Image src="shaiffali-public-school.jpg" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
        </div>
        <div> 
          <p>High School Education</p>
          <span className={styles.collegeName}>Shaiffali Public School</span>
          <span className={styles.location}><Image src="location.svg" width={20} height={20} alt="User Icon" />Dadri</span>
          <span className={styles.year}>2017</span>
        </div>
      </div>

    </section>
  );
};
