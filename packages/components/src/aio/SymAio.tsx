import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import type { SymAioMsg } from './aioMsg'
import type { SymFRRenderer } from './SymFR'

export interface SymAioHost {
  frRenderers: Record<string, SymFRRenderer>
  frCanRemoveBubble: (result: ReactNode[]) => boolean
}

export interface SymAioCtx {
  messages: SymAioMsg[]
}

export const SymAioHostContext = createContext<SymAioHost>(
  undefined as unknown as SymAioHost,
)

export const SymAioCtxContext = createContext<SymAioCtx>(
  undefined as unknown as SymAioCtx,
)

export const useSymAioHost = () => useContext(SymAioHostContext)

export const useSymAioCtx = () => useContext(SymAioCtxContext)
