import type { ReactNode } from 'react'
import { SymAioAvatarContainer } from './SymAioAvatarContainer'
import { useSymAioMsg } from './aioMsg'
import { useSymMsgGroup } from './SymMsgGroup'

export interface SymMsgContainerProps {
  children: ReactNode
}

export const SymMsgContainer = ({ children }: SymMsgContainerProps) => {
  const msgGroup = useSymMsgGroup()
  const msg = useSymAioMsg()

  return (
    <div className="sym-aio-msg-container">
      <div className="sym-aio-msg-gutter" />
      {msgGroup.group ? (
        <div className="sym-aio-avatar-placeholder" />
      ) : (
        <SymAioAvatarContainer />
      )}
      <div className="sym-aio-msg-body-container">
        {msg.symHeader && (
          <div className="sym-aio-msg-header-container">{msg.symHeader}</div>
        )}
        <div className="sym-aio-msg-content-container">{children}</div>
      </div>
    </div>
  )
}
