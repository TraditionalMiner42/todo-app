import { derived, writable } from "svelte/store";

let taskList = writable([]);
let idCounter = writable(0);
let toggleEdit = writable(false);

const clearTaskList = () => {
	taskList.set([]);
};

export { taskList, clearTaskList, idCounter, toggleEdit };
