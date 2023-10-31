import styles from "@/css/homepage.module.css"

export default function NoStack() {
  return (
    <div className={styles.noStack}>
        <div className={styles.noStackContainer}>
            <h1>There is no stack selected</h1>
        </div>
    </div>
  )
}
