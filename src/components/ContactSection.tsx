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
          CONTACT
        </h2>
        <Link href="tel:+919999849181">
          <Image src="call.svg" width={40} height={40} alt="Phone Icon" />
          +919999849181
        </Link>
        <Link href="mailto:baisla9181@gmail.com">
          <Image src="email.svg" width={40} height={40} alt="Email Icon" />
          Baisla9181@gmail.com
        </Link>
        <Link href="https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh/@28.4982604,77.3511835,11z/data=!3m1!4b1!4m6!3m5!1s0x390cea64b8f89aef:0xec0ccabb5317962e!8m2!3d28.4743879!4d77.5039904!16zL20vMGN3OXEy?entry=ttu" target="_blank">
          <Image
            src="address.svg"
            width={40}
            height={40}
            alt="Location Icon"
          />
          Greater Noida, UP
        </Link>
        <div>Thank You for visiting my personal portfolio</div>
        <div>
          <div className={styles.socialMediaHandlers}>
            <Image 
              src="github-black.svg"
              width={35} 
              height={35} 
              alt="GitHub Icon" />
            <Image
              src="youtube.png"
              width={35}
              height={35}
              alt="Youtube Icon"
            />
            <Image
              src="facebook.png"
              width={35}
              height={35}
              alt="Facebook Icon"
            />
            <Image
              src="linkedin.png"
              width={35}
              height={35}
              alt="LinkedIn Icon"
            />
            <Image
              src="telegram.png"
              width={35}
              height={35}
              alt="Telegram Icon"
            />
            <Image
              src="twitter.png"
              width={35}
              height={35}
              alt="Twitter Icon"
            />
          </div>
        </div>
      </address>
      <section className={styles.footerContainer}>
        Designed with &#10084; by&nbsp;<span>Aashish Baisla</span>
      </section>
    </>
  );
};
