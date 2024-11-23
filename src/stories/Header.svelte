<script lang="ts">
  import Button from './Button.svelte';

  /**
   * @typedef {Object} Props
   * @property {{name: string}} [user] The user object
   * @property {() => void} [onLogin] The login event handler
   * @property {() => void} [onLogout] The logout event handler
   * @property {() => void} [onCreateAccount] The account creation event handler
   */

  /** @type {Props} */
  const { user, onLogin, onLogout, onCreateAccount } = $props();
</script>

<header class="border-b border-neutral-200 dark:border-dark-border-100">
  <div class="px-4 py-3 mx-auto flex items-center justify-between max-w-7xl">
    <div class="flex items-center space-x-4">
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        xmlns="http://www.w3.org/2000/svg"
        class="text-primary-600 dark:text-primary-400"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
            class="fill-white dark:fill-dark-surface-100"
          />
          <path
            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
            class="fill-primary-600 dark:fill-primary-400"
          />
          <path 
            d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" 
            class="fill-primary-400 dark:fill-primary-300" 
          />
        </g>
      </svg>
      <h1 class="text-2xl font-semibold text-neutral-900 dark:text-dark-text-50">Acme</h1>
    </div>
    <div class="flex items-center space-x-4">
      {#if user}
        <span class="text-neutral-700 dark:text-dark-text-200">
          Welcome, <b class="text-neutral-900 dark:text-dark-text-50">{user.name}</b>!
        </span>
        <Button size="small" onClick={onLogout} label="Log out" />
      {:else}
        <Button size="small" onClick={onLogin} label="Log in" />
        <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
      {/if}
    </div>
  </div>
</header>
