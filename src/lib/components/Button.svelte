<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  export let label: string;
  export let className: string
  export let onClick: MouseEventHandler<HTMLButtonElement>

</script>

<button on:click={onClick} class={className}>{label}</button>
