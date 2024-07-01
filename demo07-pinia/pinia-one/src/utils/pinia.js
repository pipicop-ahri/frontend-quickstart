import {defineStore} from 'pinia'
import {computed, ref} from "vue";

// export const useDemoStore = defineStore('counter', {
//     state: () => ({money:100}),
//     getters: {
//         rmb: (state) => state.money,
//         usd: (state) => state.money * 0.14,
//         ote: (state) => state.money * 0.13,
//     },
//     actions: {
//         pay(arg) {
//             this.money -= arg;
//         },
//         kill(arg) {
//             this.money += arg;
//         }
//     },
// });


export const useDemoStore = defineStore('counter',() => {
    const money = ref(0);
    const rmb = computed(() => money.value);
    const usd = computed(() => money.value * 0.14);
    const ote = computed(() => money.value * 0.13);

    function pay(arg) {
        money.value -= arg;
    }
    const kill = (arg) => {
        money.value += arg;
    }
    return {money,rmb,usd,ote,pay,kill}
})