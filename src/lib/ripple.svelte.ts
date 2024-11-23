import * as utils from "./utils.js";

const ripple = (node: HTMLElement, params: { duration: number; classes: string }) => {
	let parent = $state<HTMLElement | null>(null);

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
		utils.createEffect(node, e.clientX, e.clientY, rect, r, params.duration, params.classes);
	}

	function exec() {
		parent = node.parentElement;
		parent!.addEventListener("mousedown", create);
	}

	exec();

	return {
		update() {
			exec();
		},
		destroy() {
			parent!.removeEventListener("mousedown", create);
		},
	};
};

export default ripple;
