module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": ["react"],
	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect",
		},
	},
	"rules": {
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"linebreak-style": ["off", "windows"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"no-unused-vars": [
			"warn",
			{ "vars": "all", "args": "all", "ignoreRestSiblings": false },
		],
	},
};
