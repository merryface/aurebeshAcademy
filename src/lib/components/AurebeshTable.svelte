<script>
	import { characters } from '$lib/data/characters.js';
  const letters = characters
</script>

<div class="aurebesh-reference-chart">
  {#each letters as letter}
    <div class="letter-card">
      <div class="aurebesh">{letter}</div>
      <div class="english">{letter.toUpperCase()}</div>
    </div>
  {/each}

</div>

<!-- TODO: add responsive sizing so that table remains in full view -->

<style>
  /* Aurebesh font styling (ensure your Aurebesh font is loaded) */
  .aurebesh {
    font-family: 'Aurebesh', sans-serif;
    font-size: 1.5rem;
    color: #00ff00;  /* Neon green for a futuristic feel */
  }

  /* Grid container styling */
  .aurebesh-reference-chart {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 10px;
    max-width: 95vw;
    padding: 10px;
    border: 1px solid #333;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .letter-card {
    background-color: #111;
    border: 1px solid #444;
    padding: 5px;
    text-align: center;
  }

  .english {
    margin-top: 5px;
    font-size: 0.5rem;
    color: #ccc;
  }

  @media (max-width: 500px) {
    .aurebesh {
      font-size: 1rem;
    }

    .english {
      font-size: 0.4rem;
      margin-top: 3px;
    }

    .aurebesh-reference-chart {
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      gap: 5px;
    }
}
</style>
