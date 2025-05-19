import { Fragment } from "react";
import { getData } from '../../utils/data';
import { useRouter } from 'next/router';

export default function ProductDetail(props) {
  const router = useRouter();

  // If fallback is true and page is not yet generated,
  // show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If we have no product, show an error state
  if (!props.product) {
    return (
      <div>
        <h1>Product not found!</h1>
        <p>Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <Fragment>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  try {
    console.log('getStaticProps');
    const data = await getData();
    const { products } = data;

    const productId = context.params.pid;
    const product = products.find(product => product.id === productId);

    if (!product) {
      return {
        props: {
          product: null // Instead of notFound, we'll handle this in the component
        }
      };
    }

    return {
      props: {
        product
      },
      revalidate: 10, // Re-generate the page every 10 seconds
      // This is useful for data that changes frequently
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        product: null
      }
    };
  }
}

export async function getStaticPaths() {
  try {
    const data = await getData();
    const { products } = data;

    const paths = products.map(product => ({
      params: { pid: product.id }
    }));

    console.log('Generated paths:', paths);

    return {
      paths: paths,
      fallback: true // Changed to true to handle non-existent paths more gracefully
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: true
    };
  }
}