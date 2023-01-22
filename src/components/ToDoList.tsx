import {useForm} from "react-hook-form";

interface IForm {
    toDo:string;
}
function ToDoList() {
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onValid = (data:IForm)=>{
        console.log(data.toDo);
        setValue("toDo","");
    }
    
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form onSubmit={handleSubmit(onValid)} >
                <input {...register("toDo",{required:"Please write a Todo"})} placeholder="Write a to do"/>
                <button>add</button>
            </form>
            <ul></ul>
        </div>
    );
}



export default ToDoList;