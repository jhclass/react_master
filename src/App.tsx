import { FormEvent, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';




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
  background-color:${props=>props.theme.accentColor};
  color:${props=>props.theme.textColor};
  font-family: 'Noto Sans KR', sans-serif;
}
a {text-decoration:none;}
*{box-sizing:border-box;}
`;

function App() {
 const onDragEnd = ()=>{

 };
   
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId='one'>
          {(magic)=>
          <ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId="first" index={0}>{(magic)=><li 
            ref={magic.innerRef}
            {...magic.draggableProps}
           
     
            >
            <span {...magic.dragHandleProps}>💕</span>
            One</li>}</Draggable>
            <Draggable draggableId="seconds" index={1}>{(magic)=><li
            ref={magic.innerRef} 
            {...magic.dragHandleProps}
            {...magic.draggableProps}
            >Two</li>}</Draggable>
            
          </ul>}
        </Droppable>
      </div>
    </DragDropContext>
  );

}

export default App;
