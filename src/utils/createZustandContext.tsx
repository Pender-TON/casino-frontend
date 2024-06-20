import { createContext, useContext, useState } from 'react'
import { type StoreApi } from 'zustand'

export const createZustandContext = <TInitial, TStore extends StoreApi<any>>(
  getStore: (initial: TInitial) => TStore
) => {
  const Context = createContext(null as any as TStore)

  const Provider = (props: { children?: React.ReactNode; initialValue: TInitial }) => {
    const { initialValue, children } = props

    const [store] = useState(() => getStore(initialValue))

    return <Context.Provider value={store}>{children}</Context.Provider>
  }

  return {
    useContext: () => useContext(Context),
    Context,
    Provider
  }
}
