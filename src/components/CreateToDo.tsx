import {useForm} from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {categoryState, toDoState} from '../atoms';
interface IForm {
    toDo:string;
}
interface IToDo {
    text:string;
    category: "TO_DO" | "DOING" | "DONE";
    id:number;
}


function CreateToDo(){
    const {register,handleSubmit,setValue} = useForm<IForm>();
    const [toDos,setToDos] = useRecoilState(toDoState); // 두줄로 쓰는것보다 한줄로 쓰는게 낫지 , useState랑 비슷하네?
    //const value = useRecoilValue(toDoState);
   // const modFn = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const onValid = ({toDo}:IForm)=>{
        console.log(toDo);
        setToDos(oldToDos=> [{text:toDo, id:Date.now(), category:category},...oldToDos])
        setValue("toDo","");   
    }
    console.log(toDos);
    return (
        <form onSubmit={handleSubmit(onValid)} >
                <input {...register("toDo",{required:"Please write a Todo"})} placeholder="Write a to do"/>
                <button>add</button>
        </form>
    );

}

export default CreateToDo;