import { TMAInit } from './TMAInit.tsx'
import { MainRouter } from './main-router.tsx'
import { PrefetchLoadingWrapper } from './prefetch-loading-wrapper.tsx'

export const App = () => {
  return (
    <TMAInit>
      <PrefetchLoadingWrapper>
        <MainRouter />
      </PrefetchLoadingWrapper>
    </TMAInit>
  )
}
