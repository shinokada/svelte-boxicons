<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bx left top arrow circle';
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
    d="M11.993 2.007a9.928 9.928 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143a9.931 9.931 0 0 0 7.071 2.923 9.928 9.928 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143a9.927 9.927 0 0 0-7.071-2.922zm5.657 15.65a7.945 7.945 0 0 1-5.657 2.337c-2.141 0-4.15-.83-5.657-2.337-3.119-3.119-3.119-8.195 0-11.314a7.946 7.946 0 0 1 5.657-2.336c2.142 0 4.15.829 5.657 2.336 3.12 3.119 3.12 8.195 0 11.314z"
  /><path d="M14.657 9H8.993v5.663l2.125-2.124 3.215 3.214 1.414-1.414-3.215-3.214z" />
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
@prop export let ariaLabel = 'bx left top arrow circle';
-->
