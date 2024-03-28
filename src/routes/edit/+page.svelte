<script>
	import { checkedTaskId } from "../store";

	$: console.log("Checked length: ", $checkedTaskId.length);
</script>

<div class="btn-wrapper">
	{#if $checkedTaskId.length !== 0}
		{#if $checkedTaskId.length === 1}
			<button class="btn">Rename</button>
		{/if}
		<button class="btn">Delete</button>
	{/if}
</div>
