import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout.js";
// import Nav from "../components/Nav/Nav.js";
// import Footer from "../components/Footer/Footer.js";
import Container from "../components/Container/Container.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>RollerNuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <>
          <Link href="/products">
            <a>
              <Image
                src="/../public/images/skates1.jpg"
                className=""
                alt="Featured rollerskates"
                width={460}
                height={575}
              />
            </a>
          </Link>
          <Link href="/products">
            <a>
              <Image
                src="/../public/images/donuts.jpg"
                className=""
                alt="Featured donuts"
                width={460}
                height={575}
              />
            </a>
          </Link>
        </>
      </Container>
    </Layout>
  );
}
