<script>
	import toggleRename from "../../edit/+page.svelte";
	import { taskList, checkedTaskId } from "../../store";

	let newTask = "";
	let renamed = [];
	let updatedTasks = [];

	$: {
		// console.log("toggle rename: ", toggleRename);
		console.log("Checked Task: ", renameTasks);
		console.log("Rename Task: ", $taskList);
	}

	const handleKeyPressed = (event) => {
		if (event.key === "Enter") updateRenamedToTasks();
	};

	const updateRenamedToTasks = async () => {
		taskList.update((tasks) => {
			return tasks.map((task) => {
				if (task.id === renameTasks[0]?.id) {
					return { ...task, task: newTask }; // Update the task with the new task name
				}
				return task;
			});
		});
	};
	const renameTasks = $taskList.filter((task) => {
		return $checkedTaskId.find((checkedTask) => checkedTask.id === task.id);
	});
</script>

{#if toggleRename}
	<dialog open>
		<input
			class="input-task"
			type="text"
			bind:value={newTask}
			on:keydown={handleKeyPressed}
		/>
		<button class="btn" on:click={() => updateRenamedToTasks()}
			>Rename</button
		>
	</dialog>
{/if}
