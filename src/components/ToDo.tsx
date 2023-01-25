import React from "react";
import { useRecoilState,useSetRecoilState } from "recoil";
import { Categories, IToDo,toDoState } from "../atoms";

function ToDo({text,category,id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    // const onClick = (newCategory:IToDo["category"])=>{
    //     console.log(newCategory);
    // }
    
    const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        const {currentTarget:{name}} =event
        //console.log(name);
        setToDos((oldToDos)=>{
            const targetIndex = oldToDos.findIndex(_this=>_this.id===id)
            const newToDo = {text, id, category:name as any} //name은 "TO_DO" | "DOING" 이렇게 되어있어야 하는데 그냥 string이기 때문에 오류 as any로 회피해버림..
            return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)];
        })
    }
    
    return (
    <li>
        <span>{text}</span>
        {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
        {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
        {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
    </li>
    );
}

// function ToDo({text,category}:IToDo) {
//     const onClick = (newCategory:IToDo["category"])=>{
//         console.log(newCategory);
//     }
//     return (
//     <li>
//         <span>{text}</span>
//         {category !== "TO_DO" && <button onClick={()=>onClick("TO_DO")}>To Do</button>}
//         {category !== "DOING" && <button onClick={()=>onClick("DOING")}>Doing</button>}
//         {category !== "DONE" && <button onClick={()=>onClick("DONE")}>Done</button>}
//     </li>
//     );
// }

export default ToDo;