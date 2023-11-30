import React from 'react'
import styles from '@/css/settings.module.css'
import Link from 'next/link'

export default function SettingsHeader() {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <h1 className={styles.noMargin}>StackBoard</h1>
      </Link>
    </div>
  )
}
