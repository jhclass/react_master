import {useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState,toDoSelector } from "../atoms";
import ToDo from "./ToDo"



function ToDoList() {
  
    const toDos= useRecoilValue(toDoState);
    const [toDo,doing,done]= useRecoilValue(toDoSelector);
   //console.log(selectorOutput);
    
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo />
            <hr/>
            <h2>To Do</h2>
            <ul>
                {toDo.map((toDo)=><ToDo key={toDo.id} {...toDo}/>) }
            </ul>
            <hr/>
            <h2>Doing</h2>
            <ul>
                {doing.map((toDo)=><ToDo key={toDo.id} {...toDo}/>) }
            </ul>
            <hr/>
            <h2>Done</h2>
            <ul>
                {done.map((toDo)=><ToDo key={toDo.id} {...toDo}/>) }
            </ul>
        </div>
    );
}



export default ToDoList;