module.exports = {
  scripts: {
    "p:Size": "atomizer -o patterns/Size/atomic.css -c ./patterns/Size/config.js -r ./patterns/Size/rules.js ./patterns/Size/src.html",
    "c:ContentEmpty": "atomizer -o cases/ContentEmpty/atomic.css -c ./cases/ContentEmpty/config.js ./cases/ContentEmpty/src.html"
  }
};