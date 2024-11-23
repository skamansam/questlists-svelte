<script lang="ts">
  /**
   * @typedef {Object} Props
   * @property {boolean} [primary] Whether this is a primary button
   * @property {boolean} [loading] Whether the button is in a loading state
   * @property {'small' | 'medium' | 'large'} [size] The size of the button
   * @property {string} [backgroundColor] The background color
   * @property {string} label The button's label
   * @property {() => void} [onClick] Optional click handler
   */

  /** @type {Props} */
  const {
    primary = false,
    size = 'medium',
    loading = false,
    backgroundColor,
    label,
    onClick,
  } = $props();

  $: mode = primary ? 'primary' : 'secondary';
  $: padding = {
    small: 'px-3 py-1.5',
    medium: 'px-4 py-2',
    large: 'px-6 py-3',
  }[size];
  $: fontSize = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }[size];
</script>

<button
  type="button"
  class={`
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${padding} ${fontSize}
    ${mode === 'primary'
      ? 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:active:bg-primary-700'
      : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 focus:ring-primary-500 dark:bg-dark-surface-100 dark:text-dark-text-200 dark:border-dark-border-100 dark:hover:bg-dark-surface-200 dark:active:bg-dark-surface-300'
    }
  `}
  style={backgroundColor ? `background-color: ${backgroundColor}` : ''}
  on:click={onClick}
  disabled={loading}
>
  {#if loading}
    <svg
      class="w-4 h-4 mr-2 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  {/if}
  {label}
</button>
