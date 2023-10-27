import styles from '@/css/auth.module.css'
import LeftSide from './LeftSide.js'
import ParticleBackground from '@/components/auth/ParticleBackground'

export default function page() {
  return (
    <div className={styles.mainContainer}>
        <LeftSide/>
        <ParticleBackground/>
    </div>
  )
}
