<script>
  import { onMount } from "svelte";
  import { databank } from '$lib/data/starwars-databank.svelte.js';
  import shuffle from "$lib/utils/shuffle";
  import generateOptions from '$lib/utils/generateOptions';

  import Totaliser from "$lib/components/Totaliser.svelte";

  let currentName = ''
  let options = []
  let result = '';
  let correct = 0;
  let incorrect = 0;
  let classColour = '';
  let textLoading = true

  const getRandomName = async () => {
    const randomGoupIndex = Math.floor(Math.random() * databank.groups.length)
    const randomGroup = databank.groups[randomGoupIndex]
    await databank.updateGroupInformation(randomGroup)
    const randomIndex = Math.floor(Math.random() * databank[randomGroup].length)
    return databank[randomGroup][randomIndex].name
  }

  const checkAnswer = async (option) => {
    option === currentName ? result = 'Correct!' : result = 'Wrong!';
    option === currentName ? correct++ : incorrect++;
    classColour = option === currentName ? 'correct' : 'incorrect';
    
    // set timeout to clear the result after 1 second
    setTimeout(async () => {
      textLoading = true
      result = '';
      currentName = await getRandomName();
      options = await generateOptions(currentName, getRandomName);
      textLoading = false
    }, 1000); 
  };
  

  onMount(async () => {
    textLoading = true
    currentName = await getRandomName()
    options = await generateOptions(currentName, getRandomName);
    textLoading = false
  })

</script>

<h1>Beginner Test: Names</h1>
<div class="test">
  <div class="aurebesh">{textLoading ? "Loading..." : currentName}</div>
  
  <div class="answer">
    {#if textLoading}
      <button class="loading-button" disabled>Loading...</button>
    {/if}
    <div class="answers">
      {#if !textLoading}
        {#each options as option}
        <button onclick={() => checkAnswer(option)} disabled={textLoading}>{option}</button>
        {/each}  
      {/if}
    </div>
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
    font-size: 2rem;
    color: #00ff00;
  }

  .answer {
    height: 30vh
  }

  .answers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 300px;
    margin: 20px auto;
  }

  .loading-button {
    margin-top: 20px;
    cursor: not-allowed;
    align-self: center;
    padding: 10px;
    width: 100%;
  }

  /* Button styling */
  button {
    padding: 10px;
    font-size: 1rem;
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