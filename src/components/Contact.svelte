<script>
  import { onMount } from "svelte";
  import { config } from "@data/config";

  let isValidCountry = true;
  let name = "";
  let email = "";
  let message = "";
  let errors = {};

  async function fetchApi() {
    try {
      const data = await fetch("https://ipinfo.io/json");
      const response = await data.json();
      if (response.country === "RS") {
        isValidCountry = true;
      } else {
        isValidCountry = false;
      }
    } catch (err) {
      isValidCountry = false;
    }
  }
  onMount(() => {
    try {
      fetchApi();
      document.getElementById("form").addEventListener("submit", handleSubmit);
    } catch (err) {
      console.err("Country check failed.");
    }
  });

  async function handleSubmit(event) {
    if (validateForm() && !isValidCountry) {
      event.preventDefault();
      alert("You can only submit inqueries from Europe.");
    } else if (validateForm() && isValidCountry) {
      console.log("Form submitted successfully!");
    } else {
      event.preventDefault();
    }
  }

  function validateForm() {
    errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Neophodno polje.";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "E-mail je neophodan.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "E-mail nije ispravan.";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Neophodno polje.";
      isValid = false;
    }
    return isValid;
  }
</script>

<!--contact start-->
<div class="relative bg-[#070707]" id="kontakt">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-[#070707]"></div>
  </div>
  <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
    <div
      class="bg-[#070707] py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
    >
      <div class="mx-auto max-w-lg">
        <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Kontaktirajte nas
        </h2>
        <p class="mt-3 text-lg leading-6 text-gray-200">
          Ako želite da uhvatite Vaše trenutke večnosti, kontaktirajte nas i
          zajedno ćemo stvoriti nezaboravne uspomene koje će trajati
          generacijama.
        </p>
        <dl class="mt-8 text-base text-gray-400">
          <div>
            <dt class="sr-only">Postal address</dt>
            <dd>
              <p>{config.contact.address}</p>
            </dd>
          </div>
          <div class="mt-6">
            <dt class="sr-only">Phone number</dt>
            <dd class="flex">
              <svg
                class="h-6 w-6 flex-shrink-0 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <span class="ml-3">{config.contact.phone}</span>
            </dd>
          </div>
          <div class="mt-3">
            <dt class="sr-only">Email</dt>
            <dd class="flex">
              <svg
                class="h-6 w-6 flex-shrink-0 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
              <span class="ml-3">{config.contact.email}</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div
      class="bg-[#070707] py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
    >
      <div class="mx-auto max-w-lg lg:max-w-none">
        <form
          id="form"
          method="post"
          class="grid grid-cols-1 gap-y-6"
          action="https://formsubmit.co/studioarsenov@gmail.com"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label for="full-name" class="sr-only">Ime/Prezime</label>
            <input
              on:keydown={() => name.trim() !== "" && (errors.name = "")}
              bind:value={name}
              type="text"
              name="full-name"
              id="full-name"
              autocomplete="name"
              class="block w-full rounded-md bg-primary border-gray-400 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Ime/Prezime"
            />
            {#if errors.name}
              <div class="text-red-600 font-medium text-lg">
                {errors.name}
              </div>
            {/if}
          </div>
          <div>
            <label for="email" class="sr-only">E-mail adresa</label>
            <input
              on:keydown={() => email.trim() !== "" && (errors.email = "")}
              bind:value={email}
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md bg-primary border-gray-400 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="E-mail adresa"
            />
            {#if errors.email}
              <div class="text-red-600 font-medium text-lg">
                {errors.email}
              </div>
            {/if}
          </div>
          <div>
            <label for="phone" class="sr-only">Kontakt telefon</label>
            <input
              type="number"
              name="phone"
              id="phone"
              autocomplete="tel"
              class="block w-full rounded-md bg-primary border-gray-400 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Kontakt telefon"
            />
          </div>
          <div>
            <label for="message" class="sr-only">Poruka</label>
            <textarea
              on:keydown={() => message.trim() !== "" && (errors.message = "")}
              bind:value={message}
              id="message"
              name="message"
              rows="4"
              class="block w-full rounded-md bg-primaryForeground border-gray-400 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Poruka"
            ></textarea>
            {#if errors.message}
              <div class="text-red-600 font-medium text-lg">
                {errors.message}
              </div>
            {/if}
          </div>
          <div>
            <button
              type="submit"
              id="submit"
              class="inline-flex justify-center rounded-md border border-transparent w-full bg-indigo-600 py-3 px-10 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:w-1/3"
              >Pošalji</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<!--contact end -->

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
