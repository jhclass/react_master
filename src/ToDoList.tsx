import {useForm} from "react-hook-form";

interface IForm {
    toDo:string;
}
function ToDoList() {
    const {register, handleSubmit} = useForm<IForm>();
    const onValid = (data:IForm)=>{
        console.log(data.toDo);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)} >
                <input {...register("toDo",{required:"Please write a Todo"})} placeholder="Write a to do"/>

              
            </form>
        </div>
    );
}



export default ToDoList;