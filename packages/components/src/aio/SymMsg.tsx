import type { SymAioMsg } from './aioMsg'
import { SymMsgContext } from './aioMsg'
import { SymFR } from './SymFR'
import { SymMsgContainer } from './SymMsgContainer'

export interface SymMsgProps {
  msg: SymAioMsg
}

export const SymMsg = ({ msg }: SymMsgProps) => {
  return (
    <SymMsgContext.Provider value={msg}>
      <SymMsgContainer>
        <SymFR />
      </SymMsgContainer>
    </SymMsgContext.Provider>
  )
}
