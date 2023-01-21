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
interface Iform { //필수항목이 아닌게 있다면?  ?를 붙여  lastName?:string
    password2:string,
    password1:string,
    lastName:string,
    userName:string,
    firstName:string,
    email:string,
    extraError?:string,
    
}
function ToDoList() {
    const { register, handleSubmit, formState:{errors}, setError, setFocus} = useForm<Iform>({defaultValues:{
        email:"@naver.com"
    }});
    const onValid = (data:Iform)=>{
        if(data.password1 !== data.password2){
             //console.log(data);
            setError("password2",{
                message:"패스워드가 같지 않아요",
            },
            //{shouldFocus:true}
            );
            //setError를 통해 강제 포커스 시킬수 있다? 하지만 다시 선택영역을 발생시키지는 않음 setFocus가 훨씬 좋음.
            setFocus("password2",{shouldSelect:true});
       
        }
        setError("extraError",{message:"Server offline"});
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
                <input {...register("password1",{required:"Password1 is required", minLength:{value:5, message:"Too Short!"}})} placeholder="Password1"/>
                <span>
                    {errors.password1?.message}
                </span>
                <input id="focuss" {...register("password2",{required:"Password2 is required", minLength:{value:5, message:"Too Short!"}})} placeholder="Password2"/>
                <span>
                    {errors.password2?.message}
                </span>
                <button>Add</button>
                <span>
                    {errors.extraError?.message}
                </span>
            </form>
        </div>
    );
}



export default ToDoList;