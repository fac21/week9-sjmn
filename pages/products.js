import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout.js";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";
import Container from "../components/Container/Container.js";
import { getProducts } from "../pages/api/query";

export async function getStaticProps() {
  const allProducts = await getProducts();
  const productData = JSON.stringify(allProducts);

  return {
    props: { productData },
  };
}

export default function Products({ productData }) {
  const productsArray = JSON.parse(productData);

  return (
    <Layout>
      <Head>
        <title>RollerNuts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <>
          <h1> PRODUCTS</h1>
          <ul>
            {productsArray.map((product) => {
              return (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <>
                    <Link href="/products/[id]" as={`/products/${product.id}`}>
                      <a>
                        <div>
                          <>
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={400}
                              height={400}
                              className=""
                            />
                          </>
                        </div>
                      </a>
                    </Link>
                  </>
                  <button onClick={createCookie}>Add to basket</button>
                </li>
              );
            })}
          </ul>
        </>
      </Container>
    </Layout>
  );
}
