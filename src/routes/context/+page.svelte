<script>
  import { setContext } from 'svelte';
  import { BxWinkSmile } from '$lib';

  const iconCtx = {
    size: 100,
    color: '#ff4488'
  };
  setContext('iconCtx', iconCtx);
</script>

<div>
  <h1 class="w-full">setContext example</h1>
  <div class="w-full">
    <BxWinkSmile />
  </div>
</div>
