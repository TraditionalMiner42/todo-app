import { writable } from "svelte/store";

let taskList = writable([]);
let idCounter = writable(0);
let numCheckedTasks = writable(0);
let checkedTaskId = writable([]);
let isChecked = writable(false);

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
