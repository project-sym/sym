import { createContext, useContext } from 'react'
import { SymAioAvatarContainer } from './SymAioAvatarContainer'
import { SymMsg } from './SymMsg'
import type { SymAioMsg } from './aioMsg'

export interface SymMsgGroupCtx {
  group?: boolean | undefined
}

export const SymMsgGroupContext = createContext<SymMsgGroupCtx>({
  group: true,
})

export const useSymMsgGroup = () => useContext(SymMsgGroupContext)

export interface SymMsgGroupProps {
  msgs: SymAioMsg[]
}

export const SymMsgGroup = ({ msgs }: SymMsgGroupProps) => (
  <div className="sym-aio-msg-group-container">
    <div className="sym-aio-msg-group-content">
      {msgs[0] && <SymMsg msg={msgs[0]} />}
      {msgs[1] &&
        msgs.slice(1).map((x) => (
          <SymMsg
            msg={{
              ...x,
              symHeader: undefined,
            }}
          />
        ))}
    </div>
    <div className="sym-aio-msg-group-overlay-container">
      <div className="sym-aio-msg-gutter-placeholder" />
      <SymAioAvatarContainer />
    </div>
  </div>
)
