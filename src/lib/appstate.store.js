import { writable } from "svelte/store";

export const appState = writable({
  switch1: "On"
})