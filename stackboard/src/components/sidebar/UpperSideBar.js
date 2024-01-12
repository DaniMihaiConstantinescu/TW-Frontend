import styles from "@/css/sidebar.module.css"
import AddButton from "./buttons/AddButton"
import StackButton from "./buttons/StackButton"
import { useEffect, useState } from "react"
import axios from "axios"


export default function UpperSideBar() {

  const [stacks, setStacks]  = useState([])

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/all_stacks/' + 'raduAPI')
      .then((res) => {
        console.log(res.data.stacks);

        const stackArray = Object.entries(res.data.stacks || []).map(([key, value]) => ({
          id: key,
          ...value,
        }));

        setStacks(stackArray);

      })
  }, [])


  return (
    <div className={styles.upperSideBar}>
        <h1 className={styles.noMargin}>StackBoard</h1>
        <AddButton/>

        <div className={styles.stackContainer}>


          {stacks?.map((stack,index) => 
            <StackButton 
                key={index} 
                id={index}
                name={stack.name} 
                color={stack.color} 
            />
          )}

        </div>

    </div>
  )
}
