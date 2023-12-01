"use client"

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import NoUser from '@/components/warnings/NoUser'
import SettingsStandard from './SettingsStandard'

export default function page() {

  const {currentUser} = useAuth()

  return (
    <>
      {currentUser == null ? (
        <NoUser/>
      ) : (
        <>
          <SettingsStandard />
        </>
      )}
    </>
  );


 
}
