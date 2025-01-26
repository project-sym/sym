import type { Meta, StoryObj } from '@storybook/react'

import h from '@satorijs/element'
import { useState } from 'react'
import { SymProvider } from '../host/SymProvider'
import { SymAioCtxContext, SymAioHostContext } from './SymAio'
import { frRenderers } from './SymFR'
import { SymMsg } from './SymMsg'
import { SymMsgGroupContext } from './SymMsgGroup'
import type { SymAioMsg } from './aioMsg'

const meta = {
  component: SymMsg,
} satisfies Meta<typeof SymMsg>

// eslint-disable-next-line import/no-default-export
export default meta

type Story = StoryObj<typeof meta>

const StoryBasic = () => {
  const [messages] = useState<SymAioMsg[]>([])

  return (
    <SymProvider>
      <SymAioHostContext
        value={{
          frCanRemoveBubble: () => false,
          frRenderers: {
            ...frRenderers,
          },
        }}
      >
        <SymAioCtxContext.Provider
          value={{
            messages,
          }}
        >
          <SymMsgGroupContext value={{}}>
            <SymMsg
              msg={{
                elements: [h.text('Hello World')],
                symHeader: 'Il Harper',
              }}
            />
          </SymMsgGroupContext>
        </SymAioCtxContext.Provider>
      </SymAioHostContext>
    </SymProvider>
  )
}

export const Basic: Story = {
  render: () => <StoryBasic />,
}
