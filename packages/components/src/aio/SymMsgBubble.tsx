import type { ReactNode } from 'react'
import { useSymMsgGroupState } from './SymMsgGroup'

export interface SymMsgBubbleProps {
  children: ReactNode
}

export const SymMsgBubble = ({ children }: SymMsgBubbleProps) => {
  const { last } = useSymMsgGroupState()

  return (
    <div className="sym-aio-msg-bubble">
      {children}
      {last && (
        <>
          <svg
            style={{
              position: 'absolute',
              top: '-10000px',
              left: '-10000px',
            }}
          >
            <defs>
              <symbol id="message-tail-filled" viewBox="0 0 11 20">
                <g
                  transform="translate(9 -14)"
                  fill="inherit"
                  fill-rule="evenodd"
                >
                  <path
                    d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z"
                    transform="matrix(1 0 0 -1 0 49)"
                    id="corner-fill"
                    fill="inherit"
                  />
                </g>
              </symbol>
            </defs>
          </svg>

          <svg
            viewBox="0 0 11 20"
            width="11"
            height="20"
            className="sym-aio-msg-bubble-tail"
          >
            <use href="#message-tail-filled"></use>
          </svg>
        </>
      )}
    </div>
  )
}
