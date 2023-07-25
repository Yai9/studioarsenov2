<script>
  import MenuItem from "./MenuItem.svelte"

  export let menu
</script>

<ul class="flex flex-col mt-2 md:ml-auto md:flex-row md:mt-0">
  {#each menu as item}
    <MenuItem {item} />
  {/each}
</ul>
