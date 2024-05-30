/**
 * * * * GLOBAL COLORS * * *
 */
export const slate = {
  1: 'hsl(240, 2%, 99%)',
  2: 'hsl(240, 2%, 98%)',
  3: 'hsl(240, 11%, 95%)',
  4: 'hsl(240, 10%, 92%)',
  5: 'hsl(230, 11%, 89%)',
  6: 'hsl(240, 10%, 86%)',
  7: 'hsl(233, 10%, 82%)',
  8: 'hsl(231, 10%, 75%)',
  9: 'hsl(231, 6%, 57%)',
  10: 'hsl(226, 5%, 53%)',
  11: 'hsl(220, 6%, 40%)',
  12: 'hsl(210, 13%, 13%)',
} as const;

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

export const amber = {
  1: 'hsl(40, 60%, 99%)',
  2: 'hsl(51, 91%, 95%)',
  3: 'hsl(52, 100%, 88%)',
  4: 'hsl(50, 100%, 81%)',
  5: 'hsl(50, 94%, 73%)',
  6: 'hsl(46, 84%, 70%)',
  7: 'hsl(42, 75%, 65%)',
  8: 'hsl(38, 75%, 55%)',
  9: 'hsl(42, 100%, 62%)',
  10: 'hsl(42, 100%, 55%)',
  11: 'hsl(35, 100%, 34%)',
  12: 'hsl(24, 40%, 22%)',
} as const;

export const base = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
} as const;

export const tomato = {
  1: 'hsl(0, 100%, 99%)',
  2: 'hsl(8, 100%, 98%)',
  3: 'hsl(10, 92%, 95%)',
  4: 'hsl(12, 100%, 91%)',
  5: 'hsl(11, 100%, 88%)',
  6: 'hsl(11, 95%, 84%)',
  7: 'hsl(10, 82%, 78%)',
  8: 'hsl(10, 75%, 70%)',
  9: 'hsl(10, 78%, 54%)',
  10: 'hsl(10, 73%, 51%)',
  11: 'hsl(10, 82%, 45%)',
  12: 'hsl(8, 50%, 24%)',
} as const;

export const grass = {
  1: 'hsl(120, 60%, 99%)',
  2: 'hsl(120, 43%, 97%)',
  3: 'hsl(120, 42%, 94%)',
  4: 'hsl(123, 45%, 90%)',
  5: 'hsl(122, 40%, 85%)',
  6: 'hsl(124, 39%, 78%)',
  7: 'hsl(126, 37%, 69%)',
  8: 'hsl(131, 38%, 56%)',
  9: 'hsl(131, 41%, 46%)',
  10: 'hsl(131, 43%, 43%)',
  11: 'hsl(132, 50%, 33%)',
  12: 'hsl(131, 30%, 18%)',
} as const;

/**
 * * * * SEMANTIC COLORS * * *
 */
export const semantic = {
  brand: blue,
  accent: amber,
  negative: tomato,
  foreground: slate,
  gray: slate,
  positive: grass,
};

/**
 * * * * COMPONENT COLORS * * *
 */
export const fill = {
  surface: {
    neutral: {
      primary: semantic.brand[2],
      secondary: base.white,
      primaryInverted: semantic.brand[12],
    },
    negative: {
      default: semantic.negative[2],
    },
    positive: {
      default: semantic.positive[2],
    },
  },
  action: {
    neutral: {
      default: semantic.gray[1],
    },
    primary: {
      default: semantic.brand[9],
      hover: semantic.brand[10],
      active: semantic.brand[11],
    },
    positive: {
      default: semantic.positive[9],
      hover: semantic.positive[10],
      active: semantic.positive[11],
    },
    negative: {
      default: semantic.negative[9],
      hover: semantic.negative[10],
      active: semantic.negative[11],
    },
  },
};

export const content = {
  surface: {
    neutral: {
      primary: semantic.foreground[12],
      secondary: semantic.foreground[9],
      strong: semantic.brand[11],
      primaryInverted: base.white,
      secondaryInverted: semantic.foreground[5],
    },
    positive: {
      default: semantic.foreground[12],
    },
    negative: {
      default: semantic.foreground[12],
    },
  },
  action: {
    neutral: {
      placeholder: semantic.foreground[9],
      active: semantic.foreground[12],
      default: semantic.foreground[12],
    },
    positive: {
      default: base.white,
      hover: base.white,
      active: base.white,
    },
    primary: {
      default: semantic.foreground[1],
      hover: semantic.foreground[1],
      active: semantic.foreground[1],
    },
    negative: {
      default: semantic.foreground[1],
      hover: semantic.foreground[1],
      active: semantic.foreground[1],
    },
  },
  icon: {
    primary: semantic.brand[12],
    secondary: semantic.foreground[11],
  },
};

export const stroke = {
  surface: {
    neutral: {
      default: semantic.gray[5],
    },
    positive: {
      default: semantic.positive[7],
    },
    negative: {
      default: semantic.negative[7],
    },
  },
  action: {
    primary: {
      default: semantic.brand[11],
      hover: semantic.brand[11],
      active: semantic.brand[11],
    },
    negative: {
      default: semantic.negative[11],
      hover: semantic.negative[11],
      active: semantic.negative[11],
    },
  },
};
