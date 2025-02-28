<script>
  const externalLinks = {
    wookie_basic: 'https://starwars.fandom.com/wiki/Galactic_Basic_Standard'
  }

  const siteLinks = [
    { name: "Home", href: "/" },
    { name: "What is Aurebesh?", href: "/theory" },
    { name: "Translator", href: "/translator" },
    { name: "Learn the Letters", href: "/letter-tester" },
    { name: "Practice Words", href: "/beginner-tester" },
    { name: "Intel", href: "/intel" },
  ]

</script>

<div class="top">
  <h1>Aurebesh Academy</h1>
  <img class="navbar_logo" src='/logo.png' alt="Aurebesh Academy logo" />
  <p class="aurebesh">aurebesh academy</p>
</div>

<main>

  <p>Humans of the planet Earth. The New Republic has received word of your world. We reside in a galaxy far far away, and therefore cannot establish hyperspace routes to you. However, we understand that some of you have a fascination with our corner of the universe. In order to aid you, the Republic has agreed to create a resource for you to learn our writing system, Aurebesh. The <a href={externalLinks.wookie_basic}>Galactic Basic Standard</a> is the most spoken language in the known regions of our galaxy. Thankfully, our intel indicates that Basic is very similar to one of your Earth languages. We therefore think you will be able to quikcly learn our written language.</p>
  
  <p>Our intelligence officers were able to slice into your data networks (and were concerned the ease in which they able to do so, especially from such a large distance), and have reported back to the Republic that one such network, called, "the internet", is unsecured and accessible to virtually all humans of your planet. After a short familiarisation and reconstruction of your limited data-pads and terminals (as we understand, you call them, phones, tablets, desktops, and laptops), we were able to create a subroutine you call a website, to accomplish this task. This is it.</p>
  
  <p>Aurebesh Academy is the first step in establishing the first secured inter-galactic relationships of this kind in the known history of our galaxy. From our understanding, this is your first interaction with off-world civilsations. We welcome you to the galactic society!</p>
  
  <p>Each section below will give you information and train you into learning Aurebesh. Work through these sections in order. The final section is a small collection of both fictional and non-ficitional events that have happened in our galaxy, as well as some high level information on significant figures, species, planets, fauna, galactic organisations, and technologies. Reading in Aurebesh should help you consolidate what you have learned, and become more fluent in our language.</p>
  
  <p>May the force be with you.</p>
</main>


<ul>
  {#each siteLinks as link}
    <li class="btn">
      <a href={link.href}>{link.name}</a>
    </li>
  {/each}
</ul>

<div class="resources">
  <h3>External Resources:</h3>
  <div class="external-resources">
    <a href="https://starwars-databank.vercel.app/">STAR WARS DATABANK</a>
    <a href="https://starwars.fandom.com/wiki/Main_Page">Wookieepedia</a>
    <a href="https://aurebesh.org/">Aurebesh font</a>

  </div>
  <p>In case this wasn't obvious. This website is based on the ficitional works which are property of Lucasfilm and Disney, and was not created in collaboration with either of those party. It is a work of fiction (obviously) and no... I'm sorry to tell you that we did not, in fact, get contacted by the New Republic in order to establish inter-galactic relations... that would be dope though.</p>
</div>


<style>
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    position: relative;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #333;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    max-height: 50vh;
  }

  main p, .resources p {
    line-height: 1.5;
    margin-bottom: 1rem;
    width: 100%;
  }

  .resources {
    background-color: #333;
    padding: 0.5rem;
    margin-top: 5rem;
  }

  .resources h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .external-resources {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }


  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    flex-wrap: wrap !important;
  }

  .btn {
    max-width: 300px;
  }

  .btn a {
    font-size: 1.3rem;
  }
</style>