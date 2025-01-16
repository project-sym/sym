import type { ReactNode } from 'react'

export interface SymMsgContainerProps {
  children: ReactNode
}

export const SymMsgContainer = ({ children }: SymMsgContainerProps) => {
  return (
    <div className="sym-aio-msg-container">
      <div className="sym-aio-msg-gutter" />
      <div className="sym-aio-msg-avatar-container" />
      <div className="sym-aio-msg-content-container">{children}</div>
    </div>
  )
}
