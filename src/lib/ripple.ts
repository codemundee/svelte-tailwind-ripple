import * as utils from "./utils.js";

export default function ripple(node: HTMLElement, options: { duration: number; classes: string }) {
	const parent = node.parentElement;

	if (!parent) {
		console.error('"Ripple" can not find parent node');
		return;
	}

	function create(e: MouseEvent) {
		const rect = node.getBoundingClientRect();
		const r = utils.findFurthestPoint(
			e.clientX,
			node.offsetWidth,
			rect.left,
			e.clientY,
			node.offsetHeight,
			rect.top,
		);
		utils.createEffect(node, e.clientX, e.clientY, rect, r, options.duration, options.classes);
	}

	parent.addEventListener("click", create);

	return {
		destroy: () => {
			parent.removeEventListener("click", create);
		},
	};
}
