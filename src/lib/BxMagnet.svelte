<script lang="ts">
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let ariaLabel = 'bx magnet';
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
    d="M19 3h-3c-1.103 0-2 .897-2 2v8c0 1.103-.897 2-2 2s-2-.897-2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v8c0 4.963 4.037 9 9 9s9-4.037 9-9V5c0-1.103-.897-2-2-2zm-3 2h3v3h-3V5zM5 5h3v3H5V5zm7 15c-3.859 0-7-3.141-7-7v-3h3v3c0 2.206 1.794 4 4 4s4-1.794 4-4v-3h3v3c0 3.859-3.141 7-7 7z"
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
