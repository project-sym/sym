import type { Meta, StoryObj } from '@storybook/react'

import h from '@satorijs/element'
import { useEffect, useState } from 'react'
import { SymProvider } from '../host/SymProvider'
import { SymAioCtxContext, SymAioHostContext } from './SymAio'
import { frRenderers } from './SymFR'
import { SymMsgGroup, SymMsgGroupContext } from './SymMsgGroup'
import type { SymAioMsg } from './aioMsg'
import { imgSrc, longText } from './storiesData'

const meta = {
  component: SymMsgGroup,
} satisfies Meta<typeof SymMsgGroup>

// eslint-disable-next-line import/no-default-export
export default meta

type Story = StoryObj<typeof meta>

const StoryBasic = () => {
  const [messages, setMessages] = useState<SymAioMsg[]>([])

  useEffect(() => {
    setMessages([
      {
        elements: [h.text('Hello World 1')],
        symHeader: 'Il Harper',
      },
      {
        elements: [
          h('img', {
            src: imgSrc,
          }),
        ],
        symHeader: 'Il Harper',
      },
      {
        elements: [h.text(longText)],
        symHeader: 'Il Harper',
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <SymMsgGroupContext
            value={{
              group: true,
            }}
          >
            <SymMsgGroup />
          </SymMsgGroupContext>
        </SymAioCtxContext.Provider>
      </SymAioHostContext>
    </SymProvider>
  )
}

export const Basic: Story = {
  render: () => <StoryBasic />,
}
