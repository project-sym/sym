import { createContext, useContext } from 'react'

export interface SymMsgGroupCtx {
  group: boolean
}

export const SymMsgGroupContext = createContext<SymMsgGroupCtx>({
  group: true,
})

export const useSymMsgGroup = () => {
  const context = useContext(SymMsgGroupContext)

  return {
    ...context,
  }
}

export const SymMsgGroup = () => <></>
