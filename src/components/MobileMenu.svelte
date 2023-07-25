<script>
  import MobileMenuItem from "./MobileMenuItem.svelte"

  export let menu
</script>

<ul class="flex flex-col">
  {#each menu as item}
    <MobileMenuItem {item} />
  {/each}
</ul>
