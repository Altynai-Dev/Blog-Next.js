// 'use client';
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About</h2>
        <h1 className={styles.title}>
        Continuous Learning and Growth.
        </h1>
        <p className={styles.desc}>
        Welcome to my blog, where we embark on a journey into the dynamic world of web development. Whether you are a seasoned developer, a curious enthusiast, or a business owner looking to establish a compelling online presence, join us as we delve into the intricacies of web development and uncover the secrets to building impactful websites.
        </p>
        {/* <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;