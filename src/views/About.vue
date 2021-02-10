<template>
	<div
		class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent z-40"
	>
		<div class="container px-4 mx-auto flex flex-wrap xl:px-40">
			<div class="img w-full relative flex px-4">
				<div
					class="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center content-center"
				>
					<img
						class="w-full max-h-96 object-cover lg:h-12/12 lg:max-h-full"
						src="../assets/pictures/img_08.jpeg"
					/>
					<div class="m-auto">
						<h1
							class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-black"
						>
							About
						</h1>
						<p
							class="text-base font-light leading-relaxed mt-0 mb-4 text-black"
						>
							Born and raised in Prague by American parents. I got into film
							photography in 2018 and have been enjoying it ever since. The
							cameras I currently use and own are the Yashica T4 and the Canon
							AE-1.<br>
                            In case you want to collaborate or have any questions, you
							can contact me <router-link to="contact" class="underline">here</router-link>.<br>
                            Thanks for stopping by.<br>
                            -Mitchell Mullen
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
