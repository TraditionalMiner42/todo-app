<script>
	import { taskList, checkedTaskId, isChecked } from "./store.js";
	import { page } from "$app/stores";

	console.log("Checked: ", $isChecked);

	const handleCheckboxChange = (event, taskId) => {
		isChecked.update((checked) => (checked = event.target.checked));
		checkedTaskId.update((taskIds) => {
			return $isChecked
				? [...taskIds, { id: taskId }]
				: taskIds.filter((id) => id.id != taskId);
		});
	};
	$: handleChecked = (taskId) => {
		return $checkedTaskId.some((checkedId) => checkedId.id == taskId);
	};
</script>

<div class="task-list-wrapper">
	<ul class="task-list">
		{#each $taskList as task}
			{#if $taskList.length !== 0}
				{#if $page.url.pathname.startsWith("/edit")}
					<div
						class="checkbox-row"
						draggable="true"
						id={`task-${task.id}`}
					>
						<input
							class="checkbox"
							type="checkbox"
							checked={handleChecked(task.id)}
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
