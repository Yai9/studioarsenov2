<script>
  import Submenu from "./Submenu.svelte"

  export let item

  let show = false

  const handleMouseEnter = () => {
    show = true
  }
  const handleMouseLeave = () => {
    show = false
  }
</script>

<li
  class="relative transition-all duration-500"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <a
    href={item.url}
    id="navButton"
    class="block px-6 py-1 group tracking-wide whitespace-nowrap lg:py-3 text-secondary hover:text-opacity-30 focus:text-opacity-30"
  >
    {item.title}
  </a>
  {#if item.submenus && show}
    <Submenu submenu={item.submenus} />
  {/if}
</li>
