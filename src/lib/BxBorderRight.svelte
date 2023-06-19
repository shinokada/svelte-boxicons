<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bx border right';
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
    d="M15 19h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H7zm-4 0h2v2H3zM3 7h2v2H3zm0 8h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm12 0h2v2h-2zm-4 0h2v2h-2zM7 3h2v2H7zm4 4h2v2h-2zm0 8h2v2h-2zm-4-4h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zm8-6v16h2V3h-2z"
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
