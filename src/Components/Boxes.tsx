import styled from 'styled-components';
import {useQuery} from 'react-query';
import {motion} from 'framer-motion';
import {getMovieImages,IImages} from '../api';
import { makeImagePath } from '../Utils';
import { Tween } from 'jquery';

const Box = styled(motion.div)<{bgImage:string}>`
background-image: url(${props=>props.bgImage});
background-size:cover;
height:250px;
color:Red;
font-size:64px;
overflow:hidden;
cursor: pointer;
&:first-child {
    transform-origin: center left;
}
&:last-child {
    transform-origin:center right
}
`;
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
        whileHover={{scale:1.3, y:-50,transition:{delay:0.3,type:Tween}}}
        transition={{type:"tween"}}
       
        >{title}</Box>
    );
}
export default Boxes;