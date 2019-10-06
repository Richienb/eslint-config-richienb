module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "google",
    ],
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
    },
}
