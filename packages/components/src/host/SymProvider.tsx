import type { ReactNode } from 'react'

export interface SymProviderProps {
  children: ReactNode
}

export const SymProvider = ({ children }: SymProviderProps) => (
  <div className="sym-provider" children={children} />
)
