'use client';
import { FC } from 'react';
import ListItem from './subNav/ListItem';
import Link from 'next/link';

interface SubNavProps {
    gender: string;
}

const SubNav: FC<SubNavProps> = ({ gender }) => {
    return (
        <ul className="flex gap-10 justify-center font-light text-muted self-center">
            <ListItem active={gender == 'male'}>
                <Link href="/?query=male">Men</Link>
            </ListItem>
            <ListItem active={gender == 'female'}>
                <Link href="/?query=female">Women</Link>
            </ListItem>
        </ul>
    );
};

export default SubNav;
