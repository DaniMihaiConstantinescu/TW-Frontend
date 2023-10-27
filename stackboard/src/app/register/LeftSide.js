"use client";

import styles from '@/css/auth.module.css'
import AuthForm from '@/components/auth/AuthForm';
import GoogleButton from '@/components/auth/GoogleButton';
import GitHubButton from '@/components/auth/GitHubButton';
import Link from 'next/link';

export default function LeftSide() {

  return (
    <div className={styles.leftContainer}>
      <h1 className={styles.colBlue}>StackBoard</h1>
      <h3>Create an account</h3>

      <AuthForm action="register"/>

      <br></br>

      <GoogleButton/>
      <GitHubButton/>

      <br></br>
      <br></br>
      <br></br>

      <Link href='/login' className={styles.linkUrl}><span className={styles.colBlack}>Already have an account?</span> Login</Link>

    </div>
  );
}
