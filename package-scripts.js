function cmd (path, hasConfig = true, hasRules = true) {
  return [
    `atomizer -o ${path}/atomic.css`,
    hasConfig ? `-c ${path}/config.js` : '',
    hasRules ? `-r ${path}/rules.js` : '',
    `${path}/src.html`
  ].join(' ');
}

module.exports = {
  scripts: {
    "patternBgp4v":     cmd("patterns/Bgp4v"),
    "patternSize":      cmd("patterns/Size"),
    "caseContentEmpty": cmd("cases/ContentEmpty", true, false)
  }
};
