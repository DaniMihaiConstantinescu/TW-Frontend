import styles from "@/css/mainframe.module.css"

export default function GraphCard({number,content}) {

    return (
        <div className={styles.card}>
            <div className={styles.number}>{number}</div>
        </div>
    )
}
