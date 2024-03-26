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

<div class="task-list-wrapper">
	<ul class="task-list">
		{#each tasks as task}
			{#if tasks.length !== 0}
				{#if $toggleEdit && $page.url.pathname === "/edit"}
					<div class="checkbox-row">
						<input
							class="checkbox"
							type="checkbox"
							bind:checked={task.checked}
							on:change={(e) => handleCheckboxChange(e, task.id)}
						/>{task.task}
					</div>
				{:else}
					<li class="task">- {task.task}</li>
				{/if}
			{/if}
		{/each}
	</ul>
</div>
