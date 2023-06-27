'use client';
import React from "react";
import styles from "../styles/MainFooter.module.css";
import Image from "next/image";
import Link from "next/link";

export const MainFooter = () => {
  return (
    <section className={styles.footerContainer}>
        <div>
            Designed with &#10084; by&nbsp;<span>Aashish Baisla</span>
        </div>
    </section>
  );
};
