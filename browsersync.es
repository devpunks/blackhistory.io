/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */

  const
    port  = 3000
  , proxy = `http://localhost:${port}`

  console.log ('PROXY', proxy)

module.exports = {
  "ui": false
, "port": 8989
, "proxy": proxy
, "startPath": "index.html"
, "logPrefix": "BlackHistory.io"
, "files": ['public'] // since we explicitly fire reload from watch
}
