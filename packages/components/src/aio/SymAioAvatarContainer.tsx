import { Avatar, AvatarFallback } from '../common/Avatar'
import type { SymAioMsg } from './aioMsg'
import { useSymAioMsg } from './aioMsg'
import { useSymAioHost } from './SymAio'

const defaultAvatarRenderer = (msg: SymAioMsg) => (
  <Avatar className="sym-aio-avatar">
    <AvatarFallback>{msg.user?.name?.slice(0, 2)}</AvatarFallback>
  </Avatar>
)

export const SymAioAvatarContainer = () => {
  const aioHost = useSymAioHost()
  const msg = useSymAioMsg()

  return (
    <div className="sym-aio-avatar-container">
      {aioHost.avatarRenderer
        ? aioHost.avatarRenderer(msg)
        : defaultAvatarRenderer(msg)}
    </div>
  )
}
