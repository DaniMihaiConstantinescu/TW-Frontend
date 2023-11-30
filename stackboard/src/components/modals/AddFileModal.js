import styles from "@/css/overlay.module.css";
import { Textarea } from "@mui/joy";
import { TextField } from "@mui/material";

export default function AddFileModal({ stackId, handleClose }) {

  const handleIconClick = (e) => {
    e.stopPropagation();
    handleClose();
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    const image = {
        "stackId": stackId,
        "description": e.target.description.value,
        "file": e.target.file.value
    }

    // add image to firestore 
    // + add to db  
    console.log(image);

    handleClose();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.noMargin}>Add Image</h2>
        <img
          onClick={handleIconClick}
          width="20"
          height="20"
          src="https://img.icons8.com/ios/30/delete-sign--v1.png"
          alt="delete-sign--v1"
        />
      </div>

      <div className={styles.contentContainer}>

        <form onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.rowContainer}>
                <p className={styles.textLabel}>File description: </p>
                <Textarea
                    name="description"
                    style={{width: '100%'}}
                    minRows={7}
                    variant="outlined"
                />
            </div>

            <div className={styles.rowContainer}>
                <p className={styles.textLabel}>File Location: </p>
                <input type="file" name="file"/>
            </div>

            <br></br>

            <input type="submit" value='Add' className={styles.submitBtn}/>
        </form>
      </div>
    </div>
  );
}