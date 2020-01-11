const globby = require("globby")
const path = require("path")
const util = require("util")

module.exports = (async () => {
	const dirs = await globby("*.js", { cwd: path.resolve(__dirname, "../") })
	dirs.forEach((dir) => {
		console.log(`${dir}:`)
		console.log(util.inspect(require(path.resolve(__dirname, "../", dir)), { showHidden: false, depth: null, colors: true }))
		console.log("")
	})
})()
