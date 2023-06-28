// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { css } from 'styled-system/css';

export const prerender = true;
import type { PageLoad } from './$types';

export const load = (() => {
	return {
		textClass: css({
			fontSize: '2xl',
			fontWeight: 'bold',
			color: 'green.500'
		}),
		ghostBtn: css({
			fontSize: '2xl',
			background: 'blue.400',
			rounded: 'md',
			px: '2',
			color: 'white'
		})
		// style1: css({ fontSize: '2xl', fontWeight: 'bold', color: 'red.500' }),
		// style2: css({ fontSize: '2xl', fontWeight: 'bold', color: 'blue.500' })
	};
}) satisfies PageLoad;
