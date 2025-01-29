import { useSymAioCtx } from './SymAio'
import { SymMsgGroup } from './SymMsgGroup'

export const SymMsgVirtualList = () => {
  const aioCtx = useSymAioCtx()

  return (
    <div className="sym-aio-msg-list-container">
      {aioCtx.messages.map((x) => (
        <SymMsgGroup msgs={[x]} />
      ))}
    </div>
  )
}
