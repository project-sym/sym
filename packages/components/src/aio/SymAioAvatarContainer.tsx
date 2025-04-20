import { Avatar, AvatarFallback } from '../common/Avatar'
import { useSymAioMsg } from './aioMsg'

export const SymAioAvatarContainer = () => {
  const msg = useSymAioMsg()

  return (
    <div className="sym-aio-avatar-container">
      <Avatar className="sym-aio-avatar">
        <AvatarFallback>{msg.user?.name?.slice(0, 2)}</AvatarFallback>
      </Avatar>
    </div>
  )
}
