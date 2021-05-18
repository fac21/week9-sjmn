import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout.js'
import Nav from '../components/Nav/Nav.js'
import Footer from "../components/Footer/Footer.js";
import Container from "../components/Container/Container.js";

export default function Home() {
  return (
      <Layout>
    {/* <div className={styles.container}> */}
      <Head>
        <title>RollerNuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav></Nav>
      <Container />
      <Footer />
    {/* </div> */}
    </Layout>
  )
}
