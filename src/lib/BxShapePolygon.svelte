<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx shape polygon';
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
    d="M20 14.185v-2.369A2.997 2.997 0 0 0 22 9c0-1.654-1.346-3-3-3a2.99 2.99 0 0 0-2.116.876L12.969 5.31c.01-.103.031-.204.031-.31 0-1.654-1.346-3-3-3S7 3.346 7 5c0 .762.295 1.451.765 1.981L6.091 9.212A2.977 2.977 0 0 0 5 9c-1.654 0-3 1.346-3 3s1.346 3 3 3c.159 0 .313-.023.465-.047L7.4 17.532c-.248.436-.4.932-.4 1.468 0 1.654 1.346 3 3 3a2.994 2.994 0 0 0 2.863-2.153l3.962-.792A2.987 2.987 0 0 0 19 20c1.654 0 3-1.346 3-3a2.995 2.995 0 0 0-2-2.815zM19 8a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-9-4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-6 8a1.001 1.001 0 1 1 1 1c-.552 0-1-.449-1-1zm6 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.761-2.172A3.005 3.005 0 0 0 10 16c-.386 0-.752.079-1.091.213l-1.674-2.231C7.705 13.451 8 12.762 8 12c0-.536-.152-1.032-.399-1.467l1.935-2.58c.152.024.305.047.464.047a2.99 2.99 0 0 0 2.116-.876l3.915 1.566c-.01.103-.031.204-.031.31 0 1.302.839 2.401 2 2.815v2.369a2.996 2.996 0 0 0-2 2.815c0 .061.015.117.018.177l-3.257.652zM19 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
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
@prop export let ariaLabel = 'bx shape polygon';
-->
