import { FC, ReactNode } from "react";
import { Button } from "../ui/button";

interface ListItemProps {
  children: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children }) => {
  return <Button variant="ghost">{children}</Button>;
};

export default ListItem;
