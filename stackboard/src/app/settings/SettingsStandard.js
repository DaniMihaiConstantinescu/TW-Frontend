import styles from '@/css/settings.module.css'

import SettingsHeader from './SettingsHeader'
import SettingsMainContainer from './SettingsMainContainer'
import React from 'react'

export default function SettingsStandard() {
  return (
    <div className={styles.mainFrame}>
            <SettingsHeader />
            <SettingsMainContainer />
    </div>
  )
}
