<script lang="ts">
	import { page, } from '$app/stores';
	import { base } from '$app/paths';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { flex } from '@patterns';
	import { css } from '@css';

	const pageList = [
		{ path: base+'/', name: 'Home' },
		{ path: base+'/about', name: 'About' }
	];

	console.log('pages ', pageList);
</script>

<header class={flex({ direction: 'row', justifyContent: 'space-between' })}>
	<div class={css({ w: '3em', h: '3em' })}>
		<a
			href="https://kit.svelte.dev"
			class={flex({ alignItems: 'center', justifyContent: 'center', w: '100%', h: '100%' })}
		>
			<img src={logo} alt="SvelteKit" class={css({ w: '2em', h: '2em', objectFit: 'contain' })} />
		</a>
	</div>

	<nav class={flex({ justifyContent: 'center', bg: 'white' })}>
		<ul>
			{#each pageList as p}
				<li
					class={css({
						display: 'inline-block',
						m: '0.75em',
						fontWeight: $page.url.pathname === p.path ? 'bold' : ''
					})}
				>
					<a href={p.path}>{p.name}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class={css({ w: '3em', h: '3em' })}>
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>
