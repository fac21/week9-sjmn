import Head from 'next/head'
//import Image from 'next/image'
import styles from './layout.module.css'
//import utilStyles from '../../styles/utils.module.css'
//import Link from 'next/link'
import Nav from '../Nav/Nav.js'
//import Footer from '../Footer/Footer.js'

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
      { children }
      {/* <Footer /> */}

        </div>
    )
}