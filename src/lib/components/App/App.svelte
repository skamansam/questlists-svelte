<script lang="ts">
	import { App as TwintrinsicApp } from "twintrinsic";
	import type { Snippet } from "svelte";

	interface Props {
		darkMode?: boolean;
		appName?: string;
		header?: Snippet;
		sidebar?: Snippet;
		children?: Snippet;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let { darkMode = false, appName = "Questlists", header, sidebar, children }: Props = $props();
</script>

<TwintrinsicApp {darkMode} {appName} leftPanelWidth="20rem" menu={null} header={null} footer={null} leftPanel={null} rightPanel={null}>
	{#if header}
		{#snippet header()}
			{@render header?.()}
		{/snippet}
	{/if}

	{#if sidebar}
		{#snippet leftPanel()}
			{@render sidebar?.()}
		{/snippet}
	{/if}

	<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{@render children?.()}
	</div>
</TwintrinsicApp>
