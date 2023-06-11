import Image from "next/image";
import React from "react";
import styles from "../styles/AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section id="About" className={styles.sectionAbout}>
      <h2>
        <Image src="/user.svg" width={30} height={30} alt="User Icon" />
        ABOUT ME
      </h2>
      <div className={styles.aboutContent}>
        <div className={styles.leftSide}>
          <div className={styles.imgContainer}>
            <Image
              src="/ashu3.JPEG"
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill={true}
              alt="Owner Photo"
            />
          </div>
        </div>

        <div className={styles.rightSide}>
          <p>
            Hi there! I&#39;m <strong>Aashish Baisla</strong>, a passionate and accomplished 
            <strong> Full Stack Developer</strong> with expertise in ReactJS and NodeJS. I have a track
            record of success in developing mobile-first applications and
            integrating backend systems. Welcome to my portfolio website!
          </p>
          <p>
            With several years of experience in the industry, I have worked on a
            wide range of projects, collaborating with cross-functional teams to
            deliver high-quality software solutions. My strong technical skills
            and problem-solving abilities allow me to effectively tackle complex
            challenges and create efficient and scalable applications.
          </p>
          <p>
            I am proficient in front-end technologies such as HTML, CSS, and
            JavaScript, and have extensive experience in building responsive and
            intuitive user interfaces using modern frameworks like ReactJS. On
            the back-end, I am skilled in NodeJS and have expertise in
            developing RESTful APIs and integrating databases to create robust
            server-side solutions. Additionally, I have experience working with
            databases like MySQL and have a solid understanding of database
            design and management.
          </p>
          <p>
            Continuous learning and staying up-to-date with the latest
            technologies and trends is essential to me. I am always eager to
            explore new tools and frameworks that can enhance my development
            process and improve the overall user experience. I am a strong
            believer in clean and maintainable code, and I follow industry best
            practices to ensure the quality and reliability of my work.
          </p>
          {/* <p>
            When I&#39;m not coding, you can find me exploring new technologies,
            contributing to open-source projects, or engaging in personal
            projects to further enhance my skills. I am passionate about
            creating meaningful and impactful software solutions that make a
            difference in people&#39;s lives. If you have any exciting projects or
            collaboration opportunities, feel free to get in touch!
          </p> */}
        </div>
      </div>
    </section>
  );
};
