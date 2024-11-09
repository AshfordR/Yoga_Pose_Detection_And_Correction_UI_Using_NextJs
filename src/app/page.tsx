'use client'



import HomePageContent from '@/components/HomePageContent/HomePageContent'
import styles from './WithBackgroundImage.module.css' // Import CSS module
import Navbar from '@/components/navbar/Navbar'

export default function WithBackgroundImage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomePageContent/>
    </div>
  )
}
