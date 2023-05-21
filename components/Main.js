import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '../components/Links'
import { Logo } from '../components/Logo'
import { SubTitle } from '../components/SubTitle'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
   return (
      <>
         <main className={`${styles.main} ${inter.className}`}>
            <div className={styles.description}>
               <SubTitle
                  page={props.page}
               />
            </div>

            <Logo />
            <Links />
         </main>
      </>
   )
}
