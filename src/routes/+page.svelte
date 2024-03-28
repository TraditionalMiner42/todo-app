<script>
	import { goto } from "$app/navigation";
	import { clearTaskList } from "./store";

	let toggleAddTask;
	export let toggleEditTask;

	toggleAddTask = () => goto("/add");

	toggleEditTask = () => goto("/edit");
</script>

<div class="btn-wrapper">
	<button class="btn" on:click={toggleAddTask}>Add Task</button>
	<button class="btn" on:click={() => toggleEditTask()}>Edit Task</button>
	<button class="btn" on:click={clearTaskList}>Clear Task</button>
</div>
