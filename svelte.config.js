import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// const dev = process.env.NODE_ENV === 'development';

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
		// paths: dev ? '' : 'https://sutin1234.github.com/sveltekit-4-pandaCSS'
	}
};

export default config;
