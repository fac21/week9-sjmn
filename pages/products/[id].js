import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { getProducts, getProductById } from "../../pages/api/query";

export async function getStaticProps({ params }) {
    const productData = await getProductById(params.id);
    return {
        props: { productData },
    };
}

export default function Product(props) {

  // const [numInBasket, setNumInBasket] = useState(0);

  // React.useEffect(() => {
  //   // do we need this to update the UI of the basket?
  // })

    const router = useRouter();
    // const { pid } = router.query
    if (router.isFallback) {
      return <div>Loading product...</div>;
    }
  
    const makeCookie = () => {
      let test = { [props.productData.id]: 1 };
      let parsed = JSON.stringify(test);
      let basketStr = "basket=" + parsed;
      document.cookie = basketStr;
        // console.log("about to make a cookie")
        // document.cookie = `basket={"${props.productData.id}":1}` // if no cookie, make one
        console.log(document.cookie)
    }


  const checkExisitingCookie = () => {
    console.log("checkExistingCookie")
    console.log("document.cookie", document.cookie)
    // console.log(JSON.parse(document.cookie).slice(7))
    let oldCookie = JSON.parse((document.cookie).toString().slice(7))
    // let oldCookie = JSON.parse((document.cookie))
    console.log("oldCookie before anything", oldCookie)
    if (oldCookie[props.productData.id]) {
      oldCookie[props.productData.id]++
    }
    else {
      console.log("oldCookie before incrementing", oldCookie)
      oldCookie[props.productData.id] = 1
      console.log("oldCookie should have incremented", oldCookie)
      document.cookie = oldCookie;
    }
     
  }
    
  function addToBasket() {
    console.log("button clicked", document.cookie)
    // check cookie, if none set with one
    !(document.cookie) ? makeCookie() : checkExisitingCookie()
    }
   // set a long max age, array of objects
     
    return (
        <>
        <Layout>
          <h1>{props.productData.name}</h1>
            <>
              <Image
                src={props.productData.image}
                alt={props.productData.name}
                width={400}
                height={400}
                className=""
              />
            </>
          <p>{props.productData.description}</p>
          <button onClick={addToBasket}>Add to basket</button>
        </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const products = await getProducts();
    const paths = products.map(({ id }) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
