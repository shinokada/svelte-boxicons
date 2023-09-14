<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bxs injection';
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
    d="M12 5.61 9.24 8.35l3.31 3.31-1.06 1.06-3.31-3.31-1.77 1.77 3.31 3.31-1.06 1.06-3.31-3.31-2 2A2 2 0 0 0 3 16.66l1 1.89-2.25 2.29 1.41 1.41L5.45 20l1.89 1a2 2 0 0 0 1 .26 2 2 0 0 0 1.42-.59L18.39 12zm7.8 3.59-1.79-1.8 1.42-1.41 1.41 1.41 1.41-1.41-4.24-4.24-1.41 1.41 1.41 1.42-1.41 1.41-1.8-1.79-1.74-1.75-1.41 1.42 1.03 1.03v.01l6.41 6.41h.01l1.03 1.03 1.42-1.41-1.74-1.74h-.01z"
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
@prop export let ariaLabel = 'bxs injection';
-->
