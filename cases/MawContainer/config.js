const BREAKPOINTS = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

module.exports = {
  custom: {
    'container': {
      'sm': BREAKPOINTS.sm,
      'md': BREAKPOINTS.md,
      'lg': BREAKPOINTS.lg,
      'xl': BREAKPOINTS.xl
    }
  },
  breakPoints: {
    'sm': `@media screen and (min-width:${BREAKPOINTS.sm})`,
    'md': `@media screen and (min-width:${BREAKPOINTS.md})`,
    'lg': `@media screen and (min-width:${BREAKPOINTS.lg})`,
    'xl': `@media screen and (min-width:${BREAKPOINTS.xl})`
  }
};
