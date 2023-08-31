<script>
  export let size = '24';
  export let viewBox = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bx loader circle';
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
  <circle cx="12" cy="20" r="2" /><circle cx="12" cy="4" r="2" /><circle
    cx="6.343"
    cy="17.657"
    r="2"
  /><circle cx="17.657" cy="6.343" r="2" /><circle cx="4" cy="12" r="2.001" /><circle
    cx="20"
    cy="12"
    r="2"
  /><circle cx="6.343" cy="6.344" r="2" /><circle cx="17.657" cy="17.658" r="2" />
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
@prop export let ariaLabel = 'bx loader circle';
-->
