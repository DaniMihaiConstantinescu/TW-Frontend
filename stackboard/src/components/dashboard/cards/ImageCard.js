import styles from "@/css/mainframe.module.css"
import TextDetails from "./TextDetails"

export default function ImageCard({number, content}) {
    return (
        <div className={styles.card}>
            <div className={styles.number}>{number}</div>
            <TextDetails content={content}/>
            <img className={styles.image} src={content.url}></img>
        </div>
    )
}
