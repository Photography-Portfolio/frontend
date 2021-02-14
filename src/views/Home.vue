<template>
	<div class="img flex flex-wrap content-center justify-center relative px-4">
		<div class="img-max w-12/12 xl:w-9/12 2xl:w-8/12">
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
