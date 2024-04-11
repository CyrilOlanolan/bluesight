import plugin from 'tailwindcss/plugin';

import { fill } from './colors';

export const BlueSightTheme = plugin(
  ({}) => {},

  // TailwindCSS configuration
  {
    theme: {
      colors: {
        fill,
      },
    },
  }
);
