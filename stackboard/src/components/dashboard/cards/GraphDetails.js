import styles from "@/css/mainframe.module.css"

export default function GraphDetails({content}) {
    console.log(content);

    const formattedDate = new Date(content.createdAt).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    return (
        <div className={styles.graphDetails}>
            <br></br>
            <div className={styles.graphHeader}>
                <h3 className={styles.noMargin}>{content.title}</h3>
                <div className={styles.space}></div>
                <h4 className={styles.noMargin}>X axis- {content.xLabel}</h4>
                <h4 className={styles.noMargin}>Y axis- {content.yLabel}</h4>
            </div>
            <p className={styles.noMargin}>{"Created at " + formattedDate}</p>
            <br></br>
            <h4 className={styles.noMargin}>{content.text}</h4>
            <br></br>
        </div>
    )
}
