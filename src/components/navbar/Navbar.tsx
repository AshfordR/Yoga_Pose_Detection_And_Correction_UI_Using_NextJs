'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>
        <button className={styles.menuButton} onClick={onToggle}>
          {isOpen ? '✖️' : '☰'}
        </button>
        <div className={styles.logoContainer}>
          <Image src="/Images/logo.png" alt="Logo" width={50} height={50} />
          <span className={styles.brand}><b>YogTech</b></span>
        </div>
        <div className={styles.desktopNav}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>{item.label}</a>
          ))}
        </div>
        <div className={styles.authButtons}>
          <a href="/Login" className={styles.authButton}>Log In</a>
          <a href="/Register" className={styles.authButton}>Sign Up</a>
        </div>
      </div>
      {isOpen && <MobileNav />}
    </div>
  )
}

const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      {NAV_ITEMS.map((item) => (
        <a key={item.label} href={item.href} className={styles.mobileNavLink}>
          {item.label}
        </a>
      ))}
    </div>
  )
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/Services' },
  { label: 'Training Program', href: '/Training-Program' },
  { label: 'About', href: '/AboutUs' },
  { label: 'Contact', href: '/ContactUs' }
]
