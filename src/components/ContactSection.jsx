import React from "react";
import styles from "../styles/ContactSection.module.css";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {

  const data = [
    {
      title: '+919999849181',
      url: 'tel:+919999849181',
      image: 'call.svg',
      alt: 'Phone',
    },
    {
      title: 'Baisla9181@gmail.com',
      url: 'mailto:baisla9181@gmail.com',
      image: 'email.svg',
      alt: 'Email',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/AashishBaisla',
      image: 'github.svg',
      alt: 'GitHub',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashiishbaisla/',
      image: 'linkedin.png',
      alt: 'LinkedIn',
    },
  ]
  return (
    <section id="Contact" className={styles.sectionContact}>

      <div className={styles.contactContainer}>
        {data?.map((item) => {
          return (
            <Link href={`${item?.url}`} key={item?.title}>
              <Image src={`icons/${item?.image}`} width={30} height={30} alt={item?.alt} />
              {item?.title}
            </Link>

          )
        })}
      </div>

    </section>
  );
};
