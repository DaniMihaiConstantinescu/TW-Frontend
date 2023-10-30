import { useStack } from '@/contexts/StackContext'
import styles from '@/css/sidebar.module.css'

export default function StackButton({color, name, id}) {
  const {changeStack} = useStack()
  const handleClick = () =>{
    changeStack(id)
  }

  return (
    <button onClick={handleClick} style={{backgroundColor: color}} className={styles.stackBtn} role="button">
        <div className={styles.centeredContent}>
            <span>{name}</span>
        </div>
    </button>
  )
}
