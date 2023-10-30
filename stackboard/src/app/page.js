"use client"

import styles from "@/css/homepage.module.css"
import SideBar from "@/components/sidebar/SideBar"
import { useStack } from "@/contexts/StackContext"
import Dashboard from "@/components/dashboard/Dashboard"

export default function Homepage() {

  const {currentStack} = useStack()

  return <div className={styles.mainContainer}>
  
    <SideBar/>
    <Dashboard id ={currentStack}/>

  </div>
}
