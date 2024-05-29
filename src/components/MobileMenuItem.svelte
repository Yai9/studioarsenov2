<script>
  import MobileSubmenu from "./MobileSubmenu.svelte"

  export let item

  let show = false

  const menuOpenHandler = () => {
    show = !show
  }
</script>

<button
  class="group whitespace-nowrap hover:transition-all duration-500 items-center relative font-medium"
  on:click={menuOpenHandler}
>
  <a
    href={item.url}
    id="navButton"
    class="rounded-md py-2 lg:py-6 lg:inline-flex flex px-2 hover:bg-gray-100"
  >
    {item.title}
  </a>
  {#if item.submenus && show}
    <MobileSubmenu submenu={item.submenus} />
  {/if}
</button>
