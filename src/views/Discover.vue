<template>
	<div
		class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent z-40"
	>
		<div
			class="container px-4 mx-auto flex flex-wrap items-center justify-between lg:px-40"
		>
			<div class="w-full relative flex justify-center px-4">
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
					<img v-for="image in images" :key="image"
						class="box-border w-12/12 h-12/12 md:h-80 md:w-80 object-contain"
						v-bind:src="image"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Discover",
	data() {
		return {
			images: [
				"src/assets/pictures/img_32.jpeg",
				"src/assets/pictures/img_31.jpeg",
				"src/assets/pictures/img_08.jpeg",
				"src/assets/pictures/img_31.jpeg",
				"src/assets/pictures/img_08.jpeg",
				"src/assets/pictures/img_32.jpeg",
				"src/assets/pictures/img_32.jpeg",
				"src/assets/pictures/img_31.jpeg",
				"src/assets/pictures/img_08.jpeg",
				"src/assets/pictures/img_31.jpeg",
				"src/assets/pictures/img_08.jpeg",
				"src/assets/pictures/img_32.jpeg",
			]
		};
	},
};
</script>
