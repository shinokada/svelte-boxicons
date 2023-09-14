<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let viewBox = ctx.viewBox || '0 0 24 24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '1.5';
  export let ariaLabel = 'bxs yin yang';
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
    d="M19.062 4.938A9.942 9.942 0 0 0 12.016 2h-.026a9.94 9.94 0 0 0-7.071 2.938c-3.898 3.898-3.898 10.243 0 14.143 1.895 1.895 4.405 2.938 7.071 2.938s5.177-1.043 7.071-2.938c3.9-3.899 3.9-10.243.001-14.143zM13.5 15a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 13.5 15zM6.333 6.353A7.953 7.953 0 0 1 11.99 4l.026.001c1.652.008 3.242 1.066 3.55 2.371.366 1.552-1.098 3.278-4.018 4.737-5.113 2.555-5.312 5.333-4.975 6.762l.008.021c-.082-.075-.169-.146-.249-.226-3.118-3.119-3.118-8.194.001-11.313z"
  /><circle cx="10.5" cy="7.5" r="1.5" />
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
@prop export let ariaLabel = 'bxs yin yang';
-->
