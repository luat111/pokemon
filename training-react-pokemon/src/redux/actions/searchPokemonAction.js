import {
    SEARCH_POKEMOM, SEARCH_POKEMOM_COMPLETE,
} from '../actionTypes/searchPokemonActionType';
import { fetchData } from '../../api/index';

const searchPokemon = (searchBy) => {
    return {
        type: SEARCH_POKEMOM,
        payload: { searchBy }
    }

}

const searchPokemonComplete = (searchBy, fetchedData) => {
    return {
        type: SEARCH_POKEMOM_COMPLETE,
        payload: { searchBy, fetchedData }
    }
}


export const fetchApiSearchPokemon = (url, searchBy) => async (dispatch) => {
    try {
        await dispatch(searchPokemon(searchBy));
        const data = await fetchData(url);
        await dispatch(searchPokemonComplete(searchBy, data));
    }
    catch (err) {
        console.log(err);
    }
}

