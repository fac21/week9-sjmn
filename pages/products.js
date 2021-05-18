import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout.js";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";
import Container from "../components/Container/Container.js";

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>RollerNuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1> PRODUCTS</h1>
      </Container>
    </Layout>
  );
}
