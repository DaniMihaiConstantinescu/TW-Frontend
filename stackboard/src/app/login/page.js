import styles from '@/css/auth.module.css'
import LeftSide from './leftSide'

export default function page() {
  return (
    <div className={styles.mainContainer}>
        <LeftSide/>
    </div>
  )
}
