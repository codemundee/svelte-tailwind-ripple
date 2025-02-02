# svelte-tailwind-ripple

use ripple effect with tailwindcss 4

## Install

```bash
# install with npm
npm install svelte-tailwind-ripple
npm install tailwind-merge

# install with yarn
yarn add svelte-tailwind-ripple
yarn add tailwind-merge

# install with pnpm
pnpm add svelte-tailwind-ripple
pnpm add tailwind-merge
```

## Note

Add class `relative overflow-hidden` to parent element

## Example

```svelte
<script lang="ts">
	import Ripple from "svelte-tailwind-ripple";
</script>

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
	class="relative overflow-hidden rounded-md bg-blue-500 px-4 py-2 text-white"
>
	Button
	<!-- change color effect style -->
	<Ripple rippleClass="bg-black/50" />
</button>

<button
	type="button"
	class="relative overflow-hidden rounded-md bg-blue-500 px-4 py-2 text-white"
>
	Button
	<!-- change effect style witch background image -->
	<Ripple rippleClass="bg-[url(/bg.webp)] bg-no-repeat bg-center bg-cover" />
</button>
```

## Props

| Prop Name   | Type   | Default Value |
| ----------- | ------ | ------------- |
| as          | string | span          |
| duration    | number | 500           |
| rippleClass | string | bg-white/25   |
| class       | string |               |
