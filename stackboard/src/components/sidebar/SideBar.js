import styles from "@/css/sidebar.module.css";
import LowerSideBar from "./LowerSideBar";
import UpperSideBar from "./UpperSideBar";

export default function SideBar() {
  return (
    <div className={styles.mainContainer}>
        <UpperSideBar/>
        <LowerSideBar/>
    </div>
  )
}
