module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        node: true,
    },
    rules: {
        "no-debugger": process.env.NODE_ENV === 'production' ? "error" : "off"
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
}