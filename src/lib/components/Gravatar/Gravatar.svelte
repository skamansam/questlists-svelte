<script lang="ts">
import md5 from "md5";
export interface GravatarProps {
	email?: string;
	size?: number;
	defaultImage?: "mp" | "identicon" | "monsterid" | "wavatar" | "retro" | "robohash" | "blank";
	rating?: "g" | "pg" | "r" | "x";
	className?: string;
}

let {
	email = "",
	size = 80,
	defaultImage = "mp", // mp = mystery person
	rating = "g",
	className = "",
}: GravatarProps = $props();

const hash = $derived(email ? md5(email.toLowerCase().trim()) : "");
const gravatarUrl = $derived(
	`https://api.gravatar.com/avatar/${hash}?s=${size}&d=${defaultImage}&r=${rating}`,
);
</script>

<img
    src={gravatarUrl}
    alt="User avatar"
    class={className}
    width={size}
    height={size}
/>
