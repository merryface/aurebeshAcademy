<script>
  let {correct = 0, incorrect = 0} = $props()
</script>

<div class="totaliser">
  <p><span>Correct: </span><span class="correct">{correct}</span></p>
  <p><span>Incorrect: </span> <span class="incorrect">{incorrect}</span></p>
  <p><span>Score:</span>{((correct/(correct+incorrect)*100) || 0).toFixed(0)}%</p>
</div>

<style>
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


  .correct {
    color: #00ff00;
  }

  .incorrect {
    color: #ff0000;
  }
</style>