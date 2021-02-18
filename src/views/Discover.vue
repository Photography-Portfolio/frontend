<template>
	<div
		v-if="!modal"
		class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent z-40"
	>
		<div
			class="container px-4 mx-auto flex flex-wrap items-center justify-between lg:px-40"
		>
			<div class="w-full relative flex justify-center px-4">
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
					<img
						v-for="(image, index) in images"
						:key="index"
						class="box-border w-12/12 h-12/12 md:h-80 md:w-80 object-contain"
						v-bind:src="image"
						v-on:click="modalMethod(index)"
					/>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="img flex flex-wrap content-center justify-center relative px-4">
			<div class="flex flex-row gap-2">
				<button
					class="text-xs uppercase font-bold leading-snug text-black hover:opacity-75 focus:outline-none"
					v-on:click="imageIndexMethod(-1)"
				>
					Prev
				</button>
				<img
					class="img-max"
					v-on:click="modal = !modal"
					:src="images[imageIndex]"
				/>
				<button
					class="text-xs uppercase font-bold leading-snug text-black hover:opacity-75 focus:outline-none"
					v-on:click="imageIndexMethod(1)"
				>
					Next
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Discover",
	data() {
		return {
			modal: false,
			images: [
				"src/assets/pictures/img_32.jpeg",
				"src/assets/pictures/img_31.jpeg",
				"src/assets/pictures/img_08.jpeg",
				"src/assets/pictures/img_33.jpeg",
				"src/assets/pictures/img_21.jpeg",
			],
			imageIndex: null,
		};
	},
	methods: {
		modalMethod: function (index) {
			if (window.innerWidth > 767) {
				this.modal = !this.modal;
				this.imageIndex = index;
			}
		},
		imageIndexMethod: function (moveIndex) {
			let numberOfImages = this.images.length - 1;

			let index = this.imageIndex + moveIndex;

			if (index > numberOfImages) {
				console.log(index);
			} else if (index < 0) {
				this.imageIndex = numberOfImages;
			} else {
				this.imageIndex = index;
			}

		}
	},
};
</script>
