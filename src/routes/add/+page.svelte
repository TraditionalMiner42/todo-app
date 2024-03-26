<script>
	import { taskList, idCounter } from "../store";

	let task = "";

	$: {
		if ($taskList.length === 0) console.log("reset");
		else console.log($taskList);
	}

	const handleClick = () => {
		addTaskToList();
	};

	const handleKeyPressed = (event) => {
		if (event.key === "Enter") addTaskToList();
	};

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

<div class="btn-wrapper">
	<input
		class="input-task"
		placeholder="Add Task"
		on:keydown={handleKeyPressed}
		bind:value={task}
	/>
	<button class="btn" on:click={handleClick}>Add</button>
</div>
