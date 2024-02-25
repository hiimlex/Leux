module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	extends: [
		"eslint:recommended",
		"plugin:node/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
	rules: {
		"no-console": "error",
		"unicorn/no-array-reduce": "off",
		"prettier/prettier": "error",
		"@typescript-eslint/no-var-requires": "off",
		"node/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
	},
	env: {
		node: true,
		es6: true,
	},
	settings: {
		node: {
			tryExtensions: [".scss", ".json", ".ts", ".tsx"],
		},
	},
};
