import { FC } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import Link from 'next/link';

interface LeftListProps {}

const LeftList: FC<LeftListProps> = async () => {
    const session = await getServerSession(authOptions);
    return (
        <ul className="flex gap-5">
            <li>
                <Link href="/clothing/men">Men</Link>
            </li>
            <li>
                <Link href="/clothing/women">Women</Link>
            </li>
        </ul>
    );
};

export default LeftList;
