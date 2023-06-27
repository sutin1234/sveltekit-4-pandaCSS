

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
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class={pandaCSS.textClass}>{text}</div>
	<div class={$counter === true ? pandaCSS.textClass2 : pandaCSS.textClass}>{text}</div>
	<button class={pandaCSS.ghostBtn} on:click={toggle}>CVA button</button>
</section>
