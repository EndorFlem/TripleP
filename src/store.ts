import { writable } from "svelte/store";

function createCounter() {
  const { update } = writable(0);
  let state = 0;
  return {
      next(length: number) {
        update((n) => {
          n = (n + 1) % length;
          state = n;
          return state;
        });
      return state;
    },
    get_index: () => state,
  };
}

export let theme_counter = createCounter();
