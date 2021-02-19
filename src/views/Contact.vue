<template>
	<div
		class="img flex flex-wrap content-center justify-center relative px-4 lg:px-28"
	>
		<div
			class="img-max w-12/12 xl:w-9/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-24"
		>
			<div>
				<template v-if="windowWidth > 1023">
					<img class="object-contain" src="../assets/pictures/img_33.jpeg" />
				</template>
				<template v-else>
					<img
						class="w-full max-h-96 object-cover lg:h-12/12 lg:max-h-full"
						src="../assets/pictures/img_21.jpeg"
					/>
				</template>
			</div>
			<div class="my-auto pb-9">
				<form
					method="post"
					name="Contact_Form"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					data-netlify-recaptcha="true"
					action="/"
				>
					<div class="my-5 text-sm">
						<label
							class="font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-black"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							class="px-4 py-3 mt-3 w-full border border-black focus:outline-none"
							name="name"
						/>
					</div>
					<div class="my-5 text-sm">
						<label
							class="font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-black"
						>
							Email
						</label>
						<input
							type="text"
							id="email"
							class="px-4 py-3 mt-3 w-full border border-black focus:outline-none"
							name="email"
						/>
					</div>
					<div class="my-5 text-sm">
						<label
							class="font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-black"
						>
							Message
						</label>
						<textarea
							id="message"
							class="h-36 px-4 py-3 mt-3 w-full border border-black focus:outline-none"
							name="message"
						/>
					</div>
					<button
						type="submit"
						class="px-4 font-bold text-sm leading-relaxed inline-block mr-4 py-2 uppercase text-black border border-black focus:outline-none hover:text-white hover:bg-black transition duration-300"
					>
						Send
					</button>
				</form>
			</div>
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
