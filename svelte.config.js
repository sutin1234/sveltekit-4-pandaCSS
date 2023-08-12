import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@css': 'node_modules/styled-system/css',
			'@patterns': 'node_modules/styled-system/patterns'
		}
	}
};

export default config;
