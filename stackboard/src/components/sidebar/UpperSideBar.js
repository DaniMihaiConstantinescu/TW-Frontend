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
        
        // console.log(res.data.stacks.filter((stack) => stack !== null));

        if (res.data.stacks) {
          setStacks(res.data.stacks.filter((stack) => stack !== null));
        }
      })
  }, [])


  return (
    <div className={styles.upperSideBar}>
        <h1 className={styles.noMargin}>StackBoard</h1>
        <AddButton/>

        <div className={styles.stackContainer}>


          {stacks?.map((stack) => 
              <StackButton 
                  key={stack.id} 
                  id={stack.id}
                  name={stack.name} 
                  color={stack.color} 
              />
          )}

        </div>

    </div>
  )
}
