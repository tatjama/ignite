import React , {useEffect} from 'react';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//components
import Game from '../components/Game';
//Style and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Home = () => {
    const dispatch = useDispatch();
  useEffect(
    () =>{
      dispatch(loadGames());
    },[dispatch]
  )
const {popular, newGames, upcoming} = useSelector(state =>state.games)

    return(
        <GameList>
            <h2>Upcoming games</h2>
            <Games>
            {upcoming.map((game) => {                        
                           return <Game 
                                key = {game.id} 
                                id = {game.id} 
                                name = {game.name} 
                                released = {game.released}
                                platforms = {game.platforms}
                                image = {game.background_image}
                            />                        
                    })
            }
            </Games>
            <h2>Popular Games</h2>
            <Games>
            {popular.map((game) => {                        
                           return <Game 
                                key = {game.id} 
                                id = {game.id} 
                                name = {game.name} 
                                released = {game.released}
                                platforms = {game.platforms}
                                image = {game.background_image}
                            />                        
                    })
            }
            </Games>
            <h2>New Games</h2>
            <Games>
            {newGames.map((game) => {                        
                           return <Game 
                                key = {game.id} 
                                id = {game.id} 
                                name = {game.name} 
                                released = {game.released}
                                platforms = {game.platforms}
                                image = {game.background_image}
                            />                        
                    })
            }
            </Games>
        </GameList>
    )
}
const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
    padding: 5rem 0rem;
}
`
const Games = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
`

export default  Home;