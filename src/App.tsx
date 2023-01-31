import { FormEvent, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import {atom, useRecoilState, selector, useRecoilValue} from 'recoil';

const minState = atom({
  key:"minState",
  default:0,
})

const changedTime = selector({
  key:"changedTime",
  get:({get})=>{
    const min = get(minState);
    return min/60;
  },
  set:({set},newVal)=>{
    console.log('newval',newVal);
    const hour = Number(newVal)*60;
    set(minState,hour)

  }
});


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
  //const [min,setMin] = useState(0);
  const [min,setMin] = useRecoilState(minState);
  const [hour,setHour] = useRecoilState(changedTime);
  const onChange = (event:React.FormEvent<HTMLInputElement>)=>{
    //console.log(event.currentTarget.value);
    setMin(+event.currentTarget.value);
  }
  const onHoursChange = (event:React.FormEvent<HTMLInputElement>)=>{
    setHour(+event.currentTarget.value);
  }
   
  return (
    <div>
      <input type="number" value={min} placeholder='분' onChange={onChange}/>
      <input type="number" value={hour} placeholder='시간' onChange={onHoursChange}/>
    </div>
    
  );

}

export default App;
