<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx wink tongue';
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
  <path d="M15.5 9c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2z" /><path
    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-2 16v-3h4v3c0 1.103-.897 2-2 2s-2-.897-2-2zm5.856 1.005c.085-.323.144-.656.144-1.005v-1.499C17.589 15.028 18 13 18 13H6s.412 2.028 2 3.501V18c0 .349.059.682.144 1.005A8.005 8.005 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8a8.005 8.005 0 0 1-4.144 7.005z"
  /><circle cx="8.5" cy="9.5" r="1.5" />
</svg>

<!--
@component
[Go to docs](https://svelte-boxicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let viewBox = ctx.viewBox || '0 0 24 24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '1.5';
@prop export let ariaLabel = 'bx wink tongue';
-->
