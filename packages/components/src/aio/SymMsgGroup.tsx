import { createContext, useContext } from 'react'
import { useSymAioCtx } from './SymAio'
import { SymAioAvatarContainer } from './SymAioAvatarContainer'
import { SymMsg } from './SymMsg'

export interface SymMsgGroupCtx {
  group?: boolean | undefined
}

export const SymMsgGroupContext = createContext<SymMsgGroupCtx>({
  group: true,
})

export const useSymMsgGroup = () => useContext(SymMsgGroupContext)

export const SymMsgGroup = () => {
  const aioCtx = useSymAioCtx()

  return (
    <div className="sym-aio-msg-group-container">
      <div className="sym-aio-msg-group-content">
        {aioCtx.messages[0] && <SymMsg msg={aioCtx.messages[0]} />}
        {aioCtx.messages[1] &&
          aioCtx.messages.slice(1).map((x) => (
            <SymMsg
              msg={{
                ...x,
                symHeader: undefined,
              }}
            />
          ))}
      </div>
      <div className="sym-aio-msg-group-overlay-container">
        <div className="sym-aio-msg-gutter-container" />
        <SymAioAvatarContainer />
      </div>
    </div>
  )
}
