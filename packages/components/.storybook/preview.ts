import type { Preview } from '@storybook/react'

import 'normalize.css'
import '../src/styles/layout/index.scss'
import '../src/styles/theme-sym/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
