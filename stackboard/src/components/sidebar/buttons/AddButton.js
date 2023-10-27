import styles from '@/css/sidebar.module.css'

export default function AddButton() {
  return (
    <button className={styles.addBtn} role="button">
        <div className={styles.centeredContent}>
            <img width="30" height="30" src="https://img.icons8.com/android/24/FFFFFF/plus.png" alt="plus"/>
            <span>Add Stack</span>
        </div>
    </button>
  )
}
