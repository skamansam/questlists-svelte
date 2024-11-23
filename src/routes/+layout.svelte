<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import App from '$lib/components/App/App.svelte';
	import AppHeader from '$lib/components/AppHeader/AppHeader.svelte';
	import SideBar from '$lib/components/Menu/SideBar.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<App>
		<AppHeader slot="header"/>
		<SideBar slot="sidebar"/>
		{@render children()}
	</App>
</ParaglideJS>
