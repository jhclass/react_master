import styled from 'styled-components';
import {useQuery} from 'react-query';
import {motion} from 'framer-motion';
import {getMovieImages,IImages} from '../api';
import { makeImagePath } from '../Utils';

const Box = styled(motion.div)<{bgImage:string}>`
background-image: url(${props=>props.bgImage});
background-size:cover;
height:250px;
color:Red;
font-size:64px;
overflow:hidden;
`;
interface iMovieImages {
    id:number,
    title:string,
    description:string,
    index:number
}
function Boxes ({id,title,description,index}:iMovieImages) {
   const {data,isLoading} = useQuery<IImages>(['images','checkLoading'],getMovieImages);
   //console.log(data);
    return (
        <Box
        bgImage={makeImagePath(data?.backdrops[index].file_path||"")}
        >{title}</Box>
    );
}
export default Boxes;