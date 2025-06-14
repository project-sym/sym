import type { ReactNode } from 'react'

export interface SymProviderProps {
  className?: string | undefined
  children: ReactNode
}

export const SymProvider = ({ className, children }: SymProviderProps) => (
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
          <g transform="translate(9 -14)" fill="inherit" fill-rule="evenodd">
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
    {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
    <div className={`sym-provider ${className || ''}`}>{children}</div>
  </>
)
