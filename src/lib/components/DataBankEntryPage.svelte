<script>
  let { data, group } = $props()
  import { databank } from "$lib/data/starwars-databank.svelte";

  const dictionary = {
    creatures: 'creature',
    species: 'specie',
    characters: 'character',
    locations: 'location',
    organizations: 'organization',
    vehicles: 'vehicle'
  }

  const groups = ['creatures', 'species', 'characters', 'locations', 'organizations', 'vehicles']
  
  const determineEntry = () => {
    let entryName = ''
    groups.forEach(groupType => {
      if (groupType === group ) {
        entryName = dictionary[groupType]
      }
    })

    return entryName
  }

  const entry = determineEntry()
  const entryData = data[entry]
</script>

<header>
  <h1>{entryData.name}</h1>
</header>
<div class="image-container">
  <div class="image-border">
    <div class="image">
      <img src={entryData.image} alt={entryData.name}/>
    </div>
    <div class="corner-clip"></div>
  </div>
</div>
<div class="description">
  <p>{entryData.description}</p>
</div>

<a href={`/databank/${group}`}>Back</a>
<style>
  header h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .image-border {
    position: relative;
    padding: 6px;
    background: linear-gradient(135deg, #3498db, #2c3e50);
    border: 2px solid #4fc3f7;
    box-shadow: 0 0 15px rgba(79, 195, 247, 0.6);
    max-width: 90%;
    width: 500px;
  }
  
  .image {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }
  
  .image img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #2c3e50;
  }
  
  .corner-clip {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-top: 50px solid transparent;
    border-left: 50px solid #1a1a1a;
    z-index: 2;
    transform: translate(-1px, 1px);
  }
  
  /* Add some tech elements to enhance the sci-fi feel */
  .image-border::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 25px;
    width: 30px;
    height: 5px;
    background-color: #4fc3f7;
    box-shadow: 0 0 5px rgba(79, 195, 247, 0.8);
  }
  
  .image-border::after {
    content: '';
    position: absolute;
    bottom: 15px;
    right: -8px;
    width: 5px;
    height: 40px;
    background-color: #4fc3f7;
    box-shadow: 0 0 5px rgba(79, 195, 247, 0.8);
  }

  .description {
    padding: 1rem;
    border: 2px solid #4fc3f7;
    box-shadow: 0 0 15px rgba(79, 195, 247, 0.6);
    margin: 0.5rem;
  }

  a {
    width: 140px;
    font-size: 1rem;
    padding: 0.5rem 0.1rem;
    cursor: pointer;
    text-decoration: none;
    color: #0f0;
    font-size: 1.5rem;
    text-shadow: 0 0 8px #0f0;
    margin-left: 0.5rem;
  }
</style>