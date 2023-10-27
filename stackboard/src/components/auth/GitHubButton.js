import { useAuth } from '@/contexts/AuthContext'
import styles from '@/css/auth.module.css'

export default function GitHubButton() {
  const {loginWithGitHub} = useAuth()

  return (
    <button onClick={loginWithGitHub} className={styles.authBtn} role="button">
        <div className={styles.centeredContent}>
          <img 
            width="35" 
            height="35" 
            src="https://img.icons8.com/ios-filled/35/github.png" 
            alt="GitHub Logo"/>
          <span>Sign in with GitHub</span>
        </div>
      </button>
  )
}
