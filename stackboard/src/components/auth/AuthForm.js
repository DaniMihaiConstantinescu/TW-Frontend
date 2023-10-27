import styles from '@/css/auth.module.css'
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import styled from '@emotion/styled';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

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

function handleError(e){

  switch (e.code) {
    case "auth/weak-password":
      alert("Password should be at least 6 characters");
      break;

    case "auth/email-already-in-use":
      alert("Email is already used");
      break;

    case "auth/invalid-login-credentials":
      alert("Email or Password is invalid");
      break;

    default:
      break;
  }
}

export default function AuthForm({action}) {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  const { signup, signin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const user = {
      "email": event.target.email.value,
      "password": event.target.password.value
    }

    if (action == "register") {

      try {
        setLoading(true)
        await signup(user.email, user.password)
        router.push('/')
      } catch(e) {
        handleError(e)
      }
      setLoading(false)

    }else if (action == "login") {
      
      try {
        setLoading(true)
        await signin(user.email, user.password)
        router.push('/')
      } catch(e) {
        handleError(e)
      }
      setLoading(false)

    }


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

        <input disabled={loading} type="submit" value='Submit' className={styles.submitBtn}/>
      </form>
  )
}
