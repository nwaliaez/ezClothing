import { FC } from 'react';
import Logo from './navbar/Logo';
import CartIcon from './navbar/CartIcon';
import LeftList from './navbar/LeftList';
import RightList from './navbar/RightList';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <div className="sticky z-10 top-0 text-sm bg-primary text-primary-foreground w-screen py-5">
            <div className="container flex justify-between ">
                <div className="flex items-center gap-10">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <LeftList />
                </div>
                <div className="flex items-center gap-5">
                    <RightList />
                    <CartIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
