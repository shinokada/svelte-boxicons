<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx band aid';
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
    d="M8.111 21.889a5.962 5.962 0 0 0 4.242-1.757l7.778-7.778a6.007 6.007 0 0 0 0-8.485 5.965 5.965 0 0 0-4.243-1.757 5.962 5.962 0 0 0-4.242 1.757l-7.778 7.778a6.007 6.007 0 0 0 0 8.485 5.965 5.965 0 0 0 4.243 1.757zm-2.829-8.828 7.778-7.778a3.976 3.976 0 0 1 2.828-1.171c1.069 0 2.073.416 2.829 1.171a4.006 4.006 0 0 1 0 5.657l-7.778 7.778a3.976 3.976 0 0 1-2.828 1.171 3.977 3.977 0 0 1-2.829-1.171 4.008 4.008 0 0 1 0-5.657z"
  /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><circle
    cx="12"
    cy="15"
    r="1"
  /><circle cx="12" cy="9" r="1" />
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
@prop export let ariaLabel = 'bx band aid';
-->
