import Head from "next/head";
import Container from "../components/Container/Container.js";
import Layout from "../components/Layout/Layout.js";
import styles from "../styles/Home.module.css";

export default function Checkout({}) {




  return (
    <Layout>
      <Container>
        <div>
          <p className={styles}>Product</p>
          <p>Description</p>
          <p>Price</p>
        </div>
      </Container>
    </Layout>
  );
}

