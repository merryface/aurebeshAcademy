<script>
  import { page } from "$app/stores";
  import AurebeshTable from "./AurebeshTable.svelte";

  const siteLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/theory" },
    { name: "Translator", href: "/translator" },
    { name: "Letter Tester", href: "/letter-tester" },
    { name: "Intel", href: "/intel" },
    { name: "Names", href: "/beginner-tester" },
  ];

  let showMenu = false;
  let showTable = false;
</script>

<div class="navbar">
  <a href="/">
  <img class="navbar_logo" src='/logo.png' alt="Aurebesh Academy logo" />
  </a>
  <button class="help aurebesh btn" onclick={() => (showTable = !showTable)}
    >help</button
  >
  <button
    class="burger-menu aurebesh btn"
    onclick={() => (showMenu = !showMenu)}>h</button
  >
</div>

<div class={`aurebesh-helper ${showTable ? "active" : ""}`}>
  <AurebeshTable />
</div>

<ul class={`navbar_navigation ${showMenu ? "active" : ""}`}>
  <button
    class="burger-menu aurebesh btn"
    onclick={() => (showMenu = !showMenu)}>h</button
  >

  {#each siteLinks as link}
    <li>
      <a
        href={link.href}
        class={link.href === $page.url.pathname ? "active" : ""}
        onclick={() => {showMenu = false; showTable = false}}>{link.name}</a
      >
    </li>
  {/each}
</ul>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    position: relative;
    z-index: 101;
    height: 3rem;
  }

  .navbar a {
    text-decoration: none;
    height: 100%;
  }

  .navbar_logo {
    height: 100%;
    display: block;
  }

  .burger-menu,
  .help {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .help {
    margin-right: 10px;
    border: 1px solid white;
  }

  /* Off-canvas menu styling */
  .navbar_navigation {
    position: fixed; /* Removed from document flow */
    top: 0;
    right: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: #333;
    padding: 20px;
    transform: translateX(100%); /* Hide off-screen */
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .navbar_navigation.active {
    transform: translateX(0); /* Slide into view */
  }

  .navbar_navigation li {
    margin-bottom: 1rem;
  }

  .navbar_navigation a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  .aurebesh-helper {
    position: fixed;
    top: 50%;
    right: -100%;
    background-color: #333;
    padding: 0;
    margin: 0;
    translate: 50% -45%;
    transition: right 0.3s ease-in-out;
    z-index: 999;
  }

  .aurebesh-helper.active  {
    right: 50%
  }

  

  .active {
    color: red;
  }
</style>
