import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/products/ProductCard';
import { FC } from 'react';
import { Products } from '@/db/schema';
interface pageProps {
    params: {
        gender: string;
    };
}

const page: FC<pageProps> = async ({ params }) => {
    const gender = params.gender === 'men' ? 'male' : 'female';
    const getProducts = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/getProducts`,
            { method: 'POST', body: JSON.stringify({ gender }) }
        );
        const result = await response.json();
        return result;
    };
    const apiResponse = await getProducts();
    let products: Products[] = [];
    if (apiResponse.status === 'success') products = apiResponse.data;
    return (
        <div className="container mt-5 flex gap-5">
            <FilterBar />
            <div className="flex-1 grid grid-cols-3 gap-5">
                {products?.map((product) => (
                    <ProductCard
                        title={product.productTitle}
                        src={product.imageUrl}
                        price={product.price}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;
