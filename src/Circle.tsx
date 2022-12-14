import styled from 'styled-components';


interface ContainerProps {
    cbgColor:string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color:${props=>props.cbgColor};
    border-radius:100%;

`;
interface CircleProps {
   bgColor:string;
}


function Circle({bgColor}:CircleProps) {
    return (
    <Container cbgColor={bgColor}>box</Container>
    );
}


export default Circle;

