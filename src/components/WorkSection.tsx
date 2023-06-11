import React from 'react';
import styles from '../styles/WorkSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const WorkSection = () => {
  return (
    <section id="Work" className={styles.sectionWork}>
      <h2>
        <Image src="work.svg" width={40} height={40} alt="User Icon" />
        WORK</h2>
      <div className={styles.container}>

        <div className={styles.workCard}>
          <div className={styles.imgContainer}>
            <Image src="space.png" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
          </div>
          <div className={styles.content}>
            <p>Social Media App
              <Image src="private.png" width={25} height={25} alt="User Icon" />
            </p>
            <div>
              <span>ReactJS</span>
              <span>NodeJS</span>
              <span>Socket.io</span>
            </div>
          </div>
        </div>

        <div className={styles.workCard}>
          <div className={styles.imgContainer}>
            <Image src="chatting.png" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
          </div>
          <div className={styles.content}>
            <p>Chat Application</p>
            <div>
              <span>ReactJS</span>
              <span>NodeJS</span>
              <span>Socket.io</span>
            </div>
            <Link href='https://github.com/AashishBaisla/Chat-App.git' target='blank'>
              <Image src="coding.svg" width={22} height={22} alt="Coding Icon"/>
              Code
            </Link>
          </div>
        </div>

        <div className={styles.workCard}>
          <div className={styles.imgContainer}>
            <Image src="contact-illustration.jpg" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
          </div>
          <div className={styles.content}>
            <p>Contact Application</p>
            <div>
              <span>NextJS</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <Link href='https://github.com/AashishBaisla/Contact.git' target='blank'>
              <Image src="coding.svg" width={22} height={22} alt="Coding Icon"/>
              Code
            </Link>
          </div>
        </div>

        <div className={styles.workCard}>
          <div className={styles.imgContainer}>
            <Image src="notepad.png" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
          </div>
          <div className={styles.content}>
            <p>Notepad</p>
            <div>
              <span>Python</span>
              <span>TKinter</span>
            </div>
            <Link href='https://github.com/AashishBaisla/Notepad.git' target='blank'>
              <Image src="coding.svg" width={22} height={22} alt="Coding Icon"/>
              Code
            </Link>
          </div>
        </div>

        <div className={styles.workCard}>
          <div className={styles.imgContainer}>
            <Image src="login-clone.jpg" style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt="User Icon" />
          </div>
          <div className={styles.content}>
            <p>Login Pages Clone</p>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <Link href='https://github.com/AashishBaisla/Instagram-LoginPage.git' target='blank'>
              <Image src="coding.svg" width={22} height={22} alt="Coding Icon"/>
              Code
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
