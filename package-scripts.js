module.exports = {
  scripts: {
    "p:Bgp4v":        "atomizer -o patterns/Bgp4v/atomic.css     -c ./patterns/Bgp4v/config.js    -r ./patterns/Bgp4v/rules.js  ./patterns/Bgp4v/src.html",
    "p:Size":         "atomizer -o patterns/Size/atomic.css      -c ./patterns/Size/config.js     -r ./patterns/Size/rules.js   ./patterns/Size/src.html",
    "c:ContentEmpty": "atomizer -o cases/ContentEmpty/atomic.css -c ./cases/ContentEmpty/config.js                              ./cases/ContentEmpty/src.html"
  }
};
