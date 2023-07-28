import { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
  }

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container relative flex justify-center">{children}</div>;
};
