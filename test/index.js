const glob = require("fast-glob")
const path = require("path")
const util = require("util")

glob("*.js", { cwd: path.resolve(__dirname, "../") })
    .then((dirs) => dirs.forEach((dir) => {
        console.log(`${dir}:`)
        console.log(util.inspect(require(path.resolve(__dirname, "../", dir)), { showHidden: false, depth: null, colors: true }))
        console.log("")
    }))
    .catch((err) => {
        throw err
    })
