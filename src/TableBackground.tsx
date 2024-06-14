import { ReactNode } from 'react';
import tableTop from './assets/table-top@3x.webp';
import tableBottom from './assets/table-bottom@3x.webp';

export const TableBackground = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full pb-20">
        <img className="h-1/2 w-full" src={tableTop} />
        <img className="h-1/2 w-full" src={tableBottom} />
      </div>
      <div className="isolate w-full h-full">{children}</div>
    </div>
  );
};
