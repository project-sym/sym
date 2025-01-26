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
        <SymMsgGroupContext
          value={{
            group: true,
          }}
        >
          <SymMsgGroup
            msgs={[
              {
                elements: [h.text('Hello World 1')],
                symHeader: 'Il Harper',
                symFooter: '2 Replies | 2 Forwards | 2 Views | 12:00 AM',
              },
              {
                elements: [
                  h('img', {
                    src: imgSrc,
                  }),
                ],
                symHeader: 'Il Harper',
                symFooter: '2 Replies | 2 Forwards | 2 Views | 12:00 AM',
              },
              {
                elements: [h.text(longText)],
                symHeader: 'Il Harper',
                symFooter: '2 Replies | 2 Forwards | 2 Views | 12:00 AM',
              },
            ]}
          />
        </SymMsgGroupContext>
      </SymAioHostContext>
    </SymProvider>
  )
}

export const Basic: Story = {
  render: () => <StoryBasic />,
}

const StoryFloat = () => {
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
        <SymMsgGroupContext
          value={{
            group: true,
          }}
        >
          <SymMsgGroup
            msgs={[
              {
                elements: [h.text('Hello Worldddddd')],
                symHeader: 'Il Harper',
                symFooter: '2 Replies | 2 Forwards | 2 Views | 12:00 AM',
              },
              {
                elements: [
                  h.text('Hello Worlddddddddddddddddddddddddddddddddd'),
                ],
                symHeader: 'Il Harper',
                symFooter: '2 Replies | 2 Forwards | 2 Views | 12:00 AM',
              },
              {
                elements: [
                  h.text(
                    'Hello Worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                  ),
                ],
                symHeader: 'Il Harper',
                symFooter: '2 Replies | 2 Forwards | 2 Views | 12:00 AM',
              },
            ]}
          />
        </SymMsgGroupContext>
      </SymAioHostContext>
    </SymProvider>
  )
}

export const Float: Story = {
  render: () => <StoryFloat />,
}
