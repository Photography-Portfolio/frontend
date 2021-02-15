<template>
	<div
		class="img flex flex-wrap content-center justify-center relative px-4 lg:px-28"
	>
		<div
			class="img-max w-12/12 xl:w-9/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-24"
		>
			<div>
				<img
					class="w-full max-h-96 object-cover lg:h-12/12 lg:max-h-full"
					src="../assets/pictures/img_08.jpeg"
				/>
			</div>
			<div class="my-auto pb-9">
				<h1
					class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-black"
				>
					About
				</h1>
				<p class="text-base font-light leading-relaxed mt-0 mb-4 text-black">
					Born and raised in Prague by American parents. I got into film
					photography in 2018 and have been enjoying it as a hobby ever since.
					The cameras I currently use and own are the Yashica T4 and the Canon
					AE-1.<br />
					In case you want to collaborate or have any questions, you can contact
					me
					<router-link to="contact" class="underline">here</router-link>.<br />
					Thanks for stopping by.<br />
					-Mitchell Mullen
				</p>
			</div>
		</div>
	</div>
</template>
