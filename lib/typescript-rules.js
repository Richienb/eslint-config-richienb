const basePlugins = require("./base-plugins")

module.exports = {
	extends: [
		"xo",
		"xo-typescript",
		...basePlugins
	],
	rules: {
		"@typescript-eslint/ban-ts-ignore": 0,
		"@typescript-eslint/semi": [
			"error",
			"never"
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				singleline: {
					delimiter: "comma"
				},
				multiline: {
					delimiter: "none"
				}
			}
		],
		"@typescript-eslint/quotes": [
			"error",
			"double"
		],
		"@typescript-eslint/prefer-readonly-parameter-types": 0,
		"@typescript-eslint/no-namespace": 0,
		"@typescript-eslint/promise-function-async": 0,
		"object-curly-spacing": [
			"error",
			"always"
		]
	}
}
