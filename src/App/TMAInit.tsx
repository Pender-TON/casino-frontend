import WebApp from '@twa-dev/sdk'
import { Fragment, useEffect, useState, type ReactNode } from 'react'
import { useTonConnectUI } from '@tonconnect/ui-react'

import { DesktopPlaceholder } from '@components/desktop-placeholder'

interface TMAInitProps {
  children: ReactNode
}

export const TMAInit = ({ children }: TMAInitProps) => {
  const [forceDesktop, setForceDesktop] = useState(false)

  const [, setOptions] = useTonConnectUI()

  useEffect(() => {
    WebApp.expand()
    WebApp.setHeaderColor('#261815')
    WebApp.setBackgroundColor('#3d2823')
    WebApp.enableClosingConfirmation()

    // to avoid slighty scrolled viewport on expanding/collapsing the app
    WebApp.onEvent(
      'viewportChanged',
      ({ isStateStable }) => isStateStable && window.scrollTo({ top: 0, behavior: 'smooth' })
    )
  }, [])

  useEffect(() => {
    // setOptions({
    //   uiPreferences: {
    //     borderRadius: 's',
    //     colorsSet: {
    //       LIGHT: {
    //         connectButton: {
    //           background: 'linear-gradient(225deg, #B58B56 0%, #803B24 100%)',
    //           foreground: 'var(--primary-accent)'
    //         }
    //       },
    //       DARK: {
    //         connectButton: {
    //           background: '#803B24',
    //           foreground: 'var(--primary-accent)'
    //         }
    //       }
    //     }
    //   }
    // })
  }, [setOptions])

  const handleChangeDesktop = (force: boolean) => setForceDesktop(force)

  const isMobile =
    WebApp.platform === 'android' || WebApp.platform === 'android_x' || WebApp.platform === 'ios' || forceDesktop

  return <Fragment>{isMobile ? children : <DesktopPlaceholder onChangeForceDesktop={handleChangeDesktop} />}</Fragment>
}
