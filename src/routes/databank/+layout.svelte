<script>
  import { aurebeshActive } from "$lib/data/aurebeshState.svelte";
  let {children} = $props()

  const toggleAurebesh = () => aurebeshActive.updateValue();
</script>

<div>
  {@render children()}
  <button onclick={toggleAurebesh} class={aurebeshActive.value ? 'aurebesh' : ''}>
    {aurebeshActive.value ? 'English' : 'Aurebesh'}
  </button>
</div>

<style>
  button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    padding: 0.5rem 1rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>