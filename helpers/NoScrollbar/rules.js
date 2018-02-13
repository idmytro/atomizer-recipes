module.exports = [
  {
    type: "helper",
    name: "NoScrollbar",
    matcher: "NoScrollbar",
    noParams: true,
    styles: {},
    rules: {
      ".NoScrollbar::-webkit-scrollbar": {
        "display": "none"
      }
    }
  },
];
