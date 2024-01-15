import styles from "@/css/mainframe.module.css"
import TextCard from "./cards/TextCard"
import ImageCard from "./cards/ImageCard"
import GraphCard from "./cards/GraphCard"
import { useEffect, useState } from "react";
import CheckCard from "./cards/CheckCard";

export default function MainFrame({stack}) {


    const [content, setContent] = useState([]);
    // console.log(stack);

    const typesMap = {
        "message": "StackBoard.Message, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
        "picture": "StackBoard.Picture, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
        "graph": "StackBoard.Graph, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
        "checkpoint": "StackBoard.CheckPoint, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null",
    }

    useEffect(() => {

        if (stack.hasOwnProperty('nodes')) {
            setContent(stack.nodes)
          } 
    }, [stack]);
    

    return (
        <div className={styles.mainContainer}>

            {content.map((node, index) =>
                node.type === typesMap.message ? (
                    <TextCard key={index} number={index + 1} content={node} />

                ) : node.type === typesMap.picture ? (
                    <ImageCard key={index} number={index + 1} content={node} />
                
                ): node.type === typesMap.checkpoint ? (
                    <CheckCard key={index} number={index + 1} content={node} />                    
                    
                ) : node.type === typesMap.graph ? (
                    <GraphCard key={index} number={index + 1} content={node} />
                ) : null
            )}

        </div>
    )
}
