import type { ReactNode } from 'react'

export interface SymMsgBubbleProps {
  children: ReactNode
}

export const SymMsgBubble = ({ children }: SymMsgBubbleProps) => (
  <div className="sym-aio-msg-bubble">{children}</div>
)
