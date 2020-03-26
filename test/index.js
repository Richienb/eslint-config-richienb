const globby = require("globby")
const path = require("path")
const util = require("util")

module.exports = (async () => {
	const directories = await globby("*.js", { cwd: path.resolve(__dirname, "../") })
	directories.forEach(directory => {
		console.log(`${directory}:
${util.inspect(require(path.resolve(__dirname, "../", directory)), { showHidden: false, depth: null, colors: true })}
`)
	})
})()
