import { writable } from "svelte/store";
import { browser } from "$app/environment";

let taskList = writable([]);
let idCounter = writable(0);
let numCheckedTasks = writable(0);
let checkedTaskId = writable([]);
let isChecked = writable(false);

if (browser) {
	const initialTasks = sessionStorage.getItem("task")
		? JSON.parse(sessionStorage.getItem("task"))
		: [];
	taskList.set(initialTasks);
}

taskList.subscribe((updatedTasks) => {
	if (browser) {
		sessionStorage.setItem("task", JSON.stringify(updatedTasks));
	}
});

const clearTaskList = () => {
	taskList.set([]);
};

export {
	taskList,
	clearTaskList,
	idCounter,
	numCheckedTasks,
	checkedTaskId,
	isChecked,
};
