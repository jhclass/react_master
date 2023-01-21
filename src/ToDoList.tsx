import { useState } from "react";
import {useForm} from "react-hook-form";
import { Interface } from "readline";
import { isInterfaceDeclaration } from "typescript";


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
interface Iform { //필수항목이 아닌게 있다면?  ?를 붙여  lastName?:string
    
    password:string,
    lastName:string,
    userName:string,
    firstName:string,
    email:string,
}
function ToDoList() {
    const { register, handleSubmit, formState:{errors}} = useForm<Iform>({defaultValues:{
        email:"@naver.com"
    }});
    const onValid = (data:any)=>{
        console.log(data);
    }
    //console.log(register("To Do"));
    //console.log(watch())
    console.log(errors);
    
    return (
        <div>
            <form style={{display:"flex", flexDirection:"column", width:"300px"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email",{required:"Email required",pattern:{value:/^[A-Za-z0-9._%+-]+@naver.com$/,message:"Only naver.com eamils allowed"}})} placeholder="Email"/>
                <span>
                    {errors.email?.message}
                </span>
                <input {...register("firstName",{required:"Password is required", minLength: {
                    value:5,message:"Your first is too short"
                }})} placeholder="First name"/>
                <span>
                    {errors.firstName?.message}
                </span>
                <input {...register("lastName",{required:"Last name is required",minLength:{value:5,message:"Too Short!"}})} placeholder="Last name"/>
                <span>
                    {errors.lastName?.message}
                </span>
                <input {...register("userName",{required:"User's name is required", minLength:{value:5,message:"Too Short!"}})} placeholder="User name"/>
                <span>
                    {errors.userName?.message}
                </span>
                <input {...register("password",{required:"Password is required", minLength:{value:5, message:"Too Short!"}})} placeholder="Password"/>
                <span>
                    {errors.password?.message}
                </span>
                <button>Add</button>
            </form>
        </div>
    );
}



export default ToDoList;