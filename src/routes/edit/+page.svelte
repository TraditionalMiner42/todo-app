<script>
	import { taskList, checkedTaskId } from "../store";
	import { goto } from "$app/navigation";

	export let toggleRename = false;

	$: {
		console.log("Checked length: ", $checkedTaskId);
		console.log("TaskList: ", $taskList);
	}

	const deleteFromTaskList = () => {
		const newTaskList = $taskList.filter((task) => {
			return !$checkedTaskId.find(
				(checkedTask) => checkedTask.id === task.id
			);
		});

		taskList.set(newTaskList);

		const newCheckedTaskId = $checkedTaskId.filter((checkedTask) => {
			return newTaskList.find((task) => task.id === checkedTask.id);
		});

		checkedTaskId.set(newCheckedTaskId);
	};

	const handleRenameButton = () => {
		toggleRename = !toggleRename;
		goto("/edit/rename");
	};
</script>

<div class="btn-wrapper">
	{#if $checkedTaskId.length !== 0}
		{#if $checkedTaskId.length === 1}
			<button class="btn" on:click={() => handleRenameButton()}
				>Rename</button
			>
		{/if}
		<button class="btn" on:click={() => deleteFromTaskList()}>Delete</button
		>
	{/if}
</div>
