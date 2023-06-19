<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs guitar amp';
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
    d="M20 6h-2V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM8 4h8v2H8V4zM6 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-4H4V8h16v4z"
  /><path d="M14 9h2v2h-2zm3 0h2v2h-2z" />
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
