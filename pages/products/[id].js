import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { getProducts, getProductById } from "../../pages/api/query";

export async function getStaticProps({ params }) {
    const productData = await getProductById(params.id);
    return {
        props: { productData },
    };
}

export default function Product({ productData }) {
    const router = useRouter();
    if (router.isFallback) {
    return <div>Loading product...</div>;
  }
  const { pid } = router.query

    return (
        <>
        <Layout>
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
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
