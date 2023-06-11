import React from "react";
import styles from "../styles/ContactSection.module.css";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <>
      <address id="Contact" className={styles.sectionContact}>
        <h2>
          <Image src="contact.svg" width={40} height={40} alt="Contact Icon" />
          CONTACT</h2>
        <Link href="tel:+919999849181">
          <Image src="call.svg" width={40} height={40} alt="Phone Icon" />
          +919999849181
        </Link>
        <div>
          <Image src="email.svg" width={40} height={40} alt="Email Icon" />
          Baisla9181@gmail.com
        </div>
        <div>
          <Image src="address.svg" width={40} height={40} alt="Location Icon" />
          Greater Noida, UP
        </div>
        <div>
          Thank You for visiting my personal portfolio
        </div>
        <div>
        <div className={styles.socialMediaHandlers}>
            <Image src="github.png" width={35} height={35} alt="GitHub Icon"/>
            <Image src="youtube.png" width={35} height={35} alt="Youtube Icon"/>
            <Image src="facebook.png" width={35} height={35} alt="Facebook Icon"/>
            <Image src="linkedin.png" width={35} height={35} alt="LinkedIn Icon"/>
            <Image src="telegram.png" width={35} height={35} alt="Telegram Icon"/>
            <Image src="twitter.png" width={35} height={35} alt="Twitter Icon"/>
        </div>
        </div>
      </address>
      <section className={styles.footerContainer}>
        Designed with &#10084; by&nbsp;<span>Aashish Baisla</span>
      </section>
    </>
  );
};
