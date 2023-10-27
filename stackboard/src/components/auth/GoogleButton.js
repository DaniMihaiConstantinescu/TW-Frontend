import { useAuth } from '@/contexts/AuthContext'
import styles from '@/css/auth.module.css'

export default function GoogleButton() {
  const {loginWithGoogle} = useAuth()

  return (
    <button onClick={loginWithGoogle} className={styles.authBtn} role="button">
        <div className={styles.centeredContent}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Google-logos-and-brands-those-icons-flat-those-icons.png"
            alt="Google Logo"
          />
          <span>Sign in with Google</span>
        </div>
      </button>
  )
}
