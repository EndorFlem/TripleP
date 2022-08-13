import { writable } from "svelte/store";

function createCounter() {
  const { update } = writable(0);
  let state = 0;
  return {
      next(length: number) {
        update((n) => {
          n = (n + 1) % length;
          state = n;
          return n;
        });
      return state;
    },
    get_index: () => state,
  };
}

//а можно было вынести переменную в файл и сделать 2 метода - increase/decreaese ThemeIndex, 
//чтобы было понятней о чем идёт речь, ибо в этом разобраться нереально?

export let theme_counter = createCounter();
