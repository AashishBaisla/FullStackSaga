import React from "react";
import styles from "../styles/ExperienceSection.module.css";
import Image from "next/image";

export const ExperienceSection = () => {

  const data = [
    {
      title: "Full Stack Developer",
      company: "The Indian Express",
      location: "Noida, UP",
      date: "April 2023 - Present",
      image: 'indian-express.jpg',
      desc: (
        <div>
          <p>
            I am a software engineer at The Indian Express. I have been involved in
            developing and maintaining software for over 5 months. I have
            worked on a variety of projects ranging from web applications to
            mobile applications.
          </p>
        </div>
      ),
    },
    {
      title: "Full Stack Developer",
      company: "NCSI Technologies",
      location: "Pune, Maharashtra",
      date: "March 2022 - March 2023",
      image: 'ncs.jpg',
      desc: (
        <div>
          <p>
            I am a software engineer at NCSI Technologies. I have been involved in
            developing and maintaining software for over 1 year. I have
            worked on a variety of projects ranging from web applications to
            mobile applications.
          </p>
        </div>
      ),
    }
  ]

  return (
    <section id="Experience" className={styles.sectionExperience}>
      <h2>
        <Image src={`icons/briefcase.svg`} width={40} height={40} alt="Professional Experience" />
        EXPERIENCE
      </h2>

      <div className={styles.container}>
        {data?.map((item) => {
          return (
            <div className={styles.card} key={item?.company}>
              <div>
                <h3>{item?.company}</h3>
                <p>{item?.date}</p>
                <p>Position: {item?.title}</p>
              </div>
              <div className={styles.imgContainer}>
                <Image src={`images/${item?.image}`} fill={true} alt={item?.company} />
              </div>
            </div>
          )
        })}

      </div>

    </section>
  );
};
