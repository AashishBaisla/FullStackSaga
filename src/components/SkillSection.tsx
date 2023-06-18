import React from 'react';
import styles from '../styles/SkillSection.module.css';
import Image from 'next/image';

export const SkillSection = () => {
  return (
    <section id="Skills" className={styles.sectionSkills}>
        <h2>
          <Image src="coding.svg" width={40} height={40} alt="User Icon" />
          SKILLS
        </h2>
        <div className={styles.skillContainer}>
          <div><Image src="next.svg" style={{filter: "invert(1)"}} width={50} height={50} alt="User Icon" /><span>NextJS</span></div>
          <div><Image src="react.svg" width={50} height={50} alt="User Icon" /><span>ReactJS</span></div>
          <div><Image src="nodejs.svg" width={50} height={50} alt="User Icon" /><span>NodeJS</span></div>
          <div><Image src="html-5.svg" width={50} height={50} alt="User Icon" /><span>HTML 5</span></div>
          <div><Image src="css.svg" width={50} height={50} alt="User Icon" /><span>CSS</span></div>
          <div><Image src="javascript.svg" width={50} height={50} alt="User Icon" /><span>JavaScript</span></div>
          <div><Image src="typescript.svg" width={50} height={50} alt="User Icon" /><span>TypeScript</span></div>
          <div><Image src="express.svg" width={50} height={50} alt="User Icon" /><span>ExpressJS</span></div>
          <div><Image src="axios.svg" width={50} height={50} alt="User Icon" /><span>Axios</span></div>
          <div><Image src="socket.svg" style={{filter: "invert(1)"}} width={50} height={50} alt="User Icon" /><span>Socket.io</span></div>
          <div><Image src="redux.svg" width={50} height={50} alt="User Icon" /><span>Redux</span></div>
          <div><Image src="bootstrap.svg" width={50} height={50} alt="User Icon" /><span>BootStrap</span></div>
          <div><Image src="git.svg" width={50} height={50} alt="User Icon" /><span>Git</span></div>
          <div><Image src="github.svg" width={50} height={50} alt="User Icon" /><span>GitHub</span></div>
          <div><Image src="python.svg" width={50} height={50} alt="User Icon" /><span>Python</span></div>
          <div><Image src="mongodb-2.svg" width={50} height={50} alt="User Icon" /><span>MongoDB</span></div>
          <div><Image src="mysql.svg" width={50} height={50} alt="User Icon" /><span>MySQL</span></div>
          <div><Image src="vscode.svg" width={50} height={50} alt="User Icon" /><span>VS Code</span></div>
          {/* <div><Image src="gcp.svg" width={50} height={50} alt="User Icon" /><span>GCP</span></div> */}
        </div>
    </section>
  )
}
