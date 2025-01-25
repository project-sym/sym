import type { ReactNode } from 'react'
import { SymAioAvatarContainer } from './SymAioAvatarContainer'

export interface SymMsgContainerProps {
  children: ReactNode
}

export const SymMsgContainer = ({ children }: SymMsgContainerProps) => {
  return (
    <div className="sym-aio-msg-container">
      <div className="sym-aio-msg-gutter" />
      <SymAioAvatarContainer />
      <div className="sym-aio-msg-body-container">
        <div className="sym-aio-msg-header-container"></div>
        <div className="sym-aio-msg-content-container">{children}</div>
      </div>
    </div>
  )
}
