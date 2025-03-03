<script>
  import { aurebeshActive } from "$lib/data/aurebeshState.svelte";
  import { goto } from "$app/navigation";
  
  let { data, group } = $props()
  
  // Extract data from the loader
  let groupMembers = $state(data[group])
  let pageInfo = $state(data.pageInfo)
  let currentPage = $state(data.currentPage)
  
  function nextPage() {
    if (pageInfo.next) {
      goto(`?page=${currentPage + 1}`);
    }
  }
  
  function previousPage() {
    if (pageInfo.prev) {
      goto(`?page=${currentPage - 1}`);
    }
  }
</script>

<div class={'list'}>
  <header>
    <h1>{group}</h1>
  </header>
  
  {#if groupMembers.length === 0}
    <p class="loading">Loading...</p>
  {/if}
  
  <ul>
    {#each groupMembers as member}
      <a href={`/databank/${group}/${member._id}`}>
        <li>{member.name}</li>
      </a>
    {/each}
  </ul>

  <div class={'pagination'}>
    <button onclick={previousPage} disabled={!pageInfo.prev}>← Previous</button>
    <button onclick={nextPage} disabled={!pageInfo.next}>Next →</button>
  </div>
</div>

<style>
  .list {
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

  li, button {
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

  a, button {
    text-decoration: none;
    color: #0f0;
    font-size: 1.5rem;
    text-shadow: 0 0 8px #0f0;
  }

  .pagination.aurebesh > button {
    font-family: 'Aurebesh';
  }

  .pagination {
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem
  }

  button {
    width: 140px;
    font-size: 1rem;
    padding: 0.5rem 0.1rem;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    header h1 {
      font-size: 2rem;
    }

    a {
      font-size: 1.2rem;
    }

    li {
      margin: 1rem;
    }

    button {
      font-size: 0.8rem;
    }
  }

  .loading {
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem;
  }
</style>