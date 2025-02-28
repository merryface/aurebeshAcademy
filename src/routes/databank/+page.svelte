<script>

  let routes = [
    { name: "Characters", path: "databank/characters" },
    { name: 'Creatures', path: "databank/creatures" },
    { name: "Droids", path: "databank/droids" },
    { name: "Locations", path: "databank/locations" },
    { name: "Organisations", path: "databank/organisations" },
    { name: "Species", path: "databank/species" },
    { name: "Vehicles", path: "databank /vehicle" },
  ];
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
    min-height: 100vh;
    padding: 2rem;
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
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    transition: background 0.3s ease;
  }

  li:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  a {
    text-decoration: none;
    color: #0f0;
    font-size: 1.5rem;
  }
</style>
