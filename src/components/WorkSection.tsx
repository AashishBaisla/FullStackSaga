import React from 'react';
import styles from '../styles/WorkSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const WorkSection = () => {
  return (
    <section id="Work" className={styles.sectionWork}>
      <h2>
        <Image src="work.svg" width={30} height={30} alt="User Icon" />
        WORK</h2>
      <div className={styles.container}>

        <div className={styles.workCard}>
            <div>
              <Image src="social.jpg" fill={true}  alt="User Icon" />
            </div>
            <div>
              <span>Social Media App</span>
              <Image src="private.svg" width={25} height={25} alt="User Icon" />
            </div>
        </div>

        <div className={styles.workCard}>
            <div>
              <Image src="chatting.jpg" fill={true}  alt="User Icon" />
            </div>
            <div>
              <span>Chat Application</span>
              <Link href='https://github.com/AashishBaisla/Chat-App.git' target='blank'>
                <Image src="github-black.svg" width={22} height={22} alt="GitHub"/>
              </Link>
            </div>
        </div>

        <div className={styles.workCard}>
            <div>
              <Image src="contact-application.jpg" fill={true}  alt="User Icon" />
            </div>
            <div>
              <span>Contact Application</span>
              <Link href='https://github.com/AashishBaisla/Contact.git' target='blank'>
                <Image src="github-black.svg" width={22} height={22} alt="GitHub"/>
              </Link>
            </div>
        </div>

        <div className={styles.workCard}>
            <div>
              <Image src="movies.webp" fill={true}  alt="User Icon" />
            </div>
            <div>
              <span>CineVerse</span>
              <Link href='https://github.com/AashishBaisla/CineVerse.git' target='blank'>
                <Image src="github-black.svg" width={22} height={22} alt="GitHub"/>
              </Link>
            </div>
        </div>

        <div className={styles.workCard}>
            <div>
              <Image src="notepad.jpg" fill={true}  alt="User Icon" />
            </div>
            <div>
              <span>Notepad</span>
              <Link href='https://github.com/AashishBaisla/Notepad.git' target='blank'>
                <Image src="github-black.svg" width={22} height={22} alt="GitHub"/>
              </Link>
            </div>
        </div>

        <div className={styles.workCard}>
            <div>
              <Image src="login.avif" fill={true}  alt="User Icon" />
            </div>
            <div>
              <span>Login Pages Clone</span>
              <Link href='https://github.com/AashishBaisla/Instagram-LoginPage.git' target='blank'>
                <Image src="github-black.svg" width={22} height={22} alt="GitHub"/>
              </Link>
            </div>
        </div>

      </div>
    </section>
  )
}
