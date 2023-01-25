import {atom,selector} from 'recoil';

export interface IToDo {
    text:string;
    category: "TO_DO" | "DOING" | "DONE";
    id:number;
}

export const categoryState = atom({
        key:"category",
        default:"TO_DO"
});


export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default:[],

});
export const toDoSelector = selector({
    key:"toDoSelector",
    get:({get})=>{
        const toDos = get(toDoState)
        return [
            toDos.filter((toDo)=>toDo.category==="TO_DO"),
            toDos.filter((toDo)=>toDo.category==="DOING"),
            toDos.filter((toDo)=>toDo.category==="DONE"),
        ]
    }
},);