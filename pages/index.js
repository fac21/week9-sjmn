import Head from 'next/head'
import Layout from '../components/Layout/Layout.js'
import Nav from '../components/Nav/Nav.js'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Layout>
    {/* <div className={styles.container}> */}
      <Head>
        <title>RollerNuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav></Nav>
    {/* </div> */}
    </Layout>
  )
}
