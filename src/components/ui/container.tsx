import { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
  }

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="flex flex-col gap-7">{children}</div>;
};
