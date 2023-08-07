import { FC } from 'react';
import { Skeleton } from '../ui/skeleton';

interface ProductSkeletonProps {
    className?: string;
    count?: number;
}

const ProductSkeleton: FC<ProductSkeletonProps> = ({ className, count }) => {
    return (
        <div className={`grid gap-5 ${className}`}>
            {Array.from({ length: count || 1 }).map((_, i) => (
                <>
                    <Skeleton className="col-span-1 h-64 rounded-none" />
                </>
            ))}
        </div>
    );
};

export default ProductSkeleton;
