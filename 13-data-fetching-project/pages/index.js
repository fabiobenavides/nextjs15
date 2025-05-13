import Link from 'next/link';
import { getData } from '../utils/data';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log('getStaticProps');
  const data = await getData();
  const { products } = data;

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
        permanent: false, // If true, a 308 redirect will be used
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true, // If true, a 404 page will be shown
    };
  }

  return {
    props: {
      products
    },
    revalidate: 10, // Re-generate the page every 10 seconds
    // This is useful for data that changes frequently
  };
}

export default HomePage;
