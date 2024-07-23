<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import ripple from "./ripple.js";

	export let duration: number = 500;
	export let rippleClass: string = "bg-white";
	let rootClass: string = "";
	export { rootClass as class };
</script>

<span
	class={twMerge(
		"pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden",
		rootClass,
	)}
	use:ripple={{
		duration,
		classes: twMerge("pointer-events-none absolute rounded-full", rippleClass),
	}}
>
</span>
