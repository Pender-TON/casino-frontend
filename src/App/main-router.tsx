import { Fragment, cloneElement } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useDelayedHapticFeedback } from '@utils/useDelayedHapticFeedback'
import { MainPage } from '@pages/main-page'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'
import { UpgradesPage } from '@pages/upgrades-page'

export const MainRouter = () => {
  const location = useLocation()

  const delayedHapticFeedback = useDelayedHapticFeedback()

  const pageElement = useRoutes([
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: 'upgrades',
      element: <UpgradesPage />
    },
    {
      path: '*',
      element: <Navigate to={'/'} />
    }
  ])

  if (!pageElement) return null

  return (
    <Fragment>
      <AnimatePresence mode="wait" onExitComplete={() => delayedHapticFeedback('soft', 250)}>
        {cloneElement(pageElement, { key: location.pathname })}
      </AnimatePresence>
    </Fragment>
  )
}
