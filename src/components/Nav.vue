<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent z-40">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between px-4 lg:w-auto lg:static lg:block lg:justify-start md:w-auto md:static md:block md:justify-start">
          <router-link :to="{name: 'home'}" v-on:click="phoneNavChanger()" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black">
            Mullen Photography
          </router-link>
          <button v-on:click="showNavChanger()" class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button">
            <span class="block relative w-6 h-px rounded-sm bg-black"></span>
            <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
          </button>
        </div>
        <div class="md:flex md:flex-grow items-center px-1" id="example-navbar-warning" v-bind:class="{'hidden': !showNav, 'flex': showNav}">
          <ul class="flex flex-col lg:flex-row md:flex-row list-none ml-auto">
              <li class="nav-item">
                <router-link to="discover" v-on:click="phoneNavChanger()" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                  Discover
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="about" v-on:click="phoneNavChanger()" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                  About
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="contact" v-on:click="phoneNavChanger()" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                  Contact
                </router-link>
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
    showNavChanger: function (event) {
      this.showNav = !this.showNav;
    },
    phoneNavChanger: function (event) {
      if (width <= 768) {
        this.showNav = false;
      }
    }
  },
//   watch:{
//     $route (to, from){
//       if (width <= 768) {
//         this.showNav = false;
//       }
//     }
// } 
};
</script>