<script>
	import "../app.css";
	import ViewTask from "./viewTask.svelte";
</script>

<header class="layout-header">Your To-do List</header>
<svelte:component this={ViewTask} />
<slot />
