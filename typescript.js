const defaultConfig = require(".")
const typescriptRules = require("./lib/typescript-rules")

module.exports = {
	...defaultConfig,
	...typescriptRules
}
