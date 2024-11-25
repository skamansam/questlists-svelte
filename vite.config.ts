import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		sveltekit(),
		visualizer({
			filename: 'stats.html',
			emitFile: true,
			template: 'flamegraph',
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
