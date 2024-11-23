<script lang="ts">
    import { darkMode, toggleDarkMode } from '$lib/stores/darkMode';
</script>

<button
    type="button"
    class="relative inline-flex h-9 w-16 items-center rounded-full bg-neutral-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:bg-dark-surface-200 dark:focus:ring-primary-600 dark:focus:ring-offset-dark-bg-200"
    class:bg-primary-600="{$darkMode}"
    on:click={toggleDarkMode}
    aria-label="Toggle dark mode"
>
    <span
        class="inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out dark:bg-dark-surface-50"
        class:translate-x-8={$darkMode}
        class:translate-x-1={!$darkMode}
    >
        <!-- Sun icon -->
        <svg
            class="h-7 w-7 p-1.5 text-amber-500 {$darkMode ? 'hidden' : ''}"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
        <!-- Moon icon -->
        <svg
            class="h-7 w-7 p-1.5 text-dark-text-100 {!$darkMode ? 'hidden' : ''}"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    </span>
</button>

<style>
    /* Optional: Add a subtle transition for the icons */
    svg {
        transition: opacity 0.2s ease-in-out;
    }
</style>
