import {
	presetAttributify,
	presetUno,
	presetIcons,
	defineConfig,
} from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			primary: {
				base: '#2B39DA',
				light: '#91CAFF',
			},
			standard: {
				100: '#FFFFFF',
				200: '#D3D9E0',
				300: '#94AAC7',
				400: '#232C3A',
				500: '#0D141E',
				600: '#000000',
			},
		},
	},
	presets: [presetAttributify({}), presetUno(), presetIcons()],
});
