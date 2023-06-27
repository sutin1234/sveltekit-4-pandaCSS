// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { css } from 'styled-system/css';

export const prerender = true;
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		textClass: css({
			fontSize: '2xl',
			fontWeight: 'bold',
			color: 'green.500'
		}),
		ghostBtn: css({
			fontSize: '2xl',
			padding: '0.25rem',
			margin: '0.25rem',
			background: 'blue.400'
		})
	};
}) satisfies PageLoad;
