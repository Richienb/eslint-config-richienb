const globby = require("globby")
const path = require("path")
const { inspect } = require("util")

const inspectColours = object => inspect(object, {
	showHidden: false,
	depth: null, // eslint-disable-line unicorn/no-null
	colors: true
})

module.exports = (async () => {
	const directories = await globby("*.js", { cwd: path.resolve(__dirname, "../") })
	directories.forEach(directory => {
		console.log(`${directory}:
${inspectColours(require(path.resolve(__dirname, "../", directory)))}
`)
	})
})()
