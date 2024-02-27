import { defineStore } from "pinia";

type RouteSwitchType = 'enter' | 'leave';

export const useStore = defineStore('main', {
    state: ()=> {
        return {
            switchType: 'enter' as RouteSwitchType
        }
    }
})