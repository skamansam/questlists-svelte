<script lang="ts">
  // see https://yqnn.github.io/svg-path-editor/

  interface Props {
    /** Size of the logo in pixels */
    size?: number;
    /** which variant of the logo to use */
    variant?: string;
    /** decoration to apply to the logo */
    decoration?: string | null;
  }

  let {
    size = 24,
    variant = 'alt5',
    decoration = null,
  }: Props = $props();

  const relativePath = 'm 150 350 c 50 0 50 -50 50 -50 a 50 50 0 0 1 100 0 a 50 50 0 0 0 100 0 a 50 50 0 1 0 -100 0';
  const absolutePath = 'M 150 350 C 200 350 200 300 200 300 A 50 50 0 0 1 300 300 A 50 50 0 0 0 400 300 A 50 50 0 1 0 300 300';
  const size18 = 'M 7 17 C 10 17 10 14 10 14 A 3 3 0 0 1 16 14 A 3 3 0 0 0 22 14 A 3 3 0 1 0 16 14';
  const size24 = 'M 0.5123 16.3203 C 5.1232 16.3203 5.1232 11.7094 5.1232 11.7094 A 4.6109 4.6109 90 0 1 14.3449 11.7094 A 4.6109 4.6109 90 0 0 23.5666 11.7094 A 4.6109 4.6109 90 1 0 14.3449 11.7094';

  const variants: Record<string, string> = {
    plus: 'M 0.5123 16.3203 C 5.1232 16.3203 5.1232 11.7094 5.1232 11.7094 A 4.6109 4.6109 90 0 1 14.3449 11.7094 A 4.6109 4.6109 90 0 0 23.5666 11.7094 A 4.6109 4.6109 90 1 0 14.3449 11.7094 M 21 18 L 21 24 M 18 21 L 24 21',
    alt: 'm 5 10 a 1 1 0 0 0 0 -9 a 1 1 0 0 0 0 9 a 1 1 0 0 1 9 0 a 1 1 0 0 1 9 0',
    alt2: 'm 11 6 a 1 1 0 0 0 -10 0 a 1 1 0 0 0 10 0 a 1 1 0 0 1 7 0 a 1 1 0 0 1 5 0',
    alt3: 'm 11 6 a 1 1 0 0 0 -10 0 a 1 1 0 0 0 10 0 a 1 1 0 0 0 7 0 a 1 1 0 0 1 5 0',
    alt4: 'm 11 6 a 1 1 0 0 0 -10 0 a 1 1 0 0 0 10 0 a 1 1 0 0 0 7 0 a 1 1 0 0 0 5 0',
    alt5: 'm 11 12 a 1 1 0 0 0 -10 0 a 1 1 0 0 0 10 0 m -5 0 a 1 1 0 0 0 10 0 a 1 1 0 0 1 7 0',
  };

  const decorations: Record<string, string> = {
    plus: 'M 21 14 L 21 20 M 18 17 L 24 17',
    link: 'M 18 17 L 23 17 M 21 15 Q 29 17 21 19 M 20 19 Q 12 17 20 15',
  };
</script>

{#if size > 500}
  <svg width="500" height="500" viewBox="0 0 500 500">
    <path d={absolutePath} />
  </svg>
{:else}
  <svg width={size} height={size} viewBox="0 0 26 26">
    <path
      d={variant ? variants[variant] : size24}
      transform={`scale(${size / 26})`}
    />
    {#if decoration}
      <path
        d={decoration ? decorations[decoration] : null}
        transform={`scale(${size / 26})`}
      />
    {/if}
  </svg>
{/if}

<style>
  svg {
    stroke: currentColor;
    fill: none;
    stroke-width: 2px;
  }
</style>