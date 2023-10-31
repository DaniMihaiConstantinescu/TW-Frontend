"use client"

import styles from "@/css/homepage.module.css"
import SideBar from "@/components/sidebar/SideBar"
import { useStack } from "@/contexts/StackContext"
import Dashboard from "@/components/dashboard/Dashboard"
import NoStack from "@/components/warnings/NoStack"
import { useAuth } from "@/contexts/AuthContext"
import NoUser from "@/components/warnings/NoUser"

export default function Homepage() {

  const {currentStack} = useStack()
  const {currentUser} = useAuth()

  return (
    <>
      {currentUser == null ? (
        <NoUser/>
      ) : (
        <>
          <div className={styles.mainContainer}>
            <SideBar />
            {currentStack == null ? <NoStack /> : <Dashboard id={currentStack} />}
          </div>
        </>
      )}
    </>
  );
  


}
