module.exports = [
  {
    type: 'pattern',
    id: 'space-x',
    name: 'SpaceX',
    matcher: 'SpaceX',
    allowParamToValue: true,
    styles: {
      "--space-x": "$0"
    },
    rules: {
      "[class*=SpaceX] > * + *": {
        "margin-__START__": "var(--space-x)"
      }
    }
  },
  {
    type: 'pattern',
    id: 'space-y',
    name: 'SpaceY',
    matcher: 'SpaceY',
    allowParamToValue: true,
    styles: {
      "--space-y": "$0"
    },
    rules: {
      "[class*=SpaceY] > * + *": {
        "margin-top": "var(--space-y)"
      }
    }
  }
]
