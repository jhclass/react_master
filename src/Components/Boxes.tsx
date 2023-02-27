import styled from 'styled-components';
import {useQuery} from 'react-query';
import {motion} from 'framer-motion';
import {getMoviesList,IMovieList} from '../api';
import { makeImagePath } from '../Utils';
import { Tween } from 'jquery';
import { useHistory, useRouteMatch } from 'react-router';

const Box = styled(motion.div)<{bgImage:string}>`

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
 background-image:linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.5));
 opacity: 0;
 position:absolute;
 width:100%;
 height:100%;
 bottom:0px;
 display:flex;
 justify-content: center;
 align-items: center;
  h4 {text-align:center; color:#fff; font-size:25px;font-weight:bold;}
`;

const boxVariants = {
    normal:{scale:1,y:0},
    hover:{scale:1.3, y:-50,zIndex:999999,transition:{delay:0.3,type:Tween}},
}

const infoVariants = {
   
    hover:{
        opacity:1,
        transition:{delay:0.3,type:Tween}
    }
}

interface iMovieImages {
    id:number,
    title:string,
    description:string,
    index:number,
    imgPath:string
}
function Boxes ({id,title,description,index,imgPath}:iMovieImages) {

   const {data,isLoading} = useQuery<IMovieList>(['images','checkLoading'],getMoviesList);
   const history = useHistory();
   console.log('팝',data);
   const onBoxClicked = (movieId:number)=>{
    history.push(`/movies/${movieId}`);
   }
   //console.log('무비',id);
    return (
        <Box
        layoutId={id+""}
        bgImage={makeImagePath(imgPath||"","w500")}
        variants={boxVariants}
        initial="normal"
        whileHover="hover"
        transition={{type:"tween"}}
        onClick={()=>onBoxClicked(id)}
        >
            <Info variants={infoVariants}> 
                <h4>{title}</h4>
            </Info>
        </Box>
    );
}
export default Boxes;