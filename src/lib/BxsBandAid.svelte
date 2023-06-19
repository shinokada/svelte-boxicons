<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs band aid';
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
    d="m11.646 3.868-7.778 7.778a6.007 6.007 0 0 0 0 8.485 5.984 5.984 0 0 0 4.242 1.754 5.984 5.984 0 0 0 4.243-1.754l7.778-7.778a6.007 6.007 0 0 0 0-8.485 6.008 6.008 0 0 0-8.485 0zM9 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
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
