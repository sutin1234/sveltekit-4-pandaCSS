// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import externalize from 'vite-plugin-externalize-dependencies';

export default defineConfig({
	plugins: [sveltekit(), externalize({ externals: ['externalized-dependency'] })],
	server: {
		fs: {
			allow: ['styled-system']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		sourcemap: true,
		rollupOptions: {
			external: 'moment'
		}
	},
	resolve: {
		alias: {
			moment: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js'
		}
	}
});
