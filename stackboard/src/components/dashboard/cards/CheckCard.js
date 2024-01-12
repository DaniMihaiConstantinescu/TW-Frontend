import styles from "@/css/mainframe.module.css"
import CheckDetails from "./CheckDetails"

export default function CheckCard({number, content}) {
  return (
    <div className={styles.card}>
            <div className={styles.number}>{number}</div>
            <CheckDetails content={content}/>
    </div>
  )
}
