module.exports = [
  {
    type: 'pattern',
    id: 'bgp4v1',
    name: 'Background-position 4 values',
    matcher: 'Bgp4v1',
    allowParamToValue: true,
    styles: {
      'background-position': '$0 $1 $2 $3'
    },
    arguments: [{
      /*
      'c', 't', 'b' are in the config.js,
      because they do not work well from here :(
      */
      'start': '__START__',
      'end': '__END__'
    }]
  },
  {
    type: 'pattern',
    id: 'bgp4',
    name: 'Bgp 4 values',
    matcher: 'Bgp4v',
    allowParamToValue: true,
    styles: {
      'background-position': '$0 $1 $2 $3'
    },
    arguments: [{
      /* 'c', 't', 'b' должны быть в конфиге :( */
      'start': '__START__',
      'end': '__END__'
    }]
  }
]
