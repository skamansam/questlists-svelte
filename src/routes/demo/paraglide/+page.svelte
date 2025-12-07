<script lang="ts">
import type { AvailableLanguageTag } from "$lib/paraglide/runtime";
import { goto } from "$app/navigation";
import { m } from "$lib/paraglide/messages.js";
import { locales, localizeHref, setLocale } from "$lib/paraglide/runtime";

function switchToLanguage(newLanguage: AvailableLanguageTag) {
	setLocale(newLanguage);
}
</script>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button onclick={() => switchToLanguage('en')}>en</button>
	<button onclick={() => switchToLanguage('fa-IR')}>fa</button>
</div>
