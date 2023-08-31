<script>
  export let size = '24';
  export let viewBox = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs chip';
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
  <path
    d="M19 7a2 2 0 0 0-2-2h-1V2h-2v3h-4V2H8v3H7a2 2 0 0 0-2 2v1H2v2h3v4H2v2h3v1a2 2 0 0 0 2 2h1v3h2v-3h4v3h2v-3h1a2 2 0 0 0 2-2v-1h3v-2h-3v-4h3V8h-3V7zm-4 8H9V9h6v6z"
  />
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
@prop export let ariaLabel = 'bxs chip';
-->
