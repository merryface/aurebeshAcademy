<script>
  import { onMount } from "svelte";
  import generateOptions from '$lib/utils/generateOptions';
  import Totaliser from '$lib/components/Totaliser.svelte';
	import { characters } from '$lib/data/characters.js';

  let currentLetter = ''
  let options = [];
  let result = '';
  let correct = 0;
  let incorrect = 0;
  let classColour = '';
  let textLoading = true;

  const getRandomLetter = async () => {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
  }


  const checkAnswer = async (option) => {
    option === currentLetter ? result = 'Correct!' : result = 'Wrong!';
    option === currentLetter ? correct++ : incorrect++;
    classColour = option === currentLetter ? 'correct' : 'incorrect';
    
    // set timeout to clear the result after 1 second
    setTimeout(async () => {
      textLoading = true
      result = '';
      currentLetter = await getRandomLetter();
      options = await generateOptions(currentLetter, getRandomLetter);
      textLoading = false
    }, 1000); 
  };


  
  onMount(async () => {
    textLoading = true
    currentLetter = await getRandomLetter()
    options = await generateOptions(currentLetter, getRandomLetter);
    setTimeout(() => textLoading = false, 400)
  })
</script>

<h1>Letter Tester</h1>

<div class="test">

  <div class="aurebesh">{textLoading ? "Loading.." : currentLetter}</div>
  
  <div class="answer">
    {#if textLoading}
    <p class="loading-button" disabled>Loading...</p>
    {:else}
    <div class="answers">
      {#each options as option}
      <button on:click={() => checkAnswer(option)}>{option}</button>
      {/each}
    </div>
    {/if}
    
    <div class={"result " + classColour}>{result}</div>
  </div>

  {#if !textLoading}
    <Totaliser correct={correct} incorrect={incorrect} />
  {/if}
</div>

<style>
  h1 {
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
  }

  .test {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  /* Aurebesh styling (make sure the font is loaded in your project) */
  .aurebesh {
    font-family: "Aurebesh", sans-serif;
    font-size: 3rem;
    color: #00ff00;
  }

  .answer {
    height: 30vh
  }

  /* Container for answer buttons using CSS Grid */
  .answers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 300px;
    margin: 20px auto;
  }

  .loading-button {
    cursor: not-allowed;
    align-self: center;
    padding: 10px;
  }

  /* Button styling */
  button {
    padding: 10px;
    font-size: 1.5rem;
    background-color: #111;
    color: #ccc;
    border: 1px solid #444;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #222;
  }

  .result {
    text-transform: uppercase;
    font-weight: bold;
    height: 3rem;
  }

  .correct {
    color: #00ff00;
  }

  .incorrect {
    color: #ff0000;
  }
</style>