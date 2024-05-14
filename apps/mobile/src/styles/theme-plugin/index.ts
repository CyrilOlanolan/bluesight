import plugin from 'tailwindcss/plugin';

import { fill, content, stroke } from './colors';

export const BlueSightTheme = plugin(
  ({}) => {},

  // TailwindCSS configuration
  {
    theme: {
      colors: {
        fill,
        content,
        stroke,
      },
    },
  }
);
