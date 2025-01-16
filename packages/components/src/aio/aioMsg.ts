import type { Message } from '@satorijs/protocol'
import { createContext, useContext } from 'react'

export interface SymAioMsg extends Omit<Message, 'messageId'> {}

export const SymMsgContext = createContext<SymAioMsg>(
  undefined as unknown as SymAioMsg,
)

export const useSymAioMsg = () => useContext(SymMsgContext)
