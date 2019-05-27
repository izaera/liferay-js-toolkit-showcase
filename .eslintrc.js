module.exports = {
	env: {
		browser: true,
		jest: true,
	},
	extends: 'liferay',
	globals: {Liferay: 'readonly'},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react'],
	root: true,
	rules: {
		'no-console': 'off',
		'no-for-of-loops/no-for-of-loops': 'off',
		'no-return-assign': ['error', 'except-parens'],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
};
