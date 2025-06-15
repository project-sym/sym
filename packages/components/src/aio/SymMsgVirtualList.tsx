import type { SymAioMsg } from './aioMsg'
import { useSymAioCtx } from './SymAio'
import { SymMsgGroup } from './SymMsgGroup'

export interface SymMsgVirtualListProps {
  className?: string | undefined
}

export const SymMsgVirtualList = ({ className }: SymMsgVirtualListProps) => {
  const aioCtx = useSymAioCtx()

  return (
    <div className={`sym-aio-msg-list-container ${className}`}>
      {aioCtx.messages
        .reduce<SymAioMsg[][]>((r, c) => {
          if (!r.length) return [[c]]

          const prevArr = r[r.length - 1]!
          const prevMsg = prevArr[prevArr.length - 1]!
          const prevId = prevMsg.user?.id

          const curId = c.user?.id

          if (!prevId || !curId || prevId !== curId) {
            r.push([c])
          } else {
            prevArr.push(c)
          }

          return r
        }, [])
        .map((x) => (
          <SymMsgGroup msgs={x} />
        ))}
    </div>
  )
}
