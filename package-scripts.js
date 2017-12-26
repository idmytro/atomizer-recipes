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
    "caseContainer":    cmd("cases/Container", true, false),
    "helperCnt":        cmd("helpers/Cnt", false),
    "helperBdrs":       cmd("helpers/Bdrs", false),
    "patternBgp4v":     cmd("patterns/Bgp4v"),
    "patternSize":      cmd("patterns/Size", false),
  }
};
