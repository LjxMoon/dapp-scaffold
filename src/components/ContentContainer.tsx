import { FC } from 'react';
import Link from "next/link";
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-1 flex-col items-center">
      <div className="items-center flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
