<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx shield minus';
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
    d="m20.41 6.11-8-4a.94.94 0 0 0-.89 0l-8 4A1 1 0 0 0 3 6.9c0 .11-1 10.77 8.59 15a1 1 0 0 0 .41.1.93.93 0 0 0 .4-.09C21.92 17.67 21 7 21 6.9a1 1 0 0 0-.59-.79zM12 19.9C5.2 16.63 4.88 9.64 4.93 7.63l7-3.51 7 3.51c.13 2.01-.19 9-6.93 12.27z"
  /><path d="M8 11h8v2H8z" />
</svg>

<!--
@component
[Go to docs](https://svelte-boxicons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let viewBox = ctx.viewBox || '0 0 24 24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '1.5';
@prop export let ariaLabel = 'bx shield minus';
-->
