module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,

        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-trailing-spaces': 'error',
        'eqeqeq': 'error',
        'arrow-spacing': [
            'error', {'before': true, 'after': true}
        ],
        'no-console': 0
    }
}