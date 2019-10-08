module.exports = require("./utils/extend")({
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "comma",
                    requireLast: false,
                },
                singleline: {
                    delimiter: "comma",
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/no-inferrable-types": 0,
    },
})
