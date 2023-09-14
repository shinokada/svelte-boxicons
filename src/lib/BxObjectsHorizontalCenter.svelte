<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx objects horizontal center';
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
    d="M5 20h6v2h2v-2h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6v-2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4V2h-2v2H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4v2H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zM8 6h8v3H8zm-2 9h12v3H6z"
  />
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
@prop export let ariaLabel = 'bx objects horizontal center';
-->
