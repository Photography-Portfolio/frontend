<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent z-40">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start md:w-auto md:static md:block md:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black" href="/">
            Mullen Photography
          </a>
          <button v-on:click="burger()" class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button">
            <span class="block relative w-6 h-px rounded-sm bg-black"></span>
            <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
          </button>
        </div>
        <div class="lg:flex lg:flex-grow items-center px-1" id="example-navbar-warning" v-bind:class="{'hidden': !showNav, 'flex': showNav}">
          <ul class="flex flex-col lg:flex-row md:flex-row list-none ml-auto">
              <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="/discover">
                  Discover
                </a>
              </li>
              <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="/profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="/contact">
                  Contact
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Home",
  data() {
		return {
			showNav: false,
		};
  },
  methods: {
    burger: function (event) {
      this.showNav = !this.showNav;
    }
  },
};
</script>