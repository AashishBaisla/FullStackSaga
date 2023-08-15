import React from 'react';
import styles from '../styles/SkillSection.module.css';
import Image from 'next/image';

export const SkillSection = () => {
  const data = [
    {
      name: 'ReactJS',
      image: 'react.svg',
    },
    {
      name: 'NextJS',
      image: 'next.svg',
    },
    {
      name: 'NodeJS',
      image: 'nodejs.svg',
    },
    {
      name: 'HTML',
      image: 'html-5.svg',
    },
    {
      name: 'CSS',
      image: 'css.svg',
    },
    {
      name: 'JavaScript',
      image: 'javascript.svg',
    },
    {
      name: 'TypeScript',
      image: 'typescript.svg',
    },
    {
      name: 'ExpressJS',
      image: 'express.svg',
    },
    {
      name: 'Axios',
      image: 'axios.svg',
    },
    {
      name: 'Socket.io',
      image: 'socket.svg',
    },
    {
      name: 'Redux',
      image: 'redux.svg',
    },
    {
      name: 'BootStrap',
      image: 'bootstrap.svg',
    },
    {
      name: 'Git',
      image: 'git.svg',
    },
    {
      name: 'GitHub',
      image: 'github.svg',
    },
    {
      name: 'Python',
      image: 'python.svg',
    },
    {
      name: 'MongoDB',
      image: 'mongodb-2.svg',
    },
    {
      name: 'MySQL',
      image: 'mysql.svg',
    },
    {
      name: 'VSCode',
      image: 'vscode.svg',
    },
    // {
    //   name: 'GCP',
    //   image: 'gcp.svg',
    // }
  ]
  return (
    <section id="Skills" className={styles.sectionSkills}>
        <h2>
          <Image src={`icons/coding.svg`} width={40} height={40} alt="Coding" />
          SKILLS
        </h2>
        <div className={styles.skillContainer}>
          {data?.map((item) => {
            return (
              <div key={item?.name}>
                <Image src={`icons/${item?.image}`} width={50} height={50} alt="User Icon" style={{filter: ['NextJS', 'Socket.io'].includes(item?.name) ? 'invert(1)' : 'none'}} />
                <span>{item?.name}</span>
              </div>
            )
          })}
        </div>
    </section>
  )
}
