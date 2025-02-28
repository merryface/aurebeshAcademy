<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte';
  let {children} = $props()
</script>

<Navbar />
<div class="container">
  {@render children()}
</div>
<Footer />


<style>
  .container {
    margin: 2rem auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }
</style>