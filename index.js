const typescriptRules = require("./lib/typescript-rules")
const basePlugins = require("./lib/base-plugins")

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		worker: true
	},
	extends: [
		"xo",
		...basePlugins
	],
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	rules: {
		indent: [
			"error",
			"tab"
		],
		"max-len": 0,
		"no-tabs": [
			"error",
			{ allowIndentationTabs: true }
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		quotes: [
			"error",
			"double"
		],
		semi: [
			"error",
			"never"
		],
		"spaced-comment": [
			"error",
			"always",
			{
				markers: [
					"/"
				]
			}
		],
		"promise/catch-or-return": 0,
		"promise/no-callback-in-promise": 0,
		"node/no-unsupported-features/es-syntax": 0,
		"node/no-missing-import": ["error", {
			allowModules: ["electron", "type-fest"]
		}]
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			...typescriptRules
		}
	]
}
