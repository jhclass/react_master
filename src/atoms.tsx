import {atom,selector} from 'recoil';

export const minuteState = atom({
    key:"minutes",
    default:0,
});


export const hourSelector = selector({
    key: "hours",
    get:({get})=>{
        const minute = get(minuteState);
        return minute/60;

    },
    set:({set},newValue)=>{
        console.log(newValue);
        const minutes = Number(newValue)*60
        set(minuteState,minutes);
    }
});