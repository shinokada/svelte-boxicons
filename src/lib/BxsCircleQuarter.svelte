<script>
  export let size = '24';
  export let viewBox = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs circle quarter';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  {viewBox}
  fill={color}
  stroke-width={strokeWidth}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  <path d="M12 2h-1v11h11v-1A10 10 0 0 0 12 2z" />
</svg>

<!--
@component
[Go to docs](https://svelte-boxicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let viewBox = '0 0 24 24';
@prop export let role = 'img';
@prop export let strokeWidth = '1.5';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'bxs circle quarter';
-->
