import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/products/ProductCard';
import { FC, Suspense } from 'react';
// import { Products } from '@/db/schema';
import ProductSkeleton from '@/components/products/ProductSkeleton';
import Products from '@/components/Products';
interface pageProps {
    params: {
        gender: string;
    };
}

const page: FC<pageProps> = async ({ params }) => {
    const gender = params.gender === 'men' ? 'male' : 'female';
    // const getProducts = async () => {
    //     const response = await fetch(
    //         `${process.env.NEXT_PUBLIC_BASE_URL}/getProducts`,
    //         { method: 'POST', body: JSON.stringify({ gender }) }
    //     );
    //     const result = await response.json();
    //     return result;
    // };
    // const apiResponse = await getProducts();
    // let products: Products[] = [];
    // if (apiResponse.status === 'success') products = apiResponse.data;
    return (
        <div className="container mt-5 flex gap-5">
            <FilterBar />
            <section className="container grid gap-5">
                <Suspense
                    fallback={
                        <ProductSkeleton count={9} className="grid-cols-3" />
                    }
                >
                    <Products gender={gender} className="grid-cols-3" />
                </Suspense>
            </section>
        </div>
    );
};

export default page;
