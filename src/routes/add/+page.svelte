<script>
	import { taskList, idCounter } from "../store";

	let task = "";

	$: {
		if ($taskList.length === 0) console.log("reset");
		else console.log($taskList);
	}

	const addTaskToList = () => {
		if (task.trim() !== "") {
			idCounter.update((n) => {
				if ($taskList.length !== 0) return n + 1;
				else return 0;
			});

			taskList.update((list) => [...list, { id: $idCounter, task }]);
			task = "";
		} else alert("Task cannot be empty.");
	};
</script>

<input placeholder="Add Task" bind:value={task} />
<button on:click={addTaskToList}>Add</button>
