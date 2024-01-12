import styles from "@/css/mainframe.module.css"

export default function CheckDetails({content}) {
  
  const {title, createdAt, description} = content

  const formattedDate = new Date(createdAt).toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });


  return (
    <div className={styles.checkDetails}>
        <div style={{width:"100%" ,marginTop: "1%", marginBottom: "1%", display:"flex", justifyContent: "space-between"}}>
            <div>
                <h3 className={styles.noMargin}>{title}</h3>
                <p className={styles.noMargin}>{"Created at " + formattedDate}</p>
            </div>

            <h4 className={styles.noMargin}>{description}</h4>

            <svg width="30" height="30" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M61.88,93.12h0a3,3,0,0,0,.44.36l.24.13a1.74,1.74,0,0,0,.59.24l.25.07h0a3,3,0,0,0,1.16,0l.26-.08.3-.09a3,3,0,0,0,.3-.16l.21-.12a3,3,0,0,0,.46-.38L93,66.21A3,3,0,1,0,88.79,62L67,83.76V3a3,3,0,0,0-6,0V83.76L39.21,62A3,3,0,0,0,35,66.21Z"/><path d="M125,88a3,3,0,0,0-3,3v22a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V91a3,3,0,0,0-6,0v22a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V91A3,3,0,0,0,125,88Z"/></svg>
        </div>

    </div>
  )
}
