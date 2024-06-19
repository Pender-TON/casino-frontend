import WebApp from '@twa-dev/sdk';
import { Fragment, useEffect, type ReactNode } from 'react';
import { DesktopPlaceholder } from './desktop-placeholder';

interface TMAInitProps {
  children: ReactNode;
}

export const TMAInit = ({ children }: TMAInitProps) => {
  useEffect(() => {
    WebApp.expand();
    WebApp.setHeaderColor('#261815');
    WebApp.setBackgroundColor('#261815');

    // to avoid slighty scrolled viewport on expanding/collapsing the app
    WebApp.onEvent(
      'viewportChanged',
      ({ isStateStable }) => isStateStable && window.scrollTo({top: 0, behavior: 'smooth'})
    );
  }, []);

  const isMobile =
    WebApp.platform === 'android' ||
    WebApp.platform === 'android_x' ||
    WebApp.platform === 'ios';

  return <Fragment>{isMobile ? children : <DesktopPlaceholder />}</Fragment>;
};
