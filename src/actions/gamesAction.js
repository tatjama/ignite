import axios from 'axios';
import {popularGamesURL} from '../api';

export const loadGames = () => async (dispatch) => {
    //FETCH POPULAR GAMES
    //axios.get(popularGamesURL()).then(data => {console.log(data) })

    const popularData = await axios.get(popularGamesURL())
    dispatch(
        {
            type: 'FETCH_GAMES',
            payload: {
                popular: popularData.data.results
            }
        }
        )

}