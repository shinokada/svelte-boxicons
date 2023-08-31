<script>
  export let size = '24';
  export let viewBox = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs watch alt';
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
    d="M18 8c0-.909-.613-1.67-1.445-1.912l-1.31-3.443A1 1 0 0 0 14.311 2H8.689a1 1 0 0 0-.934.645l-1.31 3.443A1.996 1.996 0 0 0 5 8v8c0 .909.613 1.67 1.445 1.912l1.31 3.443a1 1 0 0 0 .934.645h5.621c.415 0 .787-.257.935-.645l1.31-3.443A1.996 1.996 0 0 0 18 16v-2h1v-4h-1V8zm-1.998 8H7V8h9l.002 8z"
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
@prop export let ariaLabel = 'bxs watch alt';
-->
