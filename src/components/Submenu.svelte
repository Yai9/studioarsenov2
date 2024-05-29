<script>
  export let submenu
</script>

<div
  id="SubMenu"
  class="sub-menu fixed w-full sm:px-0 nav:ml-0 nav:-translate-x-[46%]"
>
  <div class="bg-transparent h-2" />
  <div
    class="absolute left-1/2 z-10 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0"
  >
    <div
      class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div
        class="relative grid gap-6 bg-primary bg-opacity-80 backdrop-blur-md px-5 py-6 sm:gap-8 sm:p-8"
      >
        <ul class="space-y-4">
          {#each submenu as subitem}
            <li>
              <a
                href={subitem.url}
                title={subitem.title}
                class="rounded-md p-3 flex items-center gap-x-2 transition duration-150 ease-in-out hover:bg-black/10 focus:border-none focus:outline-none"
              >
                <p
                  class="flex gap-x-2 items-center w-52 text-ellipsis overflow-hidden text-base font-medium text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    ><path
                      d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
                    /></svg
                  >
                  {subitem.title}
                </p>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
