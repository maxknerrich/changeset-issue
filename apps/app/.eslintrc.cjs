module.exports = {
	root: true,
	extends: ['custom'],
	plugins: ['svelte3'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
