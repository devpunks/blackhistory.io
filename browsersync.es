/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */

  const
    port  = process.env.PORT
  , proxy = `http://localhost:${port}`

  console.log ('PROXY', proxy)

module.exports = {
  "ui": false
, "proxy": proxy
, "logPrefix": "BlackHistory.io"
, "startPath": "index.html"
, "port": process.env.BROWSER_SYNC_PORT
, "files": [] // since we explicitly fire reload from watch
}
