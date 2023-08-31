<script>
  export let size = '24';
  export let viewBox = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs coffee bean';
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
    d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"
  /><path
    d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"
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
@prop export let ariaLabel = 'bxs coffee bean';
-->
