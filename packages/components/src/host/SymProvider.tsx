import type { ReactNode } from 'react'

export interface SymProviderProps {
  className?: string | undefined
  children: ReactNode
}

export const SymProvider = ({ className, children }: SymProviderProps) => (
  <div className={`sym-provider ${className}`}>{children}</div>
)
