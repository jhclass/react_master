import { IToDo } from "../atoms";

function ToDo({text,category}:IToDo) {
    const onClick = (newCategory:IToDo["category"])=>{
        console.log(newCategory);
    }
    return (
    <li>
        <span>{text}</span>
        {category !== "TO_DO" && <button onClick={()=>onClick("TO_DO")}>To Do</button>}
        {category !== "DOING" && <button onClick={()=>onClick("DOING")}>Doing</button>}
        {category !== "DONE" && <button onClick={()=>onClick("DONE")}>Done</button>}
    </li>
    );
}

export default ToDo;