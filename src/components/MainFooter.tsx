'use client';
import React from "react";
import styles from "../styles/MainFooter.module.css";
import Image from "next/image";
import Link from "next/link";

export const MainFooter = () => {
  return (
    <section className={styles.footerContainer}>
        <div>
          <div>
            <Link href="mailto:baisla9181@gmail.com">
              <Image src="email.svg" width={35} height={35} alt="Email Icon" />
            </Link>
            <Link href="https://github.com/AashishBaisla">
              <Image src="github.svg" width={35} height={35} alt="GitHub Icon"/>
            </Link>
            <Link href="https://www.linkedin.com/in/ashiishbaisla/">
              <Image src="linkedin.png" width={35} height={35} alt="LinkedIn Icon" />
            </Link>
            <Link href="https://www.youtube.com/AashishBaisla">
              <Image src="youtube.png" width={35} height={35} alt="Youtube Icon" />
            </Link>
            <Link href="https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh/@28.4982604,77.3511835,11z/data=!3m1!4b1!4m6!3m5!1s0x390cea64b8f89aef:0xec0ccabb5317962e!8m2!3d28.4743879!4d77.5039904!16zL20vMGN3OXEy?entry=ttu" target="_blank">
              <Image src="address.svg" width={35} height={35} alt="Location Icon"/>
            </Link>
          </div>  
          <p>
            Designed with &#10084; by&nbsp;<span>Aashish Baisla</span>
          </p>
        </div>
    </section>
  );
};
