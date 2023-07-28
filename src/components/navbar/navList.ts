export interface List {
    id: number;
    title: string;
    href: string;
}
export const navList1: List[] = [
    {
        id: 1,
        title: 'Men',
        href: '',
    },
    {
        id: 2,
        title: 'Women',
        href: '',
    },
    {
        id: 3,
        title: 'Objects',
        href: '',
    },
    {
        id: 4,
        title: 'Journal',
        href: '',
    },
];

export const navList2: List[] = [
    {
        id: 1,
        title: 'Login',
        href: '/auth/login',
    },
    {
        id: 2,
        title: 'Signup',
        href: '/auth/signup',
    },
    {
        id: 3,
        title: 'Help',
        href: '',
    },
    {
        id: 4,
        title: 'Contact Us',
        href: '',
    },
];
