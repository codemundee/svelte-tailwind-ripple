# svelte-tailwind-ripple

use ripple effect with tailwindcss

## Install

```bash
# install with npm
npm install svelte-tailwind-ripple

# install with yarn
yarn add svelte-tailwind-ripple

# install with pnpm
pnpm add svelte-tailwind-ripple
```

## Setup

setup your Tailwind configuration

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/svelte-tailwind-ripple/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

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
	<Ripple rippleClass="bg-img bg-no-repeat bg-center bg-cover" />
</button>
```

## Props

| Prop Name   | Type   | Default Value |
| ----------- | ------ | ------------- |
| duration    | number | 500           |
| rippleClass | string | bg-white      |
| class       | string |               |
