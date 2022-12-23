import styled from "styled-components";

const Btn_menu = styled.div`
position:fixed;
top:20px;
left:20px;
width:30px;
height:30px;
dipslay:flex;
justify-content:center;
align-items:center;
color:#fff;
font-size:30px;
cursor:pointer;
 a {color:#fff;}
`;
function MenuBtn(){
    return (
    <Btn_menu><span className="xi-bars"></span></Btn_menu>
    );
}
export default MenuBtn;