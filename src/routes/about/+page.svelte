<script lang="ts">
	import { css } from '@css';
	import { circle, divider, flex, hstack, square, stack, vstack } from '@patterns';
	import Button from "$lib/components/Button.svelte";

	interface PandaColor {
		bgColor: 'gray.800' | 'gray.500' | 'gray.200' | 'red.300';
		backgroundColor?: string;
		color?: string;
	}

	type Values<T> = {
		[K in keyof T]: T[K];
	}
	const assignStyle = (props: Values<PandaColor>) => css(props)
	assignStyle({
		bgColor: 'red.300',
	})

	const buttonStyle = css({ bgColor: 'red.400' , color: 'white', fontWeight: 'bold', borderRadius: 13, px: 10, py: 2})

	function onClick(){
		console.log('onClick')
	}


</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class={css({ p: 2, })}>
	<Button label="test button" className={buttonStyle} onClick={onClick}/>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS Stack Patterns</div>
	<div class={stack({ gap: '6', padding: 4 })}>
		<div class={css({ bgColor: 'red.100', p: 4 })}>First</div>
		<div class={css({ bgColor: 'pink.100', p: 4 })}>Second</div>
		<div class={css({ bgColor: 'orange.100', p: 4 })}>Third</div>
	</div>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS HStack Patterns</div>
	<div class={hstack({ gap: '6', padding: 4 })}>
		<div class={css({ bgColor: 'red.100', p: 4 })}>First</div>
		<div class={css({ bgColor: 'pink.100', p: 4 })}>Second</div>
		<div class={css({ bgColor: 'orange.100', p: 4 })}>Third</div>
	</div>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS VStack Patterns</div>
	<div class={vstack({ gap: '6', padding: 4 })}>
		<div class={css({ bgColor: 'red.100', p: 4 })}>First</div>
		<div class={css({ bgColor: 'pink.100', p: 4 })}>Second</div>
	</div>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS Flex Patterns</div>
	<div class={flex({  direction: 'row', align: 'center', padding: 2, gap: 4 })}>
		<div class={css({ bgColor: 'red.100', p: 4 })}>First</div>
		<div class={css({ bgColor: 'pink.100', p: 4 })}>Second</div>
		<div class={css({ bgColor: 'orange.100', p: 4 })}>Third</div>
	</div>


	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS Grid Patterns</div>
	<div class={flex({ columns: 3, gap: 6 })}>
		<div class={css({ bgColor: 'red.100', p: 4 })}>First</div>
		<div class={css({ bgColor: 'pink.100', p: 4 })}>Second</div>
		<div class={css({ bgColor: 'orange.100', p: 4 })}>Third</div>
	</div>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS Grid Patterns</div>
	<div class={stack()}>
		<button>First</button>
		<div class={divider({ orientation: 'horizontal' })}></div>
		<button>Second</button>
	</div>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS Cicle Patterns</div>
	<div class={circle({ size: '12', bg: 'red.600' })}></div>

	<div class={css({ color: 'red.600', fontSize: '2xl' })}>PandaCSS Sqaure Patterns</div>
	<div class={square({ size: '12', bg: 'red.400' })}></div>

</div>
