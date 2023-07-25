<script>
  export let submenu
</script>

<div id="SubMenu" class="sub-menu w-full">
  <div class="relative z-10 w-screen max-w-xs transform">
    <div class="overflow-hidden">
      <div class="relative grid gap-6 px-4 py-6 sm:gap-8">
        <ul class="space-y-4">
          {#each submenu as subitem}
            <li class="rounded-md hover:bg-gray-100">
              <a
                href={subitem.url}
                title={subitem.title}
                class="rounded-md p-3 flex items-center gap-x-2 transition duration-150 ease-in-out focus:border-none focus:outline-none"
              >
                <p
                  class="flex gap-x-2 items-center w-52 text-ellipsis overflow-hidden text-base font-medium text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
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
