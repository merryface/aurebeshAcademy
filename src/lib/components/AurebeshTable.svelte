<script>
  const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'ch', 'ae', 'eo', 'kh', 'ng', 'oo', 'sh', 'th', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '-', '_', ',', '.', '/', ':', ';', '/', "'", '"', '(',
  ')', '[', ']', '{', '}'
]
</script>

<div class="aurebesh-reference-chart">
  {#each letters as letter}
    <div class="letter-card">
      <div class="aurebesh">{letter}</div>
      <div class="english">{letter.toUpperCase()}</div>
    </div>
  {/each}

</div>

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
    max-width: 600px;
    margin: 2em auto;
    padding: 10px;
    border: 1px solid #333;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  /* Card styling for each letter pair */
  .letter-card {
    background-color: #111;
    border: 1px solid #444;
    padding: 10px;
    text-align: center;
  }

  .english {
    margin-top: 5px;
    font-size: 1.2rem;
    color: #ccc;
  }
</style>
