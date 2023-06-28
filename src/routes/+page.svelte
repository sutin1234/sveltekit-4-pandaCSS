<<<<<<< HEAD
<script lang="ts">
	import type { PageData } from './$types';
	import { css } from 'styled-system/css';
	const text = (text: string) => `Svelte kit PandaCSS 🐼! ${text}`;
	export let data: PageData;

	let toggleStyle = false;
	$: myStyle = { fontSize: '2xl', fontWeight: 'bold', color: 'red.500' };
	$: myStyle2 = { fontSize: '2xl', fontWeight: 'bold', color: 'blue.500' };
	$: okStyle = toggleStyle ? css(myStyle) : css(myStyle2);
	const staticStyle = css({ fontSize: '2xl', fontWeight: 'bold', color: 'red.500' })
	const toggle = () => toggleStyle = !toggleStyle
=======


<script lang="ts">
	import { counter } from '$lib/stores/counter';
	import { css } from 'styled-system/css';
	const text = 'Hello Svelte kit PandaCSS 🐼!';

	const pandaCSS = {
		textClass: css({fontSize: '2xl',color: 'green.500'}),
		textClass2: css({fontSize: '2xl',color: 'red.500'}),
		ghostBtn: css({fontSize: '2xl',color: 'orange.500'})
	}

	function toggle() {
		counter.update((u) => !u);
	}
>>>>>>> refs/remotes/origin/main
</script>


<section>
<<<<<<< HEAD
	<pre class={css({ fontSize: '2xl'})}>
		props style: {data.textClass}
		reactive style: {okStyle}
		static style: {staticStyle}
	</pre>

	<div class={data.textClass}>{text('style props')}</div>
	<div class={okStyle}>{text('style reactive')}</div>
	<div class={staticStyle}>{text('static reactive')}</div>
	<button class={data.ghostBtn} on:click={toggle}>toggle</button>
=======
	<div class={pandaCSS.textClass}>{text}</div>
	<div class={$counter === true ? pandaCSS.textClass2 : pandaCSS.textClass}>{text}</div>
	<button class={pandaCSS.ghostBtn} on:click={toggle}>CVA button</button>
>>>>>>> refs/remotes/origin/main
</section>
