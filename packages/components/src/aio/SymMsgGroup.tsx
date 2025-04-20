import { createContext, useContext } from 'react'
import { SymAioAvatarContainer } from './SymAioAvatarContainer'
import { SymMsg } from './SymMsg'
import type { SymAioMsg } from './aioMsg'
import { SymMsgContext } from './aioMsg'

export interface SymMsgGroupCtx {
  group?: boolean | undefined
}

export const SymMsgGroupContext = createContext<SymMsgGroupCtx>({
  group: true,
})

export const useSymMsgGroup = () => useContext(SymMsgGroupContext)

export interface SymMsgGroupStateCtx {
  first: boolean
  last: boolean
}

const SymMsgGroupStateContext = createContext<SymMsgGroupStateCtx>({
  first: false,
  last: false,
})

export const useSymMsgGroupState = () => useContext(SymMsgGroupStateContext)

export interface SymMsgGroupProps {
  msgs: SymAioMsg[]
}

export const SymMsgGroup = ({ msgs }: SymMsgGroupProps) => {
  const msgsLen = msgs.length

  return (
    <div className="sym-aio-msg-group-container">
      <div className="sym-aio-msg-group-content">
        {msgs
          .map((msg, i) => {
            const result = {
              msg: {
                ...msg,
              },
              state: {
                first: i === 0,
                last: i === msgsLen - 1,
              },
            }

            if (!result.state.first) result.msg.symHeader = undefined

            return result
          })
          .map((x) => (
            <SymMsgGroupStateContext value={x.state}>
              <SymMsg msg={x.msg} />
            </SymMsgGroupStateContext>
          ))}
      </div>
      <div className="sym-aio-msg-group-overlay-container">
        <div className="sym-aio-msg-gutter-placeholder" />
        <SymMsgContext value={msgs[0]!}>
          <SymAioAvatarContainer />
        </SymMsgContext>
      </div>
    </div>
  )
}
