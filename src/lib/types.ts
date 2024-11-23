import type { Snippet } from "svelte";

export interface Props {
	as?: keyof HTMLElementTagNameMap;
	children?: Snippet;
	class?: string;
	duration?: number;
	rippleClass?: string;
}

export {};
