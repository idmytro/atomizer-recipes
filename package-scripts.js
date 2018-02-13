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
    "caseDisplayGrid":   cmd("cases/DisplayGrid", true, false),
    "caseMawContainer":  cmd("cases/MawContainer", true, false),
    "helperBdrs":        cmd("helpers/Bdrs", false),
    "helperBdrsFull":    cmd("helpers/BdrsFull", false),
    "helperCnt":         cmd("helpers/Cnt", false),
    "helperFx":          cmd("helpers/Fx", false),
    "helperNoScrollbar": cmd("helpers/NoScrollbar", false),
    "patternBgp4v":      cmd("patterns/Bgp4v"),
    "patternSize":       cmd("patterns/Size", false),
    "patternWc":         cmd("patterns/Wc"),
  }
};
