import styles from "@/css/mainframe.module.css"

export default function TextDetails({content}) {
  
  const {title, createdAt, text} = content
  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div className={styles.textDetails}>
      <br></br>
      <h3 className={styles.noMargin}>{title}</h3>
      <p className={styles.noMargin}>{"Created at " + formattedDate}</p>
      <br></br>
      <h4 className={styles.noMargin}>{text}</h4>
      <br></br>
    </div>
  )
}
