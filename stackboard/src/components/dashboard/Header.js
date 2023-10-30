import styles from '@/css/dashboard.module.css'
import ButtonGroupHeader from './ButtonGroup';

export default function Header({stack}) {

    function handleCopy(){
        navigator.clipboard.writeText("#"+stack.id);
    }

    return (
        <div className={styles.headerContainer}>
            <h2>{stack.name}</h2>
            <div onClick={handleCopy} className={`${styles.idContainer} ${styles.pointer}`}>{"#"+stack.id}</div>
            <img className={styles.pointer} width="30" height="30" src="https://img.icons8.com/pastel-glyph/35/create-new--v2.png" alt="create-new--v2"/>

            <div className={styles.space}></div>

            <ButtonGroupHeader id={stack.id}/>
            
        </div>
    )
}
