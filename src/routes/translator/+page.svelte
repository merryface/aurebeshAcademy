<script>
  let currentText = '';
</script>

<h1>Translator</h1>

<p></p>

<label>
  <p>Roman Alphabet</p>
  <textarea class="english" bind:value={currentText}></textarea>
</label>

<label>
  <p class="aurebesh">Aurebesh</p>
  <textarea class="aurebesh" bind:value={currentText}></textarea>
</label>

<style>
  /* Heading styling */
  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }
  
  /* Paragraph styling */
  p {
    line-height: 1.6;
    margin-bottom: 1em;
  }

  
  /* Label styling for consistent spacing */
  label {
    display: block;
    margin-bottom: 20px;
  }
  
  label p {
    margin-bottom: 5px;
    font-size: 1.1rem;
  }
  
  /* Textarea styling for a clean, consistent look */
  textarea {
    width: 100%;
    height: 40vh;
    background-color: #111;
    border: 1px solid #444;
    color: #ccc;
    font-size: 1rem;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
    
  }
  
  /* Aurebesh font styling - ensure your Aurebesh font is loaded */
  .aurebesh {
    color: #00ff00;
  }
  
  /* English text styling */
  .english {
    font-family: 'Open Sans', sans-serif;
  }
</style>
