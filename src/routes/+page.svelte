<script>
	import { goto } from "$app/navigation";
	import { clearTaskList, toggleEdit } from "./store";
	import { onDestroy } from "svelte";

	let toggleAdd = false;
	let toggleEditButton = false;
	let toggleAddTask;
	export let toggleEditTask;

	$: console.log("toggle edit task: ", $toggleEdit);

	toggleAddTask = () => {
		toggleAdd = !toggleAdd;
		if (toggleAdd) goto("/add");
		else goto("/");
	};

	toggleEditTask = () => {
		toggleEdit.set(!$toggleEdit);
		if ($toggleEdit) goto("/edit");
		else goto("/");
	};

	const unsubscribe = toggleEdit.subscribe(
		(toggleEditTask) => (toggleEditButton = toggleEditTask)
	);
	onDestroy(unsubscribe);
</script>

<!-- {#if toggleAdd}
	<AddTask />
{:else} -->
<div class="btn-wrapper">
	<button class="btn" on:click={toggleAddTask}>Add Task</button>
	<button class="btn" on:click={() => toggleEditTask()}>Edit Task</button>
	<button class="btn" on:click={clearTaskList}>Clear Task</button>
</div>

<!-- {/if} -->
