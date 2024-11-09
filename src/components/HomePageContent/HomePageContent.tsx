'use client'

import styles from './HomePage.module.css'

export default function HomePageContent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span className={styles.highlight}>
            <b>YOGA FIRST FITNESS ALWAYS</b>
          </span>
          <br />
          <span className={styles.subtitle}>use everywhere!</span>
        </h1>
        <p className={styles.description}>
          Welcome to Great Fitness, premier destination for yoga and fitness enthusiasts.
          Nestled in the vibrant heart of the city, we offer a sanctuary where mind, body,
          and spirit align.
        </p>
        <div className={styles.buttonGroup}>
          <a href="/Pose-Correction" className={`${styles.button} ${styles.primaryButton}`}>
            Pose Correction
          </a>
          <a href="/Pose-Detection" className={styles.button}>
            Detect Pose
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          {/* <Image src="/Images/Background.png" alt="Background" fill style={{ opacity: 0.6, objectFit: 'cover' }} /> */}
        </div>
      </div>
    </div>
  )
}
