import { useSymAioCtx } from './SymAio'
import { SymMsgGroup } from './SymMsgGroup'

export interface SymMsgVirtualListProps {
  className?: string | undefined
}

export const SymMsgVirtualList = ({ className }: SymMsgVirtualListProps) => {
  const aioCtx = useSymAioCtx()

  return (
    <div className={`sym-aio-msg-list-container ${className}`}>
      {aioCtx.messages.map((x) => (
        <SymMsgGroup msgs={[x]} />
      ))}
    </div>
  )
}
