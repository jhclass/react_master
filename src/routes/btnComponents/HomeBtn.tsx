import { Link } from "react-router-dom";
import styled from "styled-components";
const Btn_home = styled.div`
position:fixed;
top:20px;
right:20px;
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
function HomeBtn(){
    return (
        <>
            <Btn_home>
                <Link to={"/"}>
                    <span className="xi-home-o"></span>
                </Link>
            </Btn_home>
        </>
    
    );
}
export default HomeBtn;