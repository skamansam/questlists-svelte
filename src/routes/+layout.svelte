<script lang="ts">
	import '../app.css';
	import App from '$lib/components/App/App.svelte';
	import AppHeader from '$lib/components/AppHeader/AppHeader.svelte';
	import SideBar from '$lib/components/Menu/SideBar.svelte';
	let { children } = $props();
</script>

<App>
	<AppHeader slot="header"/>
	<SideBar slot="sidebar"/>
	{@render children()}
</App>
