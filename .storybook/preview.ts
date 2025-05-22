import type { Preview } from "@storybook/react";

import '../src/components/styles/Main.scss'
import '../src/components/styles/navbar.scss'
import '../src/components/styles/hero.scss'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;