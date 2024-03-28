<script>
	import { taskList, checkedTaskId } from "./store.js";
	import { page } from "$app/stores";

	const handleCheckboxChange = (event, taskId) => {
		const isChecked = event.target.checked;
		checkedTaskId.update((taskIds) => {
			return isChecked
				? [...taskIds, taskId]
				: taskIds.filter((id) => id != taskId);
		});
	};
</script>

<div class="task-list-wrapper">
	<ul class="task-list">
		{#each $taskList as task}
			{#if $taskList.length !== 0}
				{#if $page.url.pathname === "/edit"}
					<div class="checkbox-row">
						<input
							class="checkbox"
							type="checkbox"
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
