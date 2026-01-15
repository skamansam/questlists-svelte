<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Gravatar from "$lib/components/Gravatar/Gravatar.svelte";

	const { Story } = defineMeta({
		title: "Components/Gravatar",
		component: Gravatar,
		tags: ["autodocs"],
		argTypes: {
			email: { control: "text" },
			size: { control: { type: "number", min: 16, max: 512, step: 8 } },
			defaultImage: {
				control: "select",
				options: ["mp", "identicon", "monsterid", "wavatar", "retro", "robohash", "blank"],
			},
			rating: {
				control: "select",
				options: ["g", "pg", "r", "x"],
			},
			className: { control: "text" },
		},
	});
</script>

<Story name="Default" args={{ email: "skamansam@gmail.com", size: 80 }} />

<Story name="WithIdenticon" args={{ email: "nonexistent@example.com", size: 80, defaultImage: "identicon" }} />

<Story name="WithCustomStyling" args={{ email: "skamansam@gmail.com", size: 120, className: "rounded-lg border-4 border-primary-500" }} />

<Story name="SizeVariants" asChild>
	<div class="flex items-center gap-4">
		<Gravatar email="skamansam@gmail.com" size={32} className="rounded-full" />
		<Gravatar email="skamansam@gmail.com" size={48} className="rounded-full" />
		<Gravatar email="skamansam@gmail.com" size={64} className="rounded-full" />
		<Gravatar email="skamansam@gmail.com" size={96} className="rounded-full" />
	</div>
</Story>

<Story name="DefaultImageVariants" asChild>
	<div class="grid grid-cols-3 gap-4">
		<div class="flex flex-col items-center gap-2">
			<Gravatar email="test1@example.com" size={80} defaultImage="mp" className="rounded-full" />
			<span class="text-sm">Mystery Person</span>
		</div>
		<div class="flex flex-col items-center gap-2">
			<Gravatar email="test2@example.com" size={80} defaultImage="identicon" className="rounded-full" />
			<span class="text-sm">Identicon</span>
		</div>
		<div class="flex flex-col items-center gap-2">
			<Gravatar email="test3@example.com" size={80} defaultImage="monsterid" className="rounded-full" />
			<span class="text-sm">Monster ID</span>
		</div>
		<div class="flex flex-col items-center gap-2">
			<Gravatar email="test4@example.com" size={80} defaultImage="wavatar" className="rounded-full" />
			<span class="text-sm">Wavatar</span>
		</div>
		<div class="flex flex-col items-center gap-2">
			<Gravatar email="test5@example.com" size={80} defaultImage="retro" className="rounded-full" />
			<span class="text-sm">Retro</span>
		</div>
		<div class="flex flex-col items-center gap-2">
			<Gravatar email="test6@example.com" size={80} defaultImage="robohash" className="rounded-full" />
			<span class="text-sm">Robohash</span>
		</div>
	</div>
</Story>
