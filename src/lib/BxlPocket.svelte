<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxl pocket';
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
    d="M19.327 3.983H4.746c-.947 0-1.736.726-1.736 1.673v5.396c0 4.892 4.04 8.964 9.026 8.964 4.955 0 8.964-4.072 8.964-8.964V5.656c0-.947-.758-1.673-1.673-1.673zm-2.178 6.691-4.293 4.04c-.221.253-.567.348-.82.348-.315 0-.631-.095-.884-.348l-4.229-4.04c-.441-.473-.504-1.262 0-1.768.475-.441 1.263-.504 1.736 0l3.377 3.251 3.44-3.251c.441-.504 1.23-.441 1.673 0 .442.506.442 1.295 0 1.768z"
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
