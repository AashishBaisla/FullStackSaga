import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <section id="Home" className={styles.ladingContent}>
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

      <section id="About" className={styles.sectionAbout}>
        <h2>ABOUT ME</h2>
        <p>Hi there! I'm Aashish Baisla, a passionate and accomplished Full Stack Developer with expertise in ReactJS and NodeJS. I have a track record of success in developing mobile-first applications and integrating backend systems. Welcome to my portfolio website!</p>
      </section>

      <section id="Skills" className={styles.sectionSkills}>
        <h2>SKILLS</h2>
        <p>ReactJS
          NodeJS
          HTML
          CSS
          JavaScript
          Socket.io
          ExpressJS
          Axios
          MySQL
          Python
        </p>
      </section>

      <section id="Education" className={styles.sectionEducation}>
        <h2>EDUCATION</h2>
        <p>ReactJS
          NodeJS
          HTML
          CSS
          JavaScript
          Socket.io
          ExpressJS
          Axios
          MySQL
          Python
        </p>
      </section>

      <section id="Work" className={styles.sectionWork}>
        <h2>WORK</h2>
        <p>Hi there! I'm Aashish Baisla, a passionate and accomplished Full Stack Developer with expertise in ReactJS and NodeJS. I have a track record of success in developing mobile-first applications and integrating backend systems. Welcome to my portfolio website!</p>
      </section>

      <section id="Experience" className={styles.sectionExperience}>
        <h2>EXPERIENCE</h2>
        <p>Hi there! I'm Aashish Baisla, a passionate and accomplished Full Stack Developer with expertise in ReactJS and NodeJS. I have a track record of success in developing mobile-first applications and integrating backend systems. Welcome to my portfolio website!</p>
      </section>

      <section id="Contact" className={styles.sectionContact}>
        <h2>CONTACT</h2>
        <p>Hi there! I'm Aashish Baisla, a passionate and accomplished Full Stack Developer with expertise in ReactJS and NodeJS. I have a track record of success in developing mobile-first applications and integrating backend systems. Welcome to my portfolio website!</p>
      </section>

    </main>
  );
}
