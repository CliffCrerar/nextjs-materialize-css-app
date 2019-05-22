module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [ "eslint:recommended", "plugin:react/recommended", "xo", "xo-nextjs/space" ],
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
	},
	"settings": {
		"import/resolver": {
			"node": {
				"paths": ".",
				"extensions": [ ".js", ".jsx" ]
			}
		}
	}
}