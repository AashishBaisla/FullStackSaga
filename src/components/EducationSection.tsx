import React from "react";
import styles from '../styles/EducationSection.module.css';
import Image from "next/image";

export const EducationSection = () => {

  const data = [
    {
      title: 'Bachelor of Engineering in Mechanical Engineering',
      image: 'gl-bajaj-college.jpg',
      date: "2017 - 2021",
      university: 'GL Bajaj Institute of Technology & Management',
      location: 'Greater Noida'
    },
    {
      title: 'High School Education',
      image: 'shaiffali-public-school.jpg',
      date: "2017",
      university: 'Shaiffali Public School',
      location: 'Dadri'
    }
  ]

  return (
    <section id="Education" className={styles.sectionEducation}>
      <h2>
        <Image src={`icons/education.svg`} width={40} height={40} alt="Education" />
        EDUCATION
      </h2>
      <div className={styles.cardContainer}>

        {data?.map((item) => {
          return (
            <div className={styles.educationCard} key={item?.title}>
              <div>
                <Image src={`images/${item?.image}`} style={{ objectFit: "cover", objectPosition: "center" }} fill={true} alt={item?.university} />
              </div>
              <div>
                <p>{item?.title}</p>
                <span className={styles.collegeName}>{item?.university}</span>
                <span className={styles.locationYear}><Image src={`icons/location.svg`} width={15} height={15} alt="User Icon" />{item?.location} &nbsp;|&nbsp; {item?.date}</span>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  );
};
