import React from 'react';
import styles from '../styles/WorkSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    image: 'social.jpg',
    title: 'Social Media App',
    url: 'https://github.com/AashishBaisla',
    private: true,
  },
  {
    image: 'chatting.jpg',
    title: 'Chat Application',
    url: 'https://github.com/AashishBaisla/Chat-App.git',
    private: false,
  },
  {
    image: 'contact-application.jpg',
    title: 'Contact Application',
    url: 'https://github.com/AashishBaisla/Contact.git',
    private: true,
  },
  {
    image: 'todo.png',
    title: 'Todo App',
    url: 'https://github.com/AashishBaisla/TaskBuddy',
    private: false,
  },
  {
    image: 'sudoku.jpg',
    title: 'Sudoku',
    url: 'https://github.com/AashishBaisla/Sudoku.git',
    private: true,
  },
  {
    image: 'movies.webp',
    title: 'CineVerse',
    url: 'https://github.com/AashishBaisla/CineVerse.git',
    private: false,
  },
  {
    image: 'github-profile.png',
    title: 'GitHub Profile Viewer',
    url: 'https://github.com/AashishBaisla/GitHub-Profile-Viewer',
    private: false,
  },
  {
    image: 'notepad.jpg',
    title: 'Notepad',
    url: 'https://github.com/AashishBaisla/Notepad.git',
    private: false,
  },
  // {
  //   image: 'login.avif',
  //   title: 'Login Pages Clone',
  //   url: 'https://github.com/AashishBaisla/Instagram-LoginPage.git',
  //   private: false,
  // },
]

export const WorkSection = () => {
  return (
    <section id="Work" className={styles.sectionWork}>
      <h2>
        <Image src={`icons/work.svg`} width={30} height={30} alt="Work" />
        WORK</h2>
      <div className={styles.container}>

        {data?.map((item) => {
          return (
            <div className={styles.workCard} key={item?.title}>
              <div className={styles.imgContainer}>
                <Image src={`images/${item?.image}`} fill={true} alt={item?.title} style={{ objectFit: 'cover' }} />
              </div>

              <div className={styles.title}>
                <span>{item?.title}</span>
                {!item?.private ?
                  <Link href={`${item?.url}`} target='blank'>
                    <Image src={`icons/github.svg`} width={24} height={24} alt="GitHub" />
                  </Link>
                  :
                  <Image src={`icons/private.svg`} width={22} height={22} alt="private" />
                }
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}
