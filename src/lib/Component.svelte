<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import ripple from "./ripple.svelte.js";
	import type { Props } from "./types.js";

	let {
		children,
		as = "span",
		duration = 500,
		class: className,
		rippleClass = "bg-white/25",
		...restProps
	}: Props = $props();

	const rootClasses = "pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden";
	const rippleClasses = "pointer-events-none absolute rounded-full";

	let rootCls = $derived.by(() => twMerge(rootClasses, className));
	let rippleCls = $derived.by(() => twMerge(rippleClasses, rippleClass));
</script>

<svelte:element
	this={as}
	class={rootCls}
	use:ripple={{
		duration,
		classes: rippleCls,
	}}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
