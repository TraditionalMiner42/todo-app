<script>
	import { derived } from "svelte/store";
	import { taskList } from "../store";
	import { onDestroy } from "svelte";

	const numCheckedTasks = derived(
		taskList,
		($taskList) => $taskList.filter((task) => task.checked === true).length
	);

	// Subscribe to taskList changes
	const unsubscribe = taskList.subscribe((tasks) => {
		console.log("updated tasks: ", tasks); // Output tasks whenever taskList changes
	});

	// onDestroy(() => {
	// 	unsubscribe();
	// });
</script>

<div class="btn-wrapper">
	{#if $numCheckedTasks === 1}
		<button class="btn">Rename</button>
	{/if}
	<button class="btn">Delete</button>
</div>
