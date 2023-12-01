"use client"

import { useAuth } from '@/contexts/AuthContext'
import styles from '@/css/settings.module.css'

import React from 'react'

function getProfile(){

  "use client"

  const {currentUser} = useAuth()

  const profile = {
    "email": currentUser.email,
    "apikey": currentUser.uid,
    "stacksNo": 20,
    "storage": 50
  }

  return profile
}

export default function SettingsMainContainer() {

  const profile = getProfile()
  const isPremium = false

  return (
    <div className={styles.contentFrame}>
      <div className={styles.mainContainer} style={isPremium ? { justifyContent: 'center', height: '60%' } : null}>
 
        <div className={styles.section}>
          <h1 className={styles.sectionTitle}>Profile</h1>

          <div className={styles.info}>
            <span><b>Email:</b> {profile.email}</span>
            <span><b>API Key:</b> {profile.apikey}</span>
          </div>
        </div>

        <hr className={styles.horLine}></hr>

        <div className={styles.section}>
          <h1 className={styles.sectionTitle}>Stacks</h1>

          <div className={styles.info}>
            <span><b>Number of Stacks:</b> {profile.stacksNo}</span>
            <span><b>Storage:</b> {profile.storage} {isPremium ? ('MB') : (' / 250 MB')}</span>
          </div>
        </div>

        {!isPremium && <>
            <div className={styles.spacer}></div>

            <button className={styles.stackBtn} role="button">
              <div className={styles.centeredContent}>
                  <span>Upgrade to Premium</span>
              </div>
            </button>
          </>
        }

      </div>
    </div>
  )
}
