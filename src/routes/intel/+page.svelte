<script>
  import { onMount } from "svelte";
  import photos from '$lib/photos.json';
  import shuffle from "$lib/utils/shuffle";
  import Totaliser from "$lib/components/Totaliser.svelte";

  let currentImage = {}
  let correctAnswer = ''
  let showTextAurebesh = false;
  let imageLoading = true;
  let options = []
  let result = ''
  let correct = 0;
  let incorrect = 0;
  let classColour = '';

  const getRandomImage = async () => {
    const randomImageIndex = Math.floor(Math.random() * photos.length)
    return photos[randomImageIndex]
  }

  const checkAnswer = async (option) => {
    const isRight = option === correctAnswer
    isRight ? result = 'Correct!' : result = 'Wrong!';
    isRight ? correct++ : incorrect++;
    classColour = isRight ? 'correct' : 'incorrect';
    
    // set timeout to clear the result after 1 second
    setTimeout(async () => {
      imageLoading = true
      result = '';
      currentImage = await getRandomImage();
      correctAnswer = currentImage.options[0];
      options = currentImage.options
      shuffle(options)
      showTextAurebesh = false;
      imageLoading = false
    }, 1000); 
  };

  onMount(async () => {
    imageLoading = true
    currentImage = await getRandomImage()
    correctAnswer = currentImage.options[0]
    options = currentImage.options
    shuffle(options)
    imageLoading = false
  })
</script>

<h1>Intel: Image Practice</h1>

<div class="answer">
  {#if imageLoading}
  <button class="loading-button" disabled>Loading...</button>
  {:else}
  <div class="question">
    <img src={'images/'+ currentImage.imagePath} alt={correctAnswer} />
    <span class="difficulty">Difficulty: {currentImage.difficultyLevel.toUpperCase()}</span>

    <p>Can't see the text clearly?</p>
    <div class="showBesh">
      <button onclick={() => showTextAurebesh = !showTextAurebesh}>{showTextAurebesh ? "Hide" : "Show"} Aurebesh</button>
      <p class="aurebesh textBeshBox">{showTextAurebesh ? correctAnswer : ''}</p>
    </div>
  </div>
  <div class="answers">
    {#each options as option}
    <button class="option" onclick={() => checkAnswer(option)} disabled={imageLoading}>{option}</button>
    {/each}  
    <div class={"result " + classColour}>{result}</div>
  </div>
  {/if}
  {#if !imageLoading}
  <Totaliser correct={correct} incorrect={incorrect} />
{/if}
</div>



<style>
  .answer {
    display: block;
    min-height: 135vh;
  }

  h1 {
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
  }

  img {
    max-width: 90vw;
    max-height: 50vh;
    margin: 0 auto;
    display: block;
  }

  .test {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .difficulty {
    color: #ccc;
    border: 1px solid #444;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    }

  /* Aurebesh styling (make sure the font is loaded in your project) */
  .aurebesh {
    font-family: "Aurebesh", sans-serif;
    font-size: 2rem;
    color: #00ff00;
  }

  .textBeshBox {
    font-size: 1rem;
    background-color: #111;
    color: #ccc;
    border: 1px solid #444;
    height: 2rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    min-width: 10rem;
  }

  .showBesh {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .answer {
    height: 30vh;
    display: block;
  }

  .option {
    min-width: 20rem;
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 60vw;
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