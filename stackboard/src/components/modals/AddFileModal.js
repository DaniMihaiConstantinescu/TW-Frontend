import styles from "@/css/overlay.module.css";
import { Textarea } from "@mui/joy";
import { TextField } from "@mui/material";
import { fileDB } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"; 
import { v4 } from "uuid";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

export default function AddFileModal({ stackId, handleClose }) {

  const [path, setPath] = useState("");
  const {currentUser} = useAuth()

  const handleIconClick = (e) => {
    e.stopPropagation();
    handleClose();
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const fileRef = ref(fileDB, `files/${v4()}`);

    uploadBytes(fileRef, path).then((snapshot) => {
    
      getDownloadURL(fileRef).then((downloadURL) => {

        const user = {
          "uid": currentUser.uid,
          "stackId": stackId,
        }

        const image = {
          "title": path.name,
          "description": e.target.description.value,
          "url": downloadURL,
          "type": "StackBoard.Checkpoint, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"
        }

        console.log(user);
        console.log(image);

        const apiURL = process.env.NEXT_PUBLIC_SERVER_URL + '/stack/' + user.uid + '/' + user.stackId;
        const respose = axios.post( apiURL, image);

        console.log(apiURL);
        console.log(respose);



      }).catch((error) => {
        console.error('Error getting download URL:', error);
      });
    }).catch((error) => {
      console.error('Error uploading file:', error);
    }); 

    handleClose();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.noMargin}>Add File</h2>
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
                <input type="file" name="file"
                  onChange={(e) => setPath(e.target.files[0])}
                />
            </div>

            <br></br>

            <input type="submit" value='Add' className={styles.submitBtn}/>
        </form>
      </div>
    </div>
  );
}
