import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ListItemProps {
  href: string;
  children: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ href, children }) => {
  return (
    <Button variant="ghost" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default ListItem;
