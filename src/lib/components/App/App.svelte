<div class="dark:bg-dark-bg-200 left-nav-visible right-nav-visible bg-light-surface-200 dark:bg-dark-surface-200 antialiased">
	<slot name="header" />
	<!-- Sidebar -->

	<aside
		class="bg-surface-300 fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-neutral-200 pt-14 transition-transform dark:border-dark-border-100 dark:bg-dark-surface-300 md:translate-x-0"
		aria-label="Sidenav"
		id="drawer-navigation"
	>
		<slot name="sidebar" />
	</aside>

	<main class="h-full p-4 pt-20 md:ml-64">
		<div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<slot />
		</div>
	</main>
</div>
