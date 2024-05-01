module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"eslint-config-prettier",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	overrides: [
		{
			files: ["**/components/ui/*.tsx"],
			rules: {
				"react/prop-types": "off",
				"react-refresh/only-export-components": "off",
			},
		},
	],
};
