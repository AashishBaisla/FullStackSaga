import React from "react";
import styles from "../styles/ContactSection.module.css";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section id="Contact" className={styles.sectionContact}>
      {/* <h2>
        <Image src="contact.svg" width={40} height={40} alt="Contact Icon" />
        Let's Connect
      </h2> */}
      <div className={styles.contactContainer}>
        <Link href="tel:+919999849181">
          <Image src="call.svg" width={30} height={30} alt="Phone Icon" />
          +919999849181
        </Link>
        <Link href="mailto:baisla9181@gmail.com">
          <Image src="email.svg" width={30} height={30} alt="Email Icon" />
          Baisla9181@gmail.com
        </Link>
        <Link href="https://github.com/AashishBaisla">
          <Image src="github.svg" width={30} height={30} alt="GitHub Icon" />
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/ashiishbaisla/">
          <Image src="linkedin.png" width={30} height={30} alt="LinkedIn Icon"
          />
          LinkedIn
        </Link>
      </div>
    </section>
  );
};
