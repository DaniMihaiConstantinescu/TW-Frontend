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
      <h3>Sign in to the account</h3>

      <AuthForm/>

      <br></br>

      <GoogleButton/>
      <GitHubButton/>

      <br></br>
      <br></br>
      <br></br>

      <Link href='/register' className={styles.linkUrl}><span className={styles.colBlack}>Don’t have an account?</span> Create an account</Link>

    </div>
  );
}
