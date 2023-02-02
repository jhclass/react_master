import {atom,selector} from 'recoil';


interface IToDoState{ // 이렇게 작성하지 않으면 타입스크립트는 todoState가 주어진것만 허용할것이다. 나중에 사용자들이 글을 입력할 수도 있기에 type의 범위를 확장할 필요가 있다.
   [key:string]:string[], 
}

export const toDoState = atom<IToDoState>({
    key:"toDo",
    default: {
        "To Do":['a','b','c','d','e','f'],
        doing:['1','2','3','4','5','6'],
        done:['h','i'],
    }
});
