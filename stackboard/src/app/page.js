"use client"

import styles from "@/css/homepage.module.css"
import SideBar from "@/components/sidebar/SideBar"
import { useAuth } from "@/contexts/AuthContext"

export default function Homepage() {


  return <div className={styles.mainContainer}>
  
    <SideBar/>
    
    {/* Dashboard */}
    <div style={{display:"flex", flexGrow:1}}>s</div>

  </div>
}
