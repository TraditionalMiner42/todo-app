<script>
	import { onDestroy } from "svelte";
	import { taskList, toggleEdit } from "./store.js";
	import { page } from "$app/stores";

	let unsubscribe;
	let tasks = [];

	const handleCheckboxChange = (event, taskId) => {
		const isChecked = event.target.checked;
		// console.log(`Task ${taskId} is checked: ${isChecked}`);
		updateTasks(taskId, isChecked);
	};

	const updateTasks = (taskId, isChecked) => {
		tasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, checked: isChecked };
			}
			return task;
		});
	};

	$: {
		unsubscribe = taskList.subscribe(
			(updateTasks) => (tasks = updateTasks)
		);
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<ul>
	{#each tasks as task}
		{#if tasks.length !== 0}
			{#if $toggleEdit && $page.url.pathname === "/edit"}
				<input
					type="checkbox"
					bind:checked={task.checked}
					on:change={(e) => handleCheckboxChange(e, task.id)}
				/>{task.id}: {task.task}
			{:else}
				<li>{task.id}: {task.task}</li>
			{/if}
		{/if}
	{/each}
</ul>
