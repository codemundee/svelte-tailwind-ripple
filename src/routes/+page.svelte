<script lang="ts">
	import Ripple from "$lib/index.js";
</script>

<div class="flex w-full justify-center gap-4 py-16">
	<button
		type="button"
		class="relative overflow-hidden rounded-md bg-blue-500 px-4 py-2 text-white"
	>
		Button
		<!-- default effect style -->
		<Ripple />
	</button>
	<button
		type="button"
		class="relative overflow-hidden rounded-md bg-red-500 px-4 py-2 text-white"
	>
		Button
		<!-- image effect style -->
		<Ripple rippleClass="bg-img bg-no-repeat bg-center bg-cover" />
	</button>
</div>

<div class="relative flex w-full justify-center gap-4 overflow-hidden bg-red-200 py-16">
	Hero
	<Ripple />
</div>
