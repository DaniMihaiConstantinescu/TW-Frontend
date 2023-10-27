import styles from "@/css/sidebar.module.css"
import { useRouter } from "next/navigation"

export default function SettingsButton() {

    const router = useRouter();

    const redirect = () =>{
        router.push('/settings')
    }

    return (
        <div onClick={redirect} className={styles.controllButton}>
            <img width="30" height="30" src="https://img.icons8.com/ios/35/FFFFFF/settings--v1.png" alt="settings--v1"/>
            <span>Settings</span>
        </div>
    )
}
