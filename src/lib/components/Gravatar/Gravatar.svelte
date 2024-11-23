<script lang="ts">
    import md5 from 'md5';

    export let email: string = '';
    export let size: number = 80;
    export let defaultImage: string = 'mp'; // mp = mystery person
    export let rating: string = 'g';
    export let className: string = '';

    $: hash = email ? md5(email.toLowerCase().trim()) : '';
    $: gravatarUrl = `https://api.gravatar.com/avatar/${hash}?s=${size}&d=${defaultImage}&r=${rating}`;
</script>

<img
    src={gravatarUrl}
    alt="User avatar"
    class={className}
    width={size}
    height={size}
/>
