<script>
  import AurebeshTable from "$lib/components/AurebeshTable.svelte";
</script>

<h1>Aurebesh Essentials</h1>

<p >
  Aurebesh is the "basic" (English) alphabet in the Star Wars universe. It is used to write the Galactic Basic Standard language. The alphabet is based on English, but the letters are changed to look futuristic. The alphabet is used in the Star Wars movies and in the Star Wars expanded universe. The font used on this site has digraphs, however, much of canon still hasn’t adapted it. So you may see a discrepancy of its use. For example, many of the video games may opt to avoid using digraphs at times. You can refer to the <a href="https://starwars.fandom.com/wiki/Aurebesh" target="_blank">Wookieepedia</a> for more information. The table below will always be accessible to you whenever you need to a aurebesh to roman alphabet reference. Simply click on the “help” button on the center of the header above to toggle it on and off.</p>

<div class="table">
  <AurebeshTable />
</div>

<style>
  /* Header styling */
  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  /* Paragraph and link styling */
  p {
    line-height: 1.6;
  }

  .table {
    width: 100%;
    margin-top: 2rem;
    padding: 0;
    display: flex;
    justify-content: center;
  }
</style>