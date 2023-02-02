import { Droppable } from "react-beautiful-dnd"; 
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
 background-color:${(props)=>props.theme.boardColor};
 padding:30px 10px 10px 10px;
 border-radius:5px;
 min-height:200px;
 `;    
interface IBoardProps {
    toDos:string[],
    
    boardId:string
}
const Title = styled.h2`
text-align:Center;
`;


function Board({toDos,boardId}:IBoardProps){
    
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic)=>
                <div ref={magic.innerRef} {...magic.droppableProps}>{/**draggableId는 고유해야한다. draggableId와 key의 값은 동일해야한다 */}
                    {toDos.map((toDo,index)=>
                    <DraggableCard key={toDo} toDo={toDo} index={index}/>
                    )}
                
                    {magic.placeholder} {/*위치가 중요 Droppable과 Draggable의 사이! */}
                </div>
                }
        
                
            </Droppable> 
        </Wrapper>
    );
}

export default Board;

