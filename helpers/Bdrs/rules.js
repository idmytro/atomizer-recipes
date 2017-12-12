const BDRS_DEFAULT = '.25rem';
const BDRS_FULL = '9999px';

module.exports = [
  {
    type: 'helper',
    id: 'BdrsDefault',
    name: 'Bdrs',
    matcher: 'Bdrs',
    noParams: true,
    styles: {
      "border-radius": BDRS_DEFAULT
    }
  },
  {
    type: 'helper',
    id: 'BdrsFull',
    name: 'BdrsFull',
    matcher: 'BdrsFull',
    noParams: true,
    styles: {
      "border-radius": BDRS_FULL
    }
  }
];
