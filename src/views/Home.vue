<template>
	<div class="img flex flex-wrap md:content-center lg:content-center xl:content-center 2xl:content-center justify-center">
		<div class="w-12/12 xl:w-9/12 2xl:w-8/12 px-4">
			<template v-if="windowWidth > 640">
				<img src="../assets/pictures/img_31.jpeg" />
			</template>
      <template v-else>
				<img src="../assets/pictures/img_32.jpeg" />
			</template>
		</div>
	</div>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
	name: "Home",
	data() {
		return {
			windowWidth: window.innerWidth,
		};
	},
	mounted() {
		window.onresize = () => {
			this.windowWidth = window.innerWidth;
		};
	},
};
</script>

<style scoped>
.img {
	height: 88vh;
}
</style>
