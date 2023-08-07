import Hero from '@/components/Hero';
import Products from '@/components/Products';
import SubNav from '@/components/SubNav';
import ProductSkeleton from '@/components/products/ProductSkeleton';
import { Suspense } from 'react';

export default async function Home({
    searchParams,
}: {
    searchParams: { query?: string };
}) {
    return (
        <div className="flex flex-col gap-7">
            <section className="bg-primary text-primary-foreground">
                <Hero />
            </section>
            <section className="container grid gap-5">
                <SubNav gender={searchParams.query || 'male'} />
                <Suspense
                    fallback={
                        <ProductSkeleton count={4} className="grid-cols-4" />
                    }
                >
                    <Products
                        gender={searchParams.query || 'male'}
                        className="grid-cols-4"
                    />
                </Suspense>
            </section>
        </div>
    );
}
