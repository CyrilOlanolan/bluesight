/**
 * * * * GLOBAL COLORS * * *
 */
export const blue = {
  1: 'hsl(210, 100%, 99%)',
  2: 'hsl(207, 100%, 98%)',
  3: 'hsl(205, 92%, 95%)',
  4: 'hsl(203, 100%, 92%)',
  5: 'hsl(206, 100%, 88%)',
  6: 'hsl(207, 93%, 83%)',
  7: 'hsl(207, 85%, 76%)',
  8: 'hsl(206, 82%, 65%)',
  9: 'hsl(206, 100%, 50%)',
  10: 'hsl(207, 96%, 48%)',
  11: 'hsl(208, 88%, 43%)',
  12: 'hsl(216, 71%, 23%)',
} as const;

/**
 * * * * SEMANTIC COLORS * * *
 */
export const semantic = {
  brand: blue,
};

/**
 * * * * COMPONENT COLORS * * *
 */
export const fill = {
  surface: {},
  action: {
    neutral: {},
    primary: {
      default: semantic.brand[9],
      hover: semantic.brand[10],
      active: semantic.brand[11],
    },
    positive: {},
    negative: {},
  },
};
