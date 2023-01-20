import { useState } from "react";
import {useForm} from "react-hook-form";


// function ToDoList() {
//     const [toDo,setTodo] = useState("");
//     const [toDoError,setToDoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>)=>{ // :any 를 안쓰면 value 라는 값을 못찾는다.
//         // console.log(event.target.value);
//         // const {value}=event.target
//         const {currentTarget:{value},}=event;
//         setTodo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
//         event.preventDefault();
//         if (toDo.length < 10) {
//             setToDoError("좀 더 길게 작성해보세요...");
//             return console.log(toDoError);
//         }
//         console.log('submit');
//     }
//     return (
        
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input value={toDo} onChange={onChange}placeholder="Write a to do"/>
//                 <button type="submit">Add</button>
//             </form>
//         </div>
//     );
// }

function ToDoList() {
    const { register, handleSubmit} = useForm();
    const onValid = (data:any)=>{
        console.log(data);
    }
    //console.log(register("To Do"));
    //console.log(watch())
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("email",{required:true})} placeholder="Email"/>
                <input {...register("firstName",{required:true})} placeholder="First name"/>
                <input {...register("lastName",{required:true})} placeholder="Last name"/>
                <input {...register("userName",{required:true})} placeholder="User name"/>
                <input {...register("Password",{required:true})} placeholder="Password"/>
                <button>Add</button>
            </form>
        </div>
    );
}



export default ToDoList;