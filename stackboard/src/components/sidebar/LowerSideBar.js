import styles from "@/css/sidebar.module.css"
import SettingsButton from "./buttons/SettingsButton"
import LogoutButton from "./buttons/LogoutButton"

export default function LowerSideBar() {
  return (
    <div className={styles.lowerSideBar}>
      <SettingsButton/>
      <LogoutButton/>
    </div>
  )
}
