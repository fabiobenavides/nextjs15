import path from 'path';
import fs from 'fs/promises';

function HomePage(props) {

  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - {product.description}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {

  // Fetch data from an API or read from a file
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const { products } = data;

  return {
    props: {
      products
    }
  };
}



export default HomePage;
