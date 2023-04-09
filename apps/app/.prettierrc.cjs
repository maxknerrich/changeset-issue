module.exports = {
	...require('eslint-config-custom/.prettierrc.cjs'),
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
