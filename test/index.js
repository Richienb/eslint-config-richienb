const glob = require("fast-glob")
const path = require("path")
const util = require("util")

glob("*.js", { cwd: path.resolve(__dirname, "../") })
    .then((directories) => directories.forEach((directory) => {
        console.log(`${directory}:`)
        console.log(util.inspect(require(path.resolve(__dirname, "../", directory)), { showHidden: false, depth: null, colors: true }))
        console.log("")
    }))
    .catch((error) => {
        throw error
    })
