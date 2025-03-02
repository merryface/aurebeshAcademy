<script>
  import { aurebeshActive } from "$lib/data/aurebeshState.svelte";
  let {children} = $props()

  const toggleAurebesh = () => aurebeshActive.updateValue();
</script>

<div class={"datapad " + (aurebeshActive.value ? 'aurebesh' : '')}>
  {@render children()}
  <button onclick={toggleAurebesh} class={aurebeshActive.value ? 'aurebesh' : ''}>
    {aurebeshActive.value ? 'English' : 'Aurebesh'}
  </button>
</div>

<style>
  button {
    position: fixed;
    bottom: 1.5rem;
    right: 0;
    margin: 1rem;
    padding: 0.6rem 1rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    border: 2px solid #4fc3f7;
    box-shadow: 0 0 15px rgba(79, 195, 247, 0.6);
  }

  .datapad {
    position: relative;
    color: #0f0;
    text-shadow: 0 0 8px #0f0;
    background: radial-gradient(ellipse at center, #1a1a1a 0%, #000 100%);
  }
</style>