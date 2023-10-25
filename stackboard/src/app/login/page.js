import styles from '@/css/auth.module.css'
import LeftSide from './leftSide'
import ParticleBackground from '@/components/auth/ParticleBackground'

export default function page() {
  return (
    <div className={styles.mainContainer}>
        <LeftSide/>
        <ParticleBackground/>
    </div>
  )
}
