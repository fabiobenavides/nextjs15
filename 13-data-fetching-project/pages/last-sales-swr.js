import useSWR from 'swr';
import { useState, useEffect } from 'react';

export default function LastSalesPage(props) {

    const [sales, setSales] = useState(props.sales);
    const { data, error, isLoading } = useSWR('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/sales.json', (url) => fetch(url).then(res => res.json()));

    useEffect(() => {
        if (data) {
            const transformedSales = [];
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volunme
                });
            }
            setSales(transformedSales);
        }
    }, [data]);


    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (isLoading && !sales && !data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Last Sales</h1>
            <ul>
                {sales.map(sale => (
                    <li key={sale.id}>
                        {sale.username} - {sale.volume}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {

    return fetch('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/sales.json')
        .then(response => response.json())
        .then(data => {
            const transformedSales = [];
            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volunme
                });
            }

            return {
                props: {
                    sales: transformedSales
                },
                revalidate: 10 // 10 seconds
            };
        });
}

