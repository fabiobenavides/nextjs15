import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Fabio Benavides NextJS Events</title>
        <meta name="description" content="NextJS Events practice project" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
