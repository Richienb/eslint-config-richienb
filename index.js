/* eslint-disable unicorn/prevent-abbreviations */
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
            4,
        ],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "never",
        ],
        "max-len": 0,
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/",
                ],
            },
        ],
        "valid-jsdoc": 0,
        "object-curly-spacing": [
            "error",
            "always",
        ],
        "promise/catch-or-return": 0,
        "promise/no-callback-in-promise": 0,
        "unicorn/catch-error-name": 0,
        "unicorn/prevent-abbreviations": 0,
        "node/no-unsupported-features/es-syntax": 0,
    },
}
