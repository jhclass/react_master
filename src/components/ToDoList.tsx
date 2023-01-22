import {useForm} from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


interface IForm {
    toDo:string;
}
interface IToDo {
    text:string;
    category: "TO_DO" | "DOING" | "DONE";
    id:number;
}

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default:[],

});

function ToDoList() {
    const [toDos,setToDos] = useRecoilState(toDoState); // 두줄로 쓰는것보다 한줄로 쓰는게 낫지 , useState랑 비슷하네?
    //const value = useRecoilValue(toDoState);
   // const modFn = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onValid = ({toDo}:IForm)=>{
        console.log(toDo);
        setToDos(oldToDos=> [{text:toDo, id:Date.now(), category:"TO_DO"},...oldToDos])
        setValue("toDo","");   
    }
    console.log(toDos);
    
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form onSubmit={handleSubmit(onValid)} >
                <input {...register("toDo",{required:"Please write a Todo"})} placeholder="Write a to do"/>
                <button>add</button>
            </form>
            <ul>
                {toDos.map((toDo)=><li key={toDo.id}>{toDo.text}</li>) }
            </ul>
        </div>
    );
}



export default ToDoList;