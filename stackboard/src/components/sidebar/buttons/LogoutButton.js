import { useAuth } from "@/contexts/AuthContext"
import styles from "@/css/sidebar.module.css"

export default function LogoutButton() {

    const {logout} = useAuth()

    return (
        <div onClick={logout} className={styles.controllButton}>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/exit--v1.png" alt="exit--v1"/>
            <span>Logout</span>
        </div>
    )
}
