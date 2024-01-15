import styles from "@/css/sidebar.module.css"
import AddButton from "./buttons/AddButton"
import StackButton from "./buttons/StackButton"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "@/contexts/AuthContext"


export default function UpperSideBar() {

  const [stacks, setStacks]  = useState([])
  const {currentUser} = useAuth()


  const fetchData = async () => {
    axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/all_stacks/' + currentUser.uid)
      .then((res) => {
        
        // console.log(res.data.stacks);

        if(res.data == null)
          setStacks([])
        else
          if (res.data.stacks) {
            const array = Object.values(res.data.stacks);
            setStacks(array.filter((stack) => stack !== null));
          }
      })
  }

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
        // console.log("New Data");
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentUser.uid]); 


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
