import { writable } from "svelte/store";
import { browser } from "$app/env";


// function createCounter() {
//   const { update } = writable(0);
//   let state = 0;
//   return {
//       next(length: number) {
//         update((n) => {
//           n = (n + 1) % length;
//           state = n;
//           return state;
//         });
//       return state;
//     },
//     change_index(new_index: number) {
//       update((n) => {
//         n = new_index;
//         state = n;
//         return state;
//       })
//     },
//     get_index: () => state,
//   };
// }

// export let theme_counter = createCounter();
function Theme() {
  const {update} = writable(browser && localStorage.getItem("user-theme")?.toString());
  let theme = (browser && localStorage.getItem('user-theme'));
  return {
    change_theme(name: string) {
      update((n) => {
        n = name;
        theme = name;
        return theme;
      })
    },
    get_theme: () => theme,
  }
}

if (browser) {
  document.cookie = "user-theme";
}
export let theme = Theme();