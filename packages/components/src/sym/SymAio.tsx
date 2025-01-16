import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import type { SymAioMsg } from './aioMsg'
import type { SymFRRenderer } from './SymFR'

export interface SymAioHost {
  frRenderers: Record<string, SymFRRenderer>
  frCanRemoveBubble: (result: ReactNode[]) => boolean
}

export interface SymAioCtx {
  messages: SymAioMsg[]
}

/**
 * @experimental
 */
export const useSymAioCtx: () => SymAioCtx = () => {
  const [messages, setMessages] = useState<SymAioMsg[]>([])

  return {
    messages,
    setMessages,
  }
}

export const SymAioHostContext = createContext<SymAioHost>(
  undefined as unknown as SymAioHost,
)

export const SymAioCtxContext = createContext<SymAioCtx>(
  undefined as unknown as SymAioCtx,
)

export const useSymAioHost = () => useContext(SymAioHostContext)
