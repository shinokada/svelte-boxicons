<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bxs traffic';
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
    d="m2.958 16 .043 1.042c.005.12.142 2.255 2.999 3.338v1.12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1.12c2.857-1.083 2.994-3.218 2.999-3.338L21.043 16H18v-1.62c2.857-1.083 2.994-3.218 2.999-3.338L21.043 10H18V8.38c2.857-1.083 2.994-3.218 2.999-3.338L21.043 4H18V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V4H2.958l.043 1.042c.005.12.142 2.255 2.999 3.338V10H2.958l.043 1.042c.005.12.142 2.255 2.999 3.338V16H2.958zM12 4a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 4zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 16z"
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
@prop export let ariaLabel = 'bxs traffic';
-->
