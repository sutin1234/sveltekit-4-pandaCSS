<script lang="ts">
	import type { PageData } from './$types';
	import { css } from 'styled-system/css';
	const text = (text: string) => `Svelte kit PandaCSS 🐼! ${text}`;
	export let data: PageData;

	let toggleStyle = false;
	$: myStyle = { fontSize: '2xl', fontWeight: 'bold', color: 'red.500' };
	$: myStyle2 = { fontSize: '2xl', fontWeight: 'bold', color: 'blue.500' };
	$: okStyle = toggleStyle ? css(myStyle) : css(myStyle2);
	const staticStyle = css({ fontSize: '2xl', fontWeight: 'bold', color: 'red.500' });
	const toggle = () => (toggleStyle = !toggleStyle);
</script>

<section>
	<div class={data.textClass}>{text('style props')}</div>
	<div class={okStyle}>{text('style reactive')}</div>
	<div class={staticStyle}>{text('static reactive')}</div>
	<button class={data.ghostBtn} on:click={toggle}>toggle</button>
</section>
