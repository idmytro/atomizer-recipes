module.exports = [
  {
    type: 'pattern',
    id: 'bgp4v',
    name: 'Background-position 4 values',
    matcher: 'Bgp4v',
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
  }
]
