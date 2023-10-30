import styles from "@/css/mainframe.module.css"
import TextCard from "./cards/TextCard"
import ImageCard from "./cards/ImageCard"
import GraphCard from "./cards/GraphCard"

export default function MainFrame({stack}) {

    const textContent = stack.content[0]
    const imageContent = stack.content[1]
    const graphContent = stack.content[2]

    return (
        <div className={styles.mainContainer}>
            <TextCard number="1" content={textContent}/>
            
            {/* <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/>
            <TextCard number="1" content={textContent}/> */}

            <ImageCard number="2" content={imageContent}/>

            <GraphCard number="3" content={graphContent}/>

        </div>
    )
}
