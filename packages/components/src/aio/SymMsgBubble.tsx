import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import { useSymMsgGroupState } from './SymMsgGroup'

export interface SymMsgBubbleProps {
  children: ReactNode
}

export const SymMsgBubble = ({ children }: SymMsgBubbleProps) => {
  const { first, last } = useSymMsgGroupState()

  return (
    <div
      className={clsx({
        'sym-aio-msg-bubble': true,
        'sym-aio-msg-bubble-first': first,
        'sym-aio-msg-bubble-last': last,
      })}
    >
      {children}
      {last && (
        <svg
          viewBox="0 0 11 20"
          width="11"
          height="20"
          className="sym-aio-msg-bubble-tail"
        >
          <use href="#message-tail-filled"></use>
        </svg>
      )}
    </div>
  )
}
