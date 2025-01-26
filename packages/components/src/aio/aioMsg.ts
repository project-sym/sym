import type { Message } from '@satorijs/protocol'
import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

export interface SymAioMsg extends Omit<Message, 'messageId'> {
  symHeader?: ReactNode | null | undefined
}

export const SymMsgContext = createContext<SymAioMsg>(
  undefined as unknown as SymAioMsg,
)

export const useSymAioMsg = () => useContext(SymMsgContext)
