module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        sourceType: 'module',
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-undef": "off",
        "react/prop-types": "off"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ".",
                "extensions": [".js", ".jsx"]
            }
        },
        "import/core-modules": ["styled-jsx/css"]
    }
}