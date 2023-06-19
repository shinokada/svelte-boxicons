<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs coffee alt';
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
    d="M19 5h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a4 4 0 0 0 4 4h6c1.858 0 3.411-1.279 3.858-3H19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm1 6a1 1 0 0 1-1 1h-1V7h1a1 1 0 0 1 1 1v3zm-2 8H3c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3h-2z"
  />
</svg>

<!--
  @component
  [Go to Document](https://svelte-boxicons.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop viewBox: string = '0 0 24 24';
  @prop role = "img";
  @prop strokeWidth = "1.5"
  @prop color="currentColor";
  @prop ariaLabel = 'icon file name';
  ## Event
  - on:click
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:mouseout
-->
