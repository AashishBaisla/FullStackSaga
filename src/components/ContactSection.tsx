import React from "react";
import styles from "../styles/ContactSection.module.css";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <>
      <section id="Contact" className={styles.sectionContact}>
        <h2>
          <Image src="/contact.svg" width={40} height={40} alt="Contact Icon" />
          CONTACT</h2>
        <div>
          <Image src="/call.svg" width={40} height={40} alt="Phone Icon" />
          +919999849181
        </div>
        <div>
          <Image src="/email.svg" width={40} height={40} alt="Email Icon" />
          Baisla9181@gmail.com
        </div>
        <div>
          <Image src="/address.svg" width={40} height={40} alt="Location Icon" />
          Greater Noida, UP
        </div>
        <div>
          Thank You for visiting my personal portfolio
        </div>
      </section>
      <section className={styles.footerContainer}>
        Designed with &#10084; by&nbsp;<span>Aashish Baisla</span>
      </section>
    </>
  );
};
