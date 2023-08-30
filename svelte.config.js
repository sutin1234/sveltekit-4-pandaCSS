import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		alias: {
			'@css': 'node_modules/tiny-panda/css',
			'@patterns': 'node_modules/tiny-panda/patterns',
			'@tokens': 'node_modules/tiny-panda/tokens'
		}
	}
};

export default config;
