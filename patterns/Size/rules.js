module.exports = [
  {
    type: 'pattern',
    id: 'size',
    name: 'Size',
    matcher: 'Size',
    allowParamToValue: true,
    styles: {
      'width': '$0',
      'height': '$1',
    },
    arguments: [{
      /* if you want use 'a' for 2nd argument, add 'a' variable to config.js */
      'a': 'auto'
    }]
  },
]
