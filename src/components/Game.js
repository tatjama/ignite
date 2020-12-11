import React from 'react';
//Styled and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';

const Game = ({name, released, id, platforms, image }) => {
    const dispatch = useDispatch();
    const loadGameHandler = () => {
        dispatch(loadDetail(id))
    }

    return(
        <StyledGame onClick = {loadGameHandler} >
            <h3>{name}</h3>
            <h3>{released}</h3>
            <h3>Id: {id}</h3>
            {/*<h3>Platform: {platforms.map(platform => {
                return(
                    <div key={platform.platform.id}>
                        {platform.platform.name}
                    </div>
                )
            })}</h3>*/}
            
            <img src = {image} alt = {name}/>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)` 
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
border-radius: 1rem;
text-align: center;
img{
width: 100%;
height: 40vh;
object-fit: cover;

}
`

export default Game