import type { ReactNode } from 'react'
import { SymAioAvatarContainer } from './SymAioAvatarContainer'
import { useSymAioMsg } from './aioMsg'

export interface SymMsgContainerProps {
  children: ReactNode
}

export const SymMsgContainer = ({ children }: SymMsgContainerProps) => {
  const msg = useSymAioMsg()

  return (
    <div className="sym-aio-msg-container">
      <div className="sym-aio-msg-gutter" />
      <SymAioAvatarContainer />
      <div className="sym-aio-msg-body-container">
        {msg.symHeader && (
          <div className="sym-aio-msg-header-container">{msg.symHeader}</div>
        )}
        <div className="sym-aio-msg-content-container">{children}</div>
      </div>
    </div>
  )
}
