import { TMAInit } from './TMAInit.tsx'
import { Layout } from './Layout.tsx'
import { PrefetchLoadingWrapper } from './prefetch-loading-wrapper.tsx'

export const App = () => {
  return (
    <TMAInit>
      <PrefetchLoadingWrapper>
        <Layout />
      </PrefetchLoadingWrapper>
    </TMAInit>
  )
}
