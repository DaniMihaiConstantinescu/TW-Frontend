import styles from "@/css/sidebar.module.css"
import AddButton from "./buttons/AddButton"
import StackButton from "./buttons/StackButton"

function getStacks(){
  return [
    {
      "id": 1,
      "name": "Stack 1",
      "color": "#21AA27"
    },
    {
      "id": 2,
      "name": "Stack 2",
      "color": "#A4B0BE"
    },
    {
      "id": 3,
      "name": "Stack 3",
      "color": "#21AA27"
    },
    {
      "id": 4,
      "name": "Stack 4",
      "color": "#C3BF5E"
    },
    {
      "id": 5,
      "name": "Stack 5",
      "color": "#21AA27"
    },
    {
      "id": 6,
      "name": "Stack 6",
      "color": "#21AA27"
    },
    {
      "id": 7,
      "name": "Stack 7",
      "color": "#21AA27"
    },
    {
      "id": 8,
      "name": "Stack 8",
      "color": "#21AA27"
    },
    {
      "id": 9,
      "name": "Stack 9",
      "color": "#21AA27"
    },
    {
      "id": 10,
      "name": "Stack 10",
      "color": "#21AA27"
    },
    {
      "id": 11,
      "name": "Stack 11",
      "color": "#21AA27"
    },
    {
      "id": 12,
      "name": "Stack 12",
      "color": "#21AA27"
    },
  ]
}

export default function UpperSideBar() {

  const stacks = getStacks()

  return (
    <div className={styles.upperSideBar}>
        <h1 className={styles.noMargin}>StackBoard</h1>
        <AddButton/>

        <div className={styles.stackContainer}>

          {stacks?.map((stack) => 
            <StackButton key={stack.id} color={stack.color} name={stack.name} />
          )}
        </div>

    </div>
  )
}
