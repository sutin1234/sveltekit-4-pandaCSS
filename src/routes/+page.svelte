
<script lang="ts">
	import type { PageData } from './$types';
	import { css } from "styled-system/css";
	import { writable } from "svelte/store";
	let style = writable({background: 'green.500', fontSize: '2xl', fontWeight: 'bold' });
	const text = 'Hello Svelte kit PandaCSS 🐼!'
	export let data: PageData
function toggle(){
	style.set({ fontSize: '2xl', fontWeight: 'bold', background: 'blue.400'})
}

style.subscribe(style => {
	console.log('style changed ', style)
})

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class={data.textClass}>{text}</div>
	<div class={css($style)}>{text}</div>
	<button class={data.ghostBtn} on:click={toggle}>toggle</button>
	<pre>{JSON.stringify($style)}</pre>
</section>

