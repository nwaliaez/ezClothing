import { FC } from 'react';
import ListItem from './ListItem';
import { List } from './navList';

interface ListProps {
    list: List[];
}

const List: FC<ListProps> = ({ list }) => {
    return (
        <ul className="flex gap-5">
            {list.map((item, index) => (
                <ListItem key={item.id} href={item.href}>
                    {item.title}
                </ListItem>
            ))}
        </ul>
    );
};

export default List;
