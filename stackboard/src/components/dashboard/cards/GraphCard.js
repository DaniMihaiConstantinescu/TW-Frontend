import styles from "@/css/mainframe.module.css"
import Graph from "./Graph"
import GraphDetails from "./GraphDetails"

export default function GraphCard({number,content}) {

    return (
        <div className={styles.card}>
            <div className={styles.number}>{number}</div>
            <Graph content={content}/>  
            <GraphDetails content={content}/>
        </div>
    )
}
