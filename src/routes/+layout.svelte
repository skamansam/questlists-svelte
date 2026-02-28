<script lang="ts">
import "../app.css";
import { App, Sidebar, type MenuItem, Footer } from "twintrinsic";
import AppHeader from "$lib/components/AppHeader/AppHeader.svelte";

let { children } = $props();

const menuItems: MenuItem[] = [
	{
		title: "QuestLists",
		icon: "questlists",
		iconClass: "font-questlists text-2xl",
		link: "/",
	},
	{
		title: "New Quest",
		icon: "home",
		link: "/new",
	},
	{
		title: "Recent Quests",
		separator: true,
	},
	{
		title: "No Recent Quests",
	},
	{
		title: "Game Map Example",
		icon: "map",
		link: "https://twintrinsic.vercel.app/docs/examples/game-map",
		separator: true,
	},
	{
		title: "About QuestLists",
		icon: "info",
		link: "/about",
		separator: true,
	},
];
</script>

<App appName="Questlists" leftPanelWidth="20rem">
	{#snippet header()}
		<AppHeader />
	{/snippet}
	{#snippet leftPanel()}
		<Sidebar menu={menuItems} />
	{/snippet}
	{@render children?.()}
	{#snippet footer()}
		{#snippet footerCenter()}
			<p>Copyright © 2024 QuestLists. All rights reserved.</p>
		{/snippet}
		<Footer center={footerCenter} />
	{/snippet}
</App>
