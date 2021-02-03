<template>
	<div
		class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent z-40"
	>
		<div
			class="container px-4 mx-auto flex flex-wrap items-center justify-between lg:px-40"
		>
			<div class="w-full relative flex justify-center px-4">
				<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
					  <img class="box-border w-12/12 h-12/12 lg:h-80 lg:w-80 object-contain" src="../assets/pictures/img_31.jpeg" />
					  <img class="box-border w-12/12 h-12/12 lg:h-80 lg:w-80 object-contain" src="../assets/pictures/img_32.jpeg" />
            <img class="box-border w-12/12 h-12/12 lg:h-80 lg:w-80 object-contain" src="../assets/pictures/img_08.jpeg" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
	msg: String,
});

const state = reactive({ count: 0 });
</script>
