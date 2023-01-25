import {useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState,toDoSelector,categoryState } from "../atoms";
import ToDo from "./ToDo"



function ToDoList() {
  
   
    const [toDo,doing,done]= useRecoilValue(toDoSelector);
    const [category,setCategory] = useRecoilState(categoryState);
   //console.log(selectorOutput);
    const onInput = (event:React.FormEvent<HTMLSelectElement>)=>{ //select > option이 변경되는것을 감지
        //console.log(event?.currentTarget.value)
        setCategory(event.currentTarget.value);
    }
    console.log(category);
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form>
                <select onInput={onInput} value={category}>
                    <option value="TO_DO">To Do</option>
                    <option value="DOING">Doing</option>
                    <option value="DONE">Done</option>
                </select>
            </form>
            
            <CreateToDo />
            {category === "TO_DO" && toDo.map(aToDo=> <ToDo key={aToDo.id} {...aToDo}/>)}
            {category === "DOING" && doing.map(aToDo=> <ToDo key={aToDo.id} {...aToDo}/>)}
            {category === "DONE" && done.map(aToDo=> <ToDo key={aToDo.id} {...aToDo}/>)}
            
        </div>
    );
}



export default ToDoList;