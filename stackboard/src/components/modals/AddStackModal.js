import { useAuth } from "@/contexts/AuthContext";
import styles from "@/css/overlay.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function AddStackModal({ handleClose }) {

  const [stackColor, setStackColor] = useState("#A4B0BE");
  const {currentUser} = useAuth()


  const handleIconClick = (e) => {
    e.stopPropagation();
    handleClose();
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setStackColor(newColor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()


    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    const stack = {
        "name": e.target.name.value,
        "color": stackColor,
        "nodes": [],
        "createdAt": formattedDate,
        "userAPIKey": currentUser.uid
    }


    // console.log(JSON.stringify(stack));

    // const url = process.env.NEXT_PUBLIC_SERVER_URL + '/stack/' + stack.userAPIKey + '/' + stack.name + '/' + stack.color;
    // console.log(url);


    try {

      const url = process.env.NEXT_PUBLIC_SERVER_URL + '/stack/' + stack.userAPIKey + '/' + stack.name + '/' + stack.color;

      const response = await fetch(url , {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
          },
          body: JSON.stringify(stack),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      // Perform any additional actions after successful POST

  } catch (error) {
      console.error('Error:', error.message);
  }





    // put in db (and probably refresh)
    // console.log(stack);

    handleClose();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.noMargin}>Create Stack</h2>
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
                <p className={styles.textLabel}>Stack Name: </p>
                <TextField name="name" id="outlined-basic" size="small" variant="outlined" />
            </div>

            <div className={styles.rowContainer}>
                <p className={styles.textLabel}>Stack Color: </p>
                <TextField
                    value={stackColor} 
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                />
                <input
                    type="color"
                    value={stackColor} 
                    onChange={handleColorChange} 
                />
            </div>

            <input type="submit" value='Create' className={styles.submitBtn}/>
        </form>
      </div>
    </div>
  );
}
