import { FC } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import Link from 'next/link';

interface LeftListProps {}

const LeftList: FC<LeftListProps> = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <ul className="flex gap-5">
            <li>
                <Link href="/">Men</Link>
            </li>
            <li>
                <Link href="/">Women</Link>
            </li>
        </ul>
    );
};

export default LeftList;
