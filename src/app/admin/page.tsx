import { AddProduct } from '@/components/AddProduct';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div className="container flex items-center justify-center">
            <AddProduct />
        </div>
    );
};

export default page;
