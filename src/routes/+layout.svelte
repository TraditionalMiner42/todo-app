<script>
	import ViewTask from "./viewTask.svelte";
</script>

<header class="layout-header">Your To-do List</header>
<svelte:component this={ViewTask} />
<slot />

<style>
	.layout-header {
		font-size: 2.5rem;
		font-family: sans-serif;
		text-transform: uppercase lowercase;
	}
</style>
