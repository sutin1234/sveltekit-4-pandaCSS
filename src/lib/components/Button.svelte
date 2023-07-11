<script lang="ts">
  import { token } from 'styled-system/tokens'
  import { css } from 'styled-system/css';
  export let color;
  export let label: string;
  let myColor = css({color: token.var(`colors.${color}`)})
</script>

<button class={myColor}>
  {label} { myColor }
</button>
