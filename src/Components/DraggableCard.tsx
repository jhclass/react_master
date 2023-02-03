import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
background-color:${(props)=>props.theme.cardColor};
padding:10px 10px;
border-radius:5px;
margin-bottom:5px;
`;


interface IDragabbleCardProps {
    toDo:string,
    index:number,
    key:string

}
function DraggableCard({key,toDo,index}:IDragabbleCardProps){
    console.log(toDo,index);
    return(
        <Draggable key={key} draggableId={toDo} index={index}>{(magic,snapshot)=>
            (
            <Card 
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
            >
            
            {toDo}</Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);