module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"google",
		"plugin:node/recommended",
		"plugin:import/recommended",
		"plugin:promise/recommended",
		"plugin:unicorn/recommended",
		"deprecated",
	],
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	rules: {
		"indent": [
			"error",
			"tab",
		],
		"max-len": 0,
		"no-tabs": [
			"error",
			{ allowIndentationTabs: true },
		],
		"object-curly-spacing": [
			"error",
			"always",
		],
		"quotes": [
			"error",
			"double",
		],
		"semi": [
			"error",
			"never",
		],
		"spaced-comment": [
			"error",
			"always",
			{
				"markers": [
					"/",
				],
			},
		],
		"promise/catch-or-return": 0,
		"promise/no-callback-in-promise": 0,
		"unicorn/catch-error-name": 0,
		"unicorn/prevent-abbreviations": 0,
		"node/no-unsupported-features/es-syntax": 0,
	},
}
