import { FC } from 'react';
import ProductCard from './products/ProductCard';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Products } from '@/db/schema';

interface ProductsProps {
    className?: string;
    gender: string;
}

const Products: FC<ProductsProps> = async ({ className, gender }) => {
    const genderFilter = gender == 'female' ? 'female' : 'male';
    const delay = () => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                return resolve();
            }, 2000);
        });
    };
    await delay();
    const getProducts = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/getProducts`,
            { method: 'POST', body: JSON.stringify({ gender: genderFilter }) }
        );
        const result = await response.json();
        return result;
    };
    const apiResponse = await getProducts();
    let products: Products[] = [];
    if (apiResponse.status === 'success') products = apiResponse.data;
    return (
        <>
            <div className={`grid gap-5 ${className}`}>
                {products?.map((product) => (
                    <ProductCard
                        title={product.productTitle}
                        src={product.imageUrl}
                        price={product.price}
                        key={product.id}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <Button>
                    <Link className="flex items-center" href="/clothing/men">
                        Shop More
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </>
    );
};

export default Products;
