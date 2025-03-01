<script>
  import { databank } from "$lib/data/starwars-databank.svelte";

  const routes = databank.groups.map((group) => {
    return {
      name: group,
      path: `databank/${group}`,
    }
  })
</script>

<div class="datapad aurebesh">
  <header>
    <h1>Datapad</h1>
  </header>
  <ul>
    {#each routes as route}
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .datapad {
    position: relative;
    color: #0f0;
    text-shadow: 0 0 8px #0f0;
    background: radial-gradient(ellipse at center, #1a1a1a 0%, #000 100%);
  }

  header h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    max-width: 400px;
    margin: 0 auto;
  }

  li {
    margin: 1rem 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    transition: background 0.3s ease;
    border: 1px solid #0f0;
  }

  li:hover {
    background: rgba(100, 0, 0, 0.9);
  }

  a {
    text-decoration: none;
    color: #0f0;
    font-size: 1.5rem;
  }
</style>
