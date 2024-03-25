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
		// toggleEdit = !toggleEdit;
		toggleEdit.set(!$toggleEdit);
		if ($toggleEdit) goto("/edit");
		else goto("/");
	};

	const unsubscribe = toggleEdit.subscribe(
		(value) => (toggleEditButton = value)
	);
	onDestroy(unsubscribe);
</script>

<!-- {#if toggleAdd}
	<AddTask />
{:else} -->
<button on:click={toggleAddTask}>Add Task</button>
<button on:click={() => toggleEditTask()}>Edit Task</button>
<button on:click={clearTaskList}>Clear Task</button>
<!-- {/if} -->
