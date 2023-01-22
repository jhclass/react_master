import {useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";



function ToDoList() {
  
    const toDos= useRecoilValue(toDoState);
   
    
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo />
            <ul>
                {toDos.map((toDo)=><li key={toDo.id}>{toDo.text}</li>) }
            </ul>
        </div>
    );
}



export default ToDoList;