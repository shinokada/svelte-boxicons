<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx hard hat';
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
    d="M21 15a9.11 9.11 0 0 0-.18-1.81 8.53 8.53 0 0 0-.53-1.69 8.08 8.08 0 0 0-.83-1.5 8.73 8.73 0 0 0-1.1-1.33A8.27 8.27 0 0 0 17 7.54a8.08 8.08 0 0 0-1.53-.83L15 6.52V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.52l-.5.19a8.08 8.08 0 0 0-1.5.83 8.27 8.27 0 0 0-1.33 1.1A8.27 8.27 0 0 0 4.54 10a8.08 8.08 0 0 0-.83 1.53 9 9 0 0 0-.53 1.69A9.11 9.11 0 0 0 3 15v3H2v2h20v-2h-1zM5 15a7.33 7.33 0 0 1 .14-1.41 6.64 6.64 0 0 1 .41-1.31 7.15 7.15 0 0 1 .64-1.19 7.15 7.15 0 0 1 1.9-1.9A7.33 7.33 0 0 1 9 8.68V15h2V6h2v9h2V8.68a8.13 8.13 0 0 1 .91.51 7.09 7.09 0 0 1 1 .86 6.44 6.44 0 0 1 .85 1 6 6 0 0 1 .65 1.19 7.13 7.13 0 0 1 .41 1.31A7.33 7.33 0 0 1 19 15v3H5z"
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
@prop export let ariaLabel = 'bx hard hat';
-->
