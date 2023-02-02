import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import {toDoState} from './atoms'
import { useRecoilState } from 'recoil';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  
  
  font-family: 'Noto Sans KR', sans-serif;
}
a {text-decoration:none;}
*{box-sizing:border-box;}
`;

const Wrapper = styled.div`
display:flex;
max-width:480px;
width:100%;
margin:0 auto;
justify-content: center;
align-items:center;
height:100vh;
`;

const Boards = styled.div`
display:grid;
width:100%;
grid-template-columns: repeat(3,1fr);
`;


const Board = styled.div`
 background-color:${(props)=>props.theme.boardColor};
 padding:30px 10px 10px 10px;
 border-radius:5px;
 min-height:200px;
 `;
const Card = styled.div`
background-color:${(props)=>props.theme.cardColor};
padding:10px 10px;
border-radius:5px;
margin-bottom:5px;
`;



function App() {
  const [toDos,setTodos] = useRecoilState(toDoState);
 const onDragEnd = ({draggableId, destination, source}:DropResult)=>{
//  const oldIndex:any = toDos.splice(source.index,1);
  //toDos.splice(oldIndex,0,destination.index);
  if(!destination) return;
  setTodos((oldToDos)=>{

    const copyToDos = [...oldToDos];
    copyToDos.splice(source.index,1);
    copyToDos.splice(destination?.index,0,draggableId);
    return copyToDos;

  });
  console.log('finished',source,destination);
 };
   
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(magic)=>
            <Board ref={magic.innerRef} {...magic.droppableProps}>{/**draggableId는 고유해야한다. draggableId와 key의 값은 동일해야한다 */}
              {toDos.map((toDo,index)=><Draggable key={toDo} draggableId={toDo} index={index}>{(magic)=><Card 
              ref={magic.innerRef}
              {...magic.draggableProps}
              {...magic.dragHandleProps}
              >
              
              {toDo}</Card>}</Draggable>)}
            
              {magic.placeholder} {/*위치가 중요 Droppable과 Draggable의 사이! */}
            </Board>
            }
            
          </Droppable>
        </Boards>
        
      </Wrapper>
    </DragDropContext>
  );

}

export default App;
