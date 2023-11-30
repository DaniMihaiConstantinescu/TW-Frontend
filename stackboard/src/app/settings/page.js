import styles from '@/css/settings.module.css'

import React from 'react'
import SettingsHeader from './SettingsHeader'
import SettingsMainContainer from './SettingsMainContainer'

export default function page() {
  return (
    <div className={styles.mainFrame}>
        <SettingsHeader />
        <SettingsMainContainer />
    </div>
  )
}
