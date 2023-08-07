import Hero from '@/components/Hero';
import Products from '@/components/Products';
import SubNav from '@/components/SubNav';
import { useState } from 'react';

export default function Home({
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
                <Products
                    gender={searchParams.query || 'male'}
                    className="grid-cols-4"
                />
            </section>
        </div>
    );
}
