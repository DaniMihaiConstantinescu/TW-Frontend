import styles from '@/css/auth.module.css'
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import styled from '@emotion/styled';

const InputField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6f7d90',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });

export default function AuthForm() {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const user = {
      "email": event.target.email.value,
      "password": event.target.password.value
    }

    console.log(user);

  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <InputField name='email' type='email' label="Email"/>

        <InputField
          name='password'
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <input type="submit" value='Submit' className={styles.submitBtn}/>
      </form>
  )
}
