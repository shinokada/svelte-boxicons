<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bxs ball';
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
    d="M20.247 3.034c-.069-.018-1.742-.433-4.052-.433-2.842 0-6.868.64-9.91 3.687-5.34 5.349-3.34 13.61-3.252 13.96a1 1 0 0 0 .728.726c.069.018 1.726.426 4.018.426 2.849 0 6.884-.641 9.932-3.688 5.335-5.335 3.351-13.6 3.264-13.949a1.005 1.005 0 0 0-.728-.729zm-3.537 9.262-1.414 1.414-1.793-1.792-1.586 1.586 1.792 1.793-1.414 1.414-1.792-1.793-1.793 1.793-1.414-1.414 1.793-1.793-1.793-1.794 1.414-1.414 1.793 1.794 1.586-1.586-1.794-1.793 1.414-1.414 1.794 1.793 1.793-1.793 1.414 1.414-1.793 1.793 1.793 1.792z"
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
