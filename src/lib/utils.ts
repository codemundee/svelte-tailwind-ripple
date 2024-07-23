export function findFurthestPoint(
	clickPointX: number,
	elementWidth: number,
	offsetX: number,
	clickPointY: number,
	elementHeight: number,
	offsetY: number,
): number {
	const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
	const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
	const r = Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
	return r;
}

export async function createEffect(
	node: HTMLElement,
	mouseX: number,
	mouseY: number,
	rect: DOMRect,
	r: number,
	duration: number,
	className: string,
) {
	const circle = document.createElement("span");
	circle.className = className;
	circle.style.left = `${mouseX - rect.left - r}px`;
	circle.style.top = `${mouseY - rect.top - r}px`;
	circle.style.width = `${r * 2}px`;
	circle.style.height = `${r * 2}px`;
	const animate = circle.animate(
		[
			{
				transform: "scale(0)",
				opacity: 1,
			},
			{
				transform: "scale(1.5)",
				opacity: 0,
			},
		],
		{
			duration,
			easing: "linear",
		},
	);

	node.appendChild(circle);

	if (await animate.finished) {
		circle.remove();
	}
}
