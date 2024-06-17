import WebApp from '@twa-dev/sdk';
import { Fragment, useEffect, type ReactNode } from 'react';

interface TMAInitProps {
  children: ReactNode;
}

export const TMAInit = ({ children }: TMAInitProps) => {
  useEffect(() => {
    WebApp.expand();
    WebApp.setHeaderColor('#3D2823');
    WebApp.setBackgroundColor('#138740');
  }, []);

  return <Fragment>{children}</Fragment>;
};
