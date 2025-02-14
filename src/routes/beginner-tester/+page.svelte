<script>
  import { onMount } from "svelte";
  import { databank } from '$lib/state/starwars-databank.svelte.js'
  import shuffle from "$lib/utils/shuffle";
  import generateOptions from '$lib/utils/generateOptions';

  let currentName = ''
  let options = []
  let result = '';
  let correct = 0;
  let incorrect = 0;
  let classColour = '';
  let textLoading = true
  let answerLoading = true

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
      result = '';
      currentName = await getRandomName();
      options = await generateOptions(currentName, getRandomName);
    }, 1000); 
  };
  

  onMount(async () => {
    currentName = await getRandomName()
    options = await generateOptions(currentName, getRandomName);
  })

</script>

<h1>Beginner Test: Names</h1>

<div class="test">

  <button class="aurebesh">{currentName}</button>
  
  <div class="answers">
    {#each options as option}
    <button onclick={() => checkAnswer(option)}>{option}</button>
    {/each}
  </div>
  
  <div class={"result " + classColour}>{result}</div>

  <div class="totaliser">
    <p><span>Correct: </span><span class="correct">{correct}</span></p>
    <p><span>Incorrect: </span> <span class="incorrect">{incorrect}</span></p>
    <p><span>Score:</span>{((correct/(correct+incorrect)*100) || 0).toFixed(0)}%</p>
  </div>
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

  /* Container for answer buttons using CSS Grid */
  .answers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 300px;
    margin: 20px auto;
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

  .totaliser {
    padding: 0.5rem 1rem;
    border: 1px solid #333;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    font-size: 1.5rem;
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .totaliser p {
    display: flex;
    justify-content: space-between;
  }
</style>