import homeStyles from '@/css/homepage.module.css'
import Link from 'next/link'
import ParticleBg from './ParticleBg'

export default function NoUser() {
  return (
    <>
        <ParticleBg/>
        <div className={homeStyles.noUser}>

            <div className={homeStyles.errorContainer}>
                <h1 className={`${homeStyles.title} ${homeStyles.noMarginTop}`}>StackBoard</h1>

                <h3 className={homeStyles.noMargin}>You are not logged in</h3>
                <br></br>
                <Link href='/login' className={homeStyles.redirectLink} >
                    <input type="submit" value='Login' className={homeStyles.submitBtn}/>
                </Link>
            </div>

        </div>
    </>
  )
}
