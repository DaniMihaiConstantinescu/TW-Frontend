import styles from '@/css/sidebar.module.css'

export default function StackButton({color, name}) {
  return (
    <button style={{backgroundColor: color}} className={styles.stackBtn} role="button">
        <div className={styles.centeredContent}>
            <span>{name}</span>
        </div>
    </button>
  )
}
