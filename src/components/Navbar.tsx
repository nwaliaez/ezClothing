import { FC } from 'react';
import Logo from './navbar/Logo';
import List from './navbar/List';
import { navList1, navList2 } from './navbar/navList';
import CartIcon from './navbar/CartIcon';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <div className="sticky z-10 top-0 text-sm bg-primary text-primary-foreground w-full py-5">
            <div className="container flex justify-between ">
                <div className="flex items-center gap-10">
                    <Logo />
                    <List list={navList1} />
                </div>
                <div className="flex items-center gap-5">
                    <List list={navList2} />
                    <CartIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
