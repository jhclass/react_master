import { useState } from "react";


function ToDoList() {
    const [toDo,setTodo] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>)=>{ // :any 를 안쓰면 value 라는 값을 못찾는다.
        // console.log(event.target.value);
        // const {value}=event.target
        const {currentTarget:{value},}=event;
        setTodo(value);
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(toDo);
    }
    return (
        
        <div>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange}placeholder="Write a to do"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
export default ToDoList;