<script>
  export let size = '24';
  export let viewBox = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxl flutter';
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
    d="M13.9 2.01 3.9 12l3.09 3.09 2.71-2.7L20.09 2l-6.19.01zm.82 14.6 5.39-5.38h-5.93c-.11 0-.26 0-.34.07l-2.23 2.23-3.09 3.07 3.09 3.1 2.15 2.15c.07.07.14.17.26.15h6.07z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-boxicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let viewBox = '0 0 24 24';
@prop export let role = 'img';
@prop export let strokeWidth = '1.5';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'bxl flutter';
-->
