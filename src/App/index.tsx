import { TMAInit } from './TMAInit.tsx'
import { Layout } from './Layout.tsx'
import { UserProvider } from '@features/user/user-provider.tsx'
import { TapProvider } from '@features/taps/tap-provider.tsx'

export const App = () => {
  return (
    <TMAInit>
      <UserProvider>
        <TapProvider>
          <Layout />
        </TapProvider>
      </UserProvider>
    </TMAInit>
  )
}
