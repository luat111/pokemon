import {
    FETCH_DATA_POKEMON, FETCH_DATA_POKEMON_COMPLETE,
} from '../actionTypes/pokemonActionType';
import { fetchData } from '../../api/index';

const fetchDataListPokemon = () => {
    return {
        type: FETCH_DATA_POKEMON,
    }
}

const fetchDataListPokemonComplete = (fetchedData) => {
    return {
        type: FETCH_DATA_POKEMON_COMPLETE,
        payload: { fetchedData }
    }
}

export const fetchApiListPokemon = (url) => async (dispatch) => {
    try {
        await dispatch(fetchDataListPokemon());
        const data = await fetchData(url);
        const { results } = data;
        await dispatch(fetchDataListPokemonComplete(results));
    }
    catch (err) {
        console.log(err);
    }
}

