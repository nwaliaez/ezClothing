import { FC } from 'react';
import Image from 'next/image';

interface ProductCardProps {
    src: string;
    title: string;
    price: number;
}

const ProductCard: FC<ProductCardProps> = ({ title, src, price }) => {
    return (
        <div className="grid gap-1">
            <div className="bg-secondary flex items-center justify-center h-80">
                <Image
                    src={src}
                    alt="tee"
                    height={100}
                    width={400}
                    className="drop-shadow-lg"
                />
            </div>
            <div>{title}</div>
            <div className="text-sm font-extralight">${price}</div>
        </div>
    );
};

export default ProductCard;
