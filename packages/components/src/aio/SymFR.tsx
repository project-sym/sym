import type h from '@satorijs/element'
import type { ReactNode } from 'react'
import { createElement } from 'react'
import { useSymAioMsg } from './aioMsg'
import type { SymAioHost } from './SymAio'
import { useSymAioHost } from './SymAio'
import { SymMsgBubble } from './SymMsgBubble'

export interface FRContext {
  aioHost: SymAioHost
}

export type SymFRRenderer = (frCtx: FRContext, element: h) => ReactNode[]

export interface SymFrProps {}

export const SymFR = ({}: SymFrProps) => {
  const aioHost = useSymAioHost()
  const msg = useSymAioMsg()

  const frCtx: FRContext = {
    aioHost,
  }

  const result = render(frCtx, msg.elements)

  if (aioHost.frCanRemoveBubble(result))
    return <div className="sym-aio-msg-content">{result}</div>

  return (
    <SymMsgBubble>
      <div className="sym-aio-msg-content">
        {result}
        {msg.symFooter && (
          <>
            <span className="sym-aio-msg-footer-pseudo-container">
              {msg.symFooter}
            </span>
            <div className="sym-aio-msg-footer-container">{msg.symFooter}</div>
            <span className="sym-aio-msg-footer-clearfix" />
          </>
        )}
      </div>
    </SymMsgBubble>
  )
}

const EMPTY = ['[空消息]']
const UNSUPPORTED = ['[不支持的消息]']

const render = (frCtx: FRContext, elements: h[] | undefined): ReactNode[] => {
  if (!elements?.length) return EMPTY
  return renderIntl(frCtx, elements) || UNSUPPORTED
}

const renderIntl = (frCtx: FRContext, elements: h[]): ReactNode[] | null => {
  const result = elements.map((element) => visit(frCtx, element))
  if (result.every((x) => !x)) return null
  return result.flatMap((x) => x || UNSUPPORTED)
}

const directRenderer: SymFRRenderer = (_frCtx, element) => [
  createElement(element.type, element.attrs),
]

const fallbackRenderer: SymFRRenderer = (frCtx, element) =>
  render(frCtx, element.children)

export const frRenderers = {
  text: ((_frCtx: FRContext, element: h) => [
    element.toString(),
  ]) satisfies SymFRRenderer as SymFRRenderer,
  br: directRenderer,
  p: directRenderer,
  a: directRenderer,
  img: ((_frCtx, element) => [
    <img {...element.attrs} className="sym-fr-img" />,
  ]) satisfies SymFRRenderer as SymFRRenderer,
  audio: directRenderer,
} as const

const visit: SymFRRenderer = (frCtx, element) =>
  (frCtx.aioHost.frRenderers[element.type] || fallbackRenderer)(frCtx, element)
