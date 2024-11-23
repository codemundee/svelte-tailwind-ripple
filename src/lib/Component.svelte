<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import ripple from "./ripple.svelte.js";
	import type { Props } from "./types.js";

	let {
		children,
		as = 'span',
		duration = 500,
		class: className,
		rippleClass = "bg-white/25",
		...restProps
	}: Props = $props();
</script>

<svelte:element
	this={as}
	class={twMerge(
		"pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden",
		className,
	)}
	use:ripple={{
		duration,
		classes: twMerge("pointer-events-none absolute rounded-full", rippleClass),
	}}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
