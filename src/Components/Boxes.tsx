import styled from 'styled-components';
import {useQuery} from 'react-query';
import {motion} from 'framer-motion';
import {getMovieImages,IImages} from '../api';
import { makeImagePath } from '../Utils';
import { Tween } from 'jquery';

const Box = styled(motion.div)<{bgImage:string}>`
position:relative;
background-image: url(${props=>props.bgImage});
background-size:cover;
height:250px;
color:black;
font-size:64px;
overflow:hidden;
cursor: pointer;
&:first-child {
    transform-origin: center left;
}
&:last-child {
    transform-origin:center right;
}
`;

const Info = styled(motion.div)`
 padding:20px;
 background-color:${props=>props.theme.black.lighter};
 opacity: 0;
 position:absolute;
 width:100%;
 bottom:0px;
  h4 {text-align:center; color:#fff; font-size:18px;}
`;

const boxVariants = {
    normal:{scale:1,y:0},
    hover:{scale:1.3, y:-50,zIndex:999999,transition:{delay:0.3,type:Tween}},
}

const infoVariants = {
   
    hover:{
        opacity:1
    }
}

interface iMovieImages {
    id:number,
    title:string,
    description:string,
    index:number,
}
function Boxes ({id,title,description,index}:iMovieImages) {
   const {data,isLoading} = useQuery<IImages>(['images','checkLoading'],getMovieImages);
   //console.log(data);
    return (
        <Box
        bgImage={makeImagePath(data?.backdrops[index].file_path||"","w500")}
        variants={boxVariants}
        initial="normal"
        whileHover="hover"
        transition={{type:"tween"}}
       
        >{/**이렇게 했더니 하위요소에 상속이 안되네.. */}
            <Info variants={infoVariants}> 
                <h4>{title}</h4>
            </Info>
        </Box>
    );
}
export default Boxes;